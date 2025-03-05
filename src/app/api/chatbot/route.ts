import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY || '');

// Define the system prompt
const SYSTEM_PROMPT = `You are a helpful equipment rental assistant for Geelong Excavator Hire. Your job is to help customers find the right equipment for their projects and assist with bookings.

IMPORTANT GUIDELINES:
1. Only answer questions related to equipment hiring, construction projects, and our services.
2. If asked about topics outside of equipment hiring, politely redirect the conversation back to how you can help with their equipment needs.
3. If you don't know an answer, don't make it up. Instead, suggest they contact us directly at info@gehire.net or call 0408 851 525.
4. Be friendly, professional, and helpful at all times.
5. Encourage customers to book equipment when appropriate.
6. Ask only ONE question at a time - never ask multiple questions in a single message.
7. When a customer selects an excavator, always ask if they need any attachments.
8. Only excavators can use attachments - other equipment types don't have attachments.

EQUIPMENT INFORMATION:
We offer the following categories of equipment:
- Excavators (1.7t to 13t)
- Skid Steer Loaders
- Attachments (only compatible with excavators)
- Compaction Equipment
- Concrete Equipment
- Tipper Trucks
- Non-Destructive Excavation
- Augers & Rock Breakers

BOOKING PROCESS:
1. Help customers select the right equipment for their needs
   - If they select an excavator, ask if they need any attachments
2. Collect their contact information one piece at a time:
   - First ask for their name
   - Then ask for their email
   - Then ask for their phone number
3. Get their rental dates one at a time:
   - First ask for the start date
   - Then ask for the end date
4. Ask about delivery preferences:
   - Ask if they want delivery or pickup
   - If delivery, ask for the delivery address
5. Confirm their booking details

When a customer is ready to book, guide them through the process step by step, asking only ONE question at a time.`;

// Helper function to determine the next booking step
function determineBookingStep(messages: any[], currentStep: string, bookingData: any) {
  // If we're already in a booking step, check if we need to move to the next step
  if (currentStep === 'initial' && messages.some(m => 
    m.role === 'user' && 
    (m.content.toLowerCase().includes('book') || 
     m.content.toLowerCase().includes('hire') || 
     m.content.toLowerCase().includes('rent'))
  )) {
    return 'equipment-selection';
  }
  
  // If equipment is selected, move to contact info
  if (currentStep === 'equipment-selection' && bookingData.equipment) {
    return 'contact-info';
  }
  
  // If contact info is provided, move to dates
  if (currentStep === 'contact-info' && 
      bookingData.name && 
      bookingData.email && 
      bookingData.phone) {
    return 'dates';
  }
  
  // If dates are provided, move to delivery
  if (currentStep === 'dates' && 
      bookingData.startDate && 
      bookingData.endDate) {
    return 'delivery';
  }
  
  // If delivery info is provided, move to confirmation
  if (currentStep === 'delivery' && 
      bookingData.deliveryOption) {
    return 'confirmation';
  }
  
  // If confirmed, move to completed
  if (currentStep === 'confirmation' && 
      messages.some(m => 
        m.role === 'user' && 
        m.content.toLowerCase().includes('confirm')
      )) {
    return 'completed';
  }
  
  // Otherwise, stay in the current step
  return currentStep;
}

// Helper function to extract booking data from messages
function extractBookingData(messages: any[], currentData: any) {
  const lastUserMessage = [...messages].reverse().find(m => m.role === 'user')?.content.toLowerCase() || '';
  const newData: any = { ...currentData };
  
  // Extract name
  const nameMatch = lastUserMessage.match(/my name is ([a-zA-Z ]+)/i);
  if (nameMatch && nameMatch[1] && !newData.name) {
    newData.name = nameMatch[1].trim();
  }
  
  // Extract email
  const emailMatch = lastUserMessage.match(/email(?:| address| is) ?(?:is |:|at )?\s?([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/i);
  if (emailMatch && emailMatch[1] && !newData.email) {
    newData.email = emailMatch[1].trim();
  }
  
  // Extract phone
  const phoneMatch = lastUserMessage.match(/(?:phone|mobile|cell)(?:| number| is)(?:| is| :)\s?([0-9 +-]{8,})/i);
  if (phoneMatch && phoneMatch[1] && !newData.phone) {
    newData.phone = phoneMatch[1].trim();
  }
  
  // Extract dates
  const dateMatch = lastUserMessage.match(/(?:from|starting) ([0-9]{1,2}[\/\-][0-9]{1,2}[\/\-][0-9]{2,4}) (?:to|until|through) ([0-9]{1,2}[\/\-][0-9]{1,2}[\/\-][0-9]{2,4})/i);
  if (dateMatch && dateMatch[1] && dateMatch[2]) {
    newData.startDate = dateMatch[1];
    newData.endDate = dateMatch[2];
  }
  
  // Extract delivery option
  if (lastUserMessage.includes('deliver') || lastUserMessage.includes('delivery')) {
    newData.deliveryOption = 'delivery';
  } else if (lastUserMessage.includes('pickup') || lastUserMessage.includes('pick up')) {
    newData.deliveryOption = 'pickup';
  }
  
  // Extract delivery address
  const addressMatch = lastUserMessage.match(/address(?:| is)(?:| is| :)\s?(.{10,})/i);
  if (addressMatch && addressMatch[1] && newData.deliveryOption === 'delivery') {
    newData.deliveryAddress = addressMatch[1].trim();
  }
  
  // Extract attachment information for excavators
  if (newData.isExcavator && !newData.attachments) {
    // Check if the user wants attachments
    if (lastUserMessage.includes('yes') || 
        lastUserMessage.includes('need attachment') || 
        lastUserMessage.includes('want attachment')) {
      // Initialize attachments array
      newData.attachments = [];
      
      // Check for specific attachments
      if (lastUserMessage.includes('bucket') || lastUserMessage.includes('gummy')) {
        newData.attachments.push('Gummy Bucket');
      }
      if (lastUserMessage.includes('grab') || lastUserMessage.includes('hydraulic grab')) {
        newData.attachments.push('Hydraulic Grab');
      }
      if (lastUserMessage.includes('ripper') || lastUserMessage.includes('tyne')) {
        newData.attachments.push('Ripper Tyne');
      }
      if (lastUserMessage.includes('auger')) {
        newData.attachments.push('Auger');
      }
      
      // If no specific attachments were mentioned but they want attachments
      if (newData.attachments.length === 0 && 
          (lastUserMessage.includes('yes') || lastUserMessage.includes('need'))) {
        newData.attachments = ['Unspecified attachments'];
      }
    } else if (lastUserMessage.includes('no') || 
               lastUserMessage.includes('don\'t need') || 
               lastUserMessage.includes('do not need')) {
      // User explicitly doesn't want attachments
      newData.attachments = [];
    }
  }
  
  return newData;
}

// Helper function to send booking confirmation email
async function sendBookingEmail(bookingData: any): Promise<boolean> {
  if (!bookingData.email) return false;
  
  try {
    await resend.emails.send({
      from: 'Equipment Booking <booking@gehire.net>',
      to: [bookingData.email],
      bcc: ['info@gehire.net'],
      subject: 'Your Equipment Booking Request',
      html: `
        <h1>Booking Request Received</h1>
        <p>Dear ${bookingData.name || 'Customer'},</p>
        <p>Thank you for your equipment booking request. Here are the details:</p>
        <ul>
          <li><strong>Equipment:</strong> ${bookingData.equipment || 'Not specified'}</li>
          <li><strong>Start Date:</strong> ${bookingData.startDate || 'Not specified'}</li>
          <li><strong>End Date:</strong> ${bookingData.endDate || 'Not specified'}</li>
          <li><strong>Delivery Option:</strong> ${bookingData.deliveryOption || 'Not specified'}</li>
          ${bookingData.deliveryAddress ? `<li><strong>Delivery Address:</strong> ${bookingData.deliveryAddress}</li>` : ''}
        </ul>
        <p>We'll be in touch shortly to confirm your booking and provide any additional information.</p>
        <p>If you have any questions, please contact us at info@gehire.net or call 0408 851 525.</p>
        <p>Thank you for choosing Geelong Excavator Hire!</p>
      `,
    });
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { messages, bookingData, bookingStep } = await request.json();
    
    // Determine if we need to update the booking step
    const newBookingStep = determineBookingStep(messages, bookingStep, bookingData);
    
    // Extract booking data from messages
    const newBookingData = extractBookingData(messages, bookingData);
    
    // If booking is completed, send confirmation email
    let emailSent = false;
    if (newBookingStep === 'completed' && !bookingData.emailSent) {
      emailSent = await sendBookingEmail(newBookingData);
      if (emailSent) {
        newBookingData.emailSent = true;
      }
    }
    
    // Format messages for Claude
    const formattedMessages = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role,
      content: msg.content
    }));
    
// Add booking context to the messages
let contextMessage = '';
if (newBookingStep !== 'initial') {
  contextMessage = `Current booking information:\n`;
  if (newBookingData.category) contextMessage += `- Category: ${newBookingData.category}\n`;
  if (newBookingData.equipment) contextMessage += `- Equipment: ${newBookingData.equipment}\n`;
  if (newBookingData.isExcavator) contextMessage += `- Is Excavator: Yes\n`;
  if (newBookingData.attachments && newBookingData.attachments.length > 0) {
    contextMessage += `- Attachments: ${newBookingData.attachments.join(', ')}\n`;
  }
  if (newBookingData.name) contextMessage += `- Name: ${newBookingData.name}\n`;
  if (newBookingData.email) contextMessage += `- Email: ${newBookingData.email}\n`;
  if (newBookingData.phone) contextMessage += `- Phone: ${newBookingData.phone}\n`;
  if (newBookingData.startDate) contextMessage += `- Start Date: ${newBookingData.startDate}\n`;
  if (newBookingData.endDate) contextMessage += `- End Date: ${newBookingData.endDate}\n`;
  if (newBookingData.deliveryOption) contextMessage += `- Delivery Option: ${newBookingData.deliveryOption}\n`;
  if (newBookingData.deliveryAddress) contextMessage += `- Delivery Address: ${newBookingData.deliveryAddress}\n`;
  
  contextMessage += `\nCurrent booking step: ${newBookingStep}\n`;
  
  if (newBookingStep === 'equipment-selection') {
    contextMessage += `\nGuide the user to select equipment. They can use the equipment selector that appears in the chat.\n`;
    
    // If they've selected an excavator but haven't been asked about attachments yet
    if (newBookingData.isExcavator && !newBookingData.attachments) {
      contextMessage += `\nThe user has selected an excavator. Ask if they need any attachments for it.\n`;
    }
  } else if (newBookingStep === 'contact-info') {
    contextMessage += `\nAsk for the user's name, email, and phone number ONE AT A TIME. Don't ask for multiple pieces of information in a single message.\n`;
    
    if (!newBookingData.name) {
      contextMessage += `\nFirst, ask for their name.\n`;
    } else if (!newBookingData.email) {
      contextMessage += `\nNow, ask for their email address.\n`;
    } else if (!newBookingData.phone) {
      contextMessage += `\nFinally, ask for their phone number.\n`;
    }
  } else if (newBookingStep === 'dates') {
    contextMessage += `\nAsk for the rental dates ONE AT A TIME.\n`;
    
    if (!newBookingData.startDate) {
      contextMessage += `\nFirst, ask for the start date.\n`;
    } else if (!newBookingData.endDate) {
      contextMessage += `\nNow, ask for the end date.\n`;
    }
  } else if (newBookingStep === 'delivery') {
    contextMessage += `\nAsk if they want delivery or pickup. If delivery, ask for the delivery address.\n`;
  } else if (newBookingStep === 'confirmation') {
    contextMessage += `\nSummarize the booking details and ask for confirmation.\n`;
  } else if (newBookingStep === 'completed') {
    contextMessage += `\nThe booking is complete. Thank the user and let them know we'll be in touch shortly.${emailSent ? ' Mention that a confirmation email has been sent.' : ''}\n`;
  }
}
    
    // Get response from Claude
    const response = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1000,
      system: SYSTEM_PROMPT + (contextMessage ? `\n\n${contextMessage}` : ''),
      messages: formattedMessages,
    });
    
    // Get the response text
    const responseText = response.content[0].type === 'text' 
      ? response.content[0].text 
      : 'Sorry, I encountered an error. Please try again.';
    
    // Return the response
    return NextResponse.json({
      message: responseText,
      bookingStep: newBookingStep,
      bookingData: newBookingData,
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

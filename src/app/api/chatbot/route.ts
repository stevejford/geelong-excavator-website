import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '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',
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

EQUIPMENT INFORMATION:
We offer the following categories of equipment:
- Excavators (1.7t to 13t)
- Skid Steer Loaders
- Attachments
- Compaction Equipment
- Concrete Equipment
- Tipper Trucks
- Non-Destructive Excavation
- Augers & Rock Breakers

BOOKING PROCESS:
1. Help customers select the right equipment for their needs
2. Collect their contact information (name, email, phone)
3. Get their rental dates and delivery preferences
4. Confirm their booking details

When a customer is ready to book, guide them through the process step by step.`;

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
      } else if (newBookingStep === 'contact-info') {
        contextMessage += `\nAsk for the user's name, email, and phone number if not already provided.\n`;
      } else if (newBookingStep === 'dates') {
        contextMessage += `\nAsk for the rental start and end dates.\n`;
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

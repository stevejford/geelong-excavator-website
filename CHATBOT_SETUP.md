# Chatbot Setup Instructions

This document provides instructions for setting up the sales chatbot for the Geelong Excavator Hire website.

## Overview

The chatbot is a floating yellow bubble in the bottom-right corner of every page. It helps customers find the right equipment for their projects and assists with bookings. The chatbot uses Claude AI from Anthropic to provide intelligent responses and Resend for sending booking confirmation emails.

## Features

- Appears on all pages with a distinctive yellow bubble
- Helps customers find the right equipment based on their project needs
- Guides customers through the booking process step-by-step (one question at a time)
- Provides detailed options with brief benefits for similar equipment (augers, trucks)
- Suggests appropriate attachments for excavators
- Collects booking information and sends confirmation emails
- Remembers conversation history between page navigations (expires after 24 hours)
- Respects user preferences (stays closed if the user closes it)
- Includes a "New Chat" button to start fresh conversations

## Technical Implementation

The chatbot consists of the following components:

1. **Frontend Components**:
   - `ChatbotButton.tsx`: The yellow bubble that appears in the corner
   - `ChatbotDialog.tsx`: The expanded chat interface
   - `ChatMessage.tsx`: Individual message display
   - `ChatbotEquipmentSelector.tsx`: Equipment selection interface
   - `ChatContext.tsx`: React context for managing chat state
   - `Chatbot.tsx`: Main component that combines all pieces

2. **API Routes**:
   - `/api/chatbot/route.ts`: Handles communication with Claude AI
   - `/api/booking/route.ts`: Handles sending booking emails

## Setup Instructions

1. **Environment Variables**:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   ANTHROPIC_API_KEY=your_anthropic_api_key
   RESEND_API_KEY=your_resend_api_key
   ```

2. **Install Dependencies**:
   ```bash
   npm install @anthropic-ai/sdk resend
   ```

3. **Deploy to Netlify**:
   - Add the environment variables to your Netlify project settings
   - Deploy the site as usual

## Customization

- **Appearance**: Modify the styling in the component files to match your brand
- **Behavior**: Adjust the chat opening behavior in `ChatContext.tsx`
- **System Prompt**: Customize the AI instructions in `/api/chatbot/route.ts`

## Troubleshooting

If the chatbot is not working properly, check the following:

1. Ensure the environment variables are set correctly
2. Check the browser console for any errors
3. Verify that the API routes are accessible
4. Make sure the Claude API key has sufficient credits

## Security Considerations

- Never commit API keys to the repository
- Use environment variables for all sensitive information
- The chatbot API routes should only be accessible from your domain

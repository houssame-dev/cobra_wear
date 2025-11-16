/**
 * EmailJS Integration
 * Sends order confirmation emails
 */

import emailjs from '@emailjs/browser';

// TODO: Add your EmailJS credentials to .env.local
// NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
// NEXT_PUBLIC_EMAILJS_USER_ID=your_public_key

export async function sendOrderEmail(orderData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    throw new Error('EmailJS configuration missing. Please check your environment variables.');
  }

  try {
    // Format the order data for email
    const templateParams = {
      // Customer Information
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      customer_address: orderData.customerAddress,
      
      // Order Details
      product_type: orderData.productType,
      product_size: orderData.size,
      product_color: orderData.color,
      
      // Design Information
      design_url: orderData.designUrl,
      
      // Additional Information
      order_notes: orderData.notes || 'No additional notes',
      order_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    if (response.status === 200) {
      return { success: true, message: 'Order email sent successfully!' };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    throw new Error('Failed to send order confirmation email');
  }
}

/**
 * Initialize EmailJS (optional, can be called once in your app)
 */
export function initEmailJS() {
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  if (userId) {
    emailjs.init(userId);
  }
}


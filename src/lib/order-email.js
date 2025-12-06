/**
 * Order EmailJS Integration
 * Sends regular order confirmation emails (non-POD)
 */

import emailjs from '@emailjs/browser';

export async function sendRegularOrderEmail(orderData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  // Use separate template for regular orders, fallback to main template if not set
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_REGULAR_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  if (!serviceId || !templateId || !userId) {
    throw new Error('EmailJS configuration missing. Please check your environment variables.');
  }

  try {
    // Format cart items into a readable string
    const itemsList = orderData.items
      .map((item, index) => {
        const itemPrice = item.price || 0; // Handle null prices
        return `${index + 1}. ${item.title} 
   - Size: ${item.selectedSize}
   - Color: ${item.selectedColor}
   - Quantity: ${item.quantity}
   - Price: ${itemPrice * item.quantity} DH`;
      })
      .join('\n\n');

    // Calculate totals
    const subtotal = orderData.items.reduce(
      (sum, item) => {
        const itemPrice = item.price || 0; // Handle null prices
        return sum + itemPrice * item.quantity;
      },
      0
    );
    const shipping = 20; // Flat 20 DH shipping for all Morocco
    const total = subtotal + shipping;

    const templateParams = {
      // Customer Information
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      customer_address: orderData.customerAddress,
      
      // Order Items
      order_items: itemsList,
      items_count: orderData.items.length,
      
      // Order Totals
      subtotal: `${subtotal} DH`,
      shipping: `${shipping} DH`,
      total: `${total} DH`,
      
      // Additional Information
      order_notes: orderData.notes || 'No additional notes',
      order_date: new Date().toLocaleString(),
      order_type: 'Regular Order',
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


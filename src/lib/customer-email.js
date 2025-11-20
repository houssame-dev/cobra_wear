/**
 * Customer Email Confirmation
 * Sends order confirmation emails to customers
 */

import emailjs from '@emailjs/browser';

/**
 * Send confirmation email to customer for regular orders
 */
export async function sendCustomerOrderConfirmation(orderData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  // Only use CUSTOMER_TEMPLATE_ID - don't fallback to avoid duplicate emails
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  // If no customer template is configured, skip sending (prevents duplicates)
  if (!templateId) {
    console.log('Customer email template not configured, skipping customer confirmation');
    return;
  }

  if (!serviceId || !userId) {
    console.warn('EmailJS not configured for customer emails');
    return;
  }

  try {
    // Format cart items
    const itemsList = orderData.items
      .map((item, index) => {
        return `${index + 1}. ${item.title} (${item.selectedSize}, ${item.selectedColor}) x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
      })
      .join('\n');

    // Calculate totals
    const subtotal = orderData.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + shipping;

    const templateParams = {
      // Customer Information
      to_name: orderData.customerName,
      to_email: orderData.customerEmail,
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      customer_address: orderData.customerAddress,
      
      // Order Items
      order_items: itemsList,
      items_count: orderData.items.length,
      
      // Order Totals
      subtotal: `$${subtotal.toFixed(2)}`,
      shipping: shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`,
      total: `$${total.toFixed(2)}`,
      
      // Additional Information
      order_notes: orderData.notes || 'No additional notes',
      order_date: new Date().toLocaleString(),
      order_type: 'Regular Order',
      
      // Email subject
      subject: `Order Confirmation - Coobraa`,
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    return response.status === 200;
  } catch (error) {
    console.error('Customer email error:', error);
    // Don't throw error - customer email is not critical
    return false;
  }
}

/**
 * Send confirmation email to customer for POD orders
 */
export async function sendCustomerPODConfirmation(orderData) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  // Only use CUSTOMER_TEMPLATE_ID - don't fallback to avoid duplicate emails
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID;
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

  // If no customer template is configured, skip sending (prevents duplicates)
  if (!templateId) {
    console.log('Customer email template not configured, skipping customer confirmation');
    return;
  }

  if (!serviceId || !userId) {
    console.warn('EmailJS not configured for customer emails');
    return;
  }

  try {
    // Format multiple design URLs properly
    let designInfo = '';
    if (orderData.designUrls && typeof orderData.designUrls === 'object') {
      // Multiple design URLs (new format)
      const designs = Object.entries(orderData.designUrls)
        .map(([area, url], index) => `${index + 1}. ${area.replace(/([A-Z])/g, ' $1').trim()}: ${url}`)
        .join('\n\n');
      designInfo = designs;
    } else if (orderData.designUrl) {
      // Single design URL (legacy format)
      designInfo = orderData.designUrl;
    }

    const templateParams = {
      // Customer Information
      to_name: orderData.customerName,
      to_email: orderData.customerEmail,
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      customer_phone: orderData.customerPhone,
      customer_address: orderData.customerAddress,
      
      // POD Order Details
      product_type: orderData.productType,
      product_size: orderData.size || orderData.phoneModel || 'N/A',
      product_color: orderData.color,
      design_url: designInfo,
      
      // Additional Information
      order_notes: orderData.notes || 'No additional notes',
      order_date: new Date().toLocaleString(),
      order_type: 'Print-On-Demand Order',
      
      // Email subject
      subject: `POD Order Confirmation - Coobraa`,
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      userId
    );

    return response.status === 200;
  } catch (error) {
    console.error('Customer email error:', error);
    // Don't throw error - customer email is not critical
    return false;
  }
}


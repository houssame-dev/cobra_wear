# EmailJS Template for Regular Orders

This template is for regular product orders (not POD custom designs).

## 📧 **Template Setup**

### **Option 1: Use the Same Template (Recommended)**

You can use the same EmailJS template for both POD and regular orders since they share similar variables. The system automatically handles the differences.

### **Option 2: Create a Separate Template**

If you prefer separate templates, create a new one and update the environment variable:

```env
# For Regular Orders (optional - separate template)
NEXT_PUBLIC_EMAILJS_REGULAR_TEMPLATE_ID=your_regular_template_id
```

Then update `src/lib/order-email.js` to use this new template ID.

---

## 🎨 **Email Template for Regular Orders**

### **Subject Line:**
```
🛍️ New Order from {{customer_name}} - Coobraa
```

### **HTML Template:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
        }
        .header {
            background-color: #000000;
            color: #ffffff;
            padding: 40px 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 2px;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 14px;
            opacity: 0.8;
        }
        .content {
            padding: 40px 30px;
        }
        .section {
            margin-bottom: 35px;
        }
        .section-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 15px;
            color: #000000;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 2px solid #000000;
            padding-bottom: 8px;
        }
        .info-row {
            display: flex;
            padding: 12px 0;
            border-bottom: 1px solid #eeeeee;
        }
        .info-label {
            font-weight: 600;
            width: 140px;
            color: #666;
            font-size: 14px;
        }
        .info-value {
            flex: 1;
            color: #000000;
            font-size: 14px;
        }
        .items-box {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            font-family: monospace;
            white-space: pre-line;
            line-height: 1.8;
            font-size: 13px;
        }
        .totals-box {
            background-color: #000000;
            color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
        }
        .totals-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
        }
        .totals-row.total {
            border-top: 2px solid #ffffff;
            margin-top: 10px;
            padding-top: 15px;
            font-size: 20px;
            font-weight: 700;
        }
        .notes-box {
            background-color: #f9f9f9;
            padding: 15px;
            border-left: 4px solid #000000;
            border-radius: 4px;
            font-style: italic;
            color: #555;
            margin-top: 10px;
        }
        .alert-box {
            background-color: #fff3cd;
            border: 1px solid #ffc107;
            color: #856404;
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
            font-size: 14px;
        }
        .footer {
            background-color: #f5f5f5;
            padding: 30px;
            text-align: center;
            color: #666;
            font-size: 12px;
        }
        .footer strong {
            color: #000000;
            font-size: 14px;
            display: block;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>COOBRAA</h1>
            <p>New Order Received</p>
        </div>

        <!-- Content -->
        <div class="content">
            <p style="font-size: 16px; margin-top: 0;">
                🛍️ <strong>Great news!</strong> You've received a new order.
            </p>

            <!-- Customer Information -->
            <div class="section">
                <div class="section-title">👤 Customer Information</div>
                <div class="info-row">
                    <div class="info-label">Name:</div>
                    <div class="info-value"><strong>{{customer_name}}</strong></div>
                </div>
                <div class="info-row">
                    <div class="info-label">Email:</div>
                    <div class="info-value">{{customer_email}}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Phone:</div>
                    <div class="info-value">{{customer_phone}}</div>
                </div>
                <div class="info-row">
                    <div class="info-label">Address:</div>
                    <div class="info-value">{{customer_address}}</div>
                </div>
            </div>

            <!-- Order Items -->
            <div class="section">
                <div class="section-title">🛍️ Order Items ({{items_count}})</div>
                <div class="items-box">{{order_items}}</div>
            </div>

            <!-- Order Totals -->
            <div class="section">
                <div class="section-title">💰 Order Totals</div>
                <div class="totals-box">
                    <div class="totals-row">
                        <span>Subtotal:</span>
                        <span>{{subtotal}}</span>
                    </div>
                    <div class="totals-row">
                        <span>Shipping:</span>
                        <span>{{shipping}}</span>
                    </div>
                    <div class="totals-row total">
                        <span>TOTAL:</span>
                        <span>{{total}}</span>
                    </div>
                </div>
            </div>

            <!-- Additional Notes -->
            <div class="section">
                <div class="section-title">📝 Customer Notes</div>
                <div class="notes-box">
                    {{order_notes}}
                </div>
            </div>

            <!-- Payment Info -->
            <div class="alert-box">
                💰 <strong>Payment Method:</strong> Cash on Delivery (COD)
                <br><br>
                Please contact the customer to confirm the order details and arrange delivery.
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <strong>COOBRAA</strong>
            <p>This is an automated notification from your store.</p>
            <p>Order received on {{order_date}}</p>
        </div>
    </div>
</body>
</html>
```

---

## 📝 **Text Version (Fallback)**

```
═══════════════════════════════════════
        COOBRAA - NEW ORDER
═══════════════════════════════════════

🛍️ You have received a new order!

═══════════════════════════════════════
👤 CUSTOMER INFORMATION
═══════════════════════════════════════

Name:     {{customer_name}}
Email:    {{customer_email}}
Phone:    {{customer_phone}}
Address:  {{customer_address}}

═══════════════════════════════════════
🛍️ ORDER ITEMS ({{items_count}})
═══════════════════════════════════════

{{order_items}}

═══════════════════════════════════════
💰 ORDER TOTALS
═══════════════════════════════════════

Subtotal:  {{subtotal}}
Shipping:  {{shipping}}
------------------------
TOTAL:     {{total}}

═══════════════════════════════════════
📝 CUSTOMER NOTES
═══════════════════════════════════════

{{order_notes}}

═══════════════════════════════════════
💰 PAYMENT INFORMATION
═══════════════════════════════════════

Payment Method: Cash on Delivery (COD)

Please contact the customer to confirm order 
details and arrange delivery.

═══════════════════════════════════════
📅 ORDER INFORMATION
═══════════════════════════════════════

Order Date: {{order_date}}
Order Type: {{order_type}}

---
This is an automated notification from 
your Coobraa store system.
```

---

## 🔧 **Template Variables**

Make sure your EmailJS template includes these variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{customer_name}}` | Customer full name | John Doe |
| `{{customer_email}}` | Customer email | john@example.com |
| `{{customer_phone}}` | Customer phone | +1 234 567 8900 |
| `{{customer_address}}` | Shipping address | 123 Main St... |
| `{{order_items}}` | Formatted list of items | 1. Classic Hoodie... |
| `{{items_count}}` | Number of items | 3 |
| `{{subtotal}}` | Subtotal amount | $149.97 |
| `{{shipping}}` | Shipping cost | FREE or $10.00 |
| `{{total}}` | Total amount | $159.97 |
| `{{order_notes}}` | Customer notes | Please deliver after 5PM |
| `{{order_date}}` | Order date/time | 11/16/2025, 3:45:00 PM |
| `{{order_type}}` | Type of order | Regular Order |

---

## ✅ **Setup Complete!**

Your regular orders will now be sent to your email with all the details formatted nicely.

**Both order types (POD and Regular) are now fully integrated!** 🎉


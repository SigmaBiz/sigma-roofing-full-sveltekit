import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY, NOTIFICATION_EMAIL } from '$env/static/private';
import { json } from '@sveltejs/kit';

// Initialize SendGrid
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    console.log('📝 Contact form submission:', data);
    
    // Send email notification if SendGrid is configured
    if (SENDGRID_API_KEY && NOTIFICATION_EMAIL) {
      try {
        const msg = {
          to: NOTIFICATION_EMAIL,
          from: 'aescalante@oksigma.com',
          subject: `🏠 New MVP3 Lead: ${data.firstName} ${data.lastName} - ${data.serviceType}`,
          text: `New lead from MVP3 Contact Form:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}
Service: ${data.serviceType}

Call immediately to schedule consultation!`,
          html: `
            <div style="font-family: Arial, sans-serif;">
              <h2>🏠 New MVP3 Lead</h2>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
              <p><strong>Address:</strong> ${data.address}</p>
              <p><strong>Service:</strong> ${data.serviceType}</p>
              <hr>
              <p><em>Call immediately to schedule their roofing consultation!</em></p>
            </div>
          `
        };
        
        await sgMail.send(msg);
        console.log('✅ Email notification sent to:', NOTIFICATION_EMAIL);
      } catch (emailError) {
        console.error('❌ SendGrid error:', emailError);
      }
    }
    
    return json({ 
      success: true, 
      message: 'Thank you for your inquiry! We will contact you within 24 hours.' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return json({ 
      success: false, 
      message: 'Please check your form data and try again.' 
    }, { status: 400 });
  }
}
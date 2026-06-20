/**
 * Contact Form Handler — Cloudflare Pages Function
 *
 * Receives POST requests from the contact form and forwards them
 * to the Resend API to send an email notification.
 *
 * Environment variables (set via Cloudflare dashboard or wrangler):
 *   RESEND_API_KEY  — Resend API key for sending emails
 *   CONTACT_EMAIL   — The email address to receive contact form submissions
 *                      (defaults to vijayakumar.chinta15@gmail.com)
 */

export async function onRequest(context) {
  const { request, env } = context

  // Only accept POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const apiKey = env.RESEND_API_KEY
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'Server configuration error. Please try again later.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const toEmail = env.CONTACT_EMAIL || 'vijayakumar.chinta15@gmail.com'
    const subjectLine = subject
      ? `Portfolio Contact: ${subject}`
      : `Portfolio Contact: Message from ${name}`

    // Send email via Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        subject: subjectLine,
        reply_to: [email],
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5; margin: 0; padding: 24px; }
              .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; }
              .header { background: linear-gradient(135deg, #3b82f6, #a855f7); padding: 32px; text-align: center; }
              .header h1 { color: #fff; margin: 0; font-size: 20px; font-weight: 600; }
              .body { padding: 32px; }
              .field { margin-bottom: 20px; }
              .label { font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
              .value { font-size: 16px; color: #111827; line-height: 1.5; }
              .divider { border: none; border-top: 1px solid #e5e7eb; margin: 20px 0; }
              .footer { font-size: 12px; color: #9ca3af; text-align: center; padding: 16px 32px; border-top: 1px solid #e5e7eb; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Portfolio Message</h1>
              </div>
              <div class="body">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${escapeHtml(name)}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
                </div>
                ${subject ? `
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${escapeHtml(subject)}</div>
                </div>
                ` : ''}
                <hr class="divider" />
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value">${escapeHtml(message).replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                Sent from your portfolio contact form
              </div>
            </div>
          </body>
          </html>
        `,
      }),
    })

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text()
      console.error('Resend API error:', resendResponse.status, errorBody)
      return new Response(
        JSON.stringify({ error: 'Failed to send message. Please try again later.' }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully! I\'ll get back to you soon.' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

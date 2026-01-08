const nodemailer = require("nodemailer");

exports.sendEmail = async (email,name,otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Your KingShop Verificetion Code",
      html: `<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><title>OTP Verification - KingShop</title><style>body,html{margin:0;padding:0;font-family:Arial,sans-serif;background-color:#f0f4f8}.email-container{max-width:600px;margin:40px auto;background-color:#fff;border-radius:10px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,.08);border:1px solid #e0e0e0}.email-header{background:linear-gradient(90deg,#1e3a8a,#3b82f6);color:#fff;text-align:center;padding:35px 20px}.email-header h1{margin:0;font-size:26px;letter-spacing:1px}.email-body{padding:35px 30px;color:#333;text-align:center}.email-body p{font-size:16px;line-height:1.6;margin:15px 0}.otp-code{display:inline-block;margin:25px 0;padding:18px 28px;font-size:28px;font-weight:700;letter-spacing:6px;color:#1e3a8a;background-color:#dbeafe;border-radius:8px;border:1px solid #3b82f6}.email-footer{background-color:#f0f4f8;text-align:center;padding:20px;font-size:12px;color:#666}@media screen and (max-width:600px){.email-container{margin:20px 10px}.otp-code{font-size:24px;padding:15px 20px}.email-header h1{font-size:22px}}</style><div class=email-container><div class=email-header><h1>KingShop</h1></div><div class=email-body><p>Hi <strong>${name}</strong>,<p>Thank you for registering at <strong>KingShop.com</strong>!<p>Your One-Time Password (OTP) is:<div class=otp-code>${otp}</div><p>For any queries, contact us at <a href=mailto:support@kingshop.com>support@kingshop.com</a>.</div><div class=email-footer>© 2026 KingShop.com. All rights reserved.</div></div>`,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email error:", error.message);
  }
};

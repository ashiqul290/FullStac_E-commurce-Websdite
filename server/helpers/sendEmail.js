const nodemailer = require("nodemailer");

exports.sendEmail = async (email, name , ) => {
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
      subject: "Account Create Netrakona govt. Collage",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Account Created</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f4f6f8;
            font-family: Arial, Helvetica, sans-serif;
        }
        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0,0,0,0.08);
        }
        .header {
            background-color: #4CAF50;
            color: #ffffff;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 30px;
            color: #333333;
            line-height: 1.6;
        }
        .content h2 {
            margin-top: 0;
        }
        .button {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 25px;
            background-color: #4CAF50;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            background-color: #f1f1f1;
            text-align: center;
            padding: 15px;
            font-size: 13px;
            color: #777777;
        }
    </style>
</head>
<body>

    <div class="email-container">
        <div class="header">
            <h1>Congratulations 🎉</h1>
        </div>

        <div class="content">
            <h2>Hello ${name},</h2>
            <p>
                Your account has been successfully created!  
                You can now log in and start using our services.
            </p>

            <p>
                If you need any help, our support team is always ready to assist you.
            </p>

            <a href="" class="button">Login Now</a>
        </div>

        <div class="footer">
            © 2026 SchoolProject. All rights reserved.
        </div>
    </div>

</body>
</html>
`,
    });

    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Email error:", error.message);
  }
};

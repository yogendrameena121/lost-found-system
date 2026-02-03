const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendMail = (to, subject, text) => {
  return transporter.sendMail({
    from: "Lost & Found System",
    to,
    subject,
    text
  });
};

import smtpTransport from 'nodemailer-smtp-transport';

require('dotenv').config();
const PASSWORD = process.env.password;

export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport(smtpTransport({
    port: 466,
    secure: false,
    host: "server259.web-hosting.com",
    auth: {
      user: process.env.user,
      pass: process.env.password,
    }
  }))

  const mailData = {
    from: 'arusi@arusi.xyz',
    to: 'arusi@arusi.xyz',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>
   }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}
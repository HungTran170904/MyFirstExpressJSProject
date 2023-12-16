let nodemailer = require('nodemailer');
let transporter=nodemailer.createTransport({
          service: 'gmail',
          auth: {
                    user:'22520527@gm.uit.edu.vn',
                    pass:'1273390993'
          }
})
let mailOptions = {
          to: 'tienhung17092004@gmail.com',
          from: '22520527@gm.uit.edu.vn',
          subject: 'Sending Email using Node.js',
          text: 'That was easy!'
        }
transporter.sendMail(mailOptions, function(err, info){
          if(err) throw err;
          console.log("Send Mail successfully! "+info.response)
})
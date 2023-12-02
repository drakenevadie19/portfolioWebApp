const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors module to habdle cross-origin resource

const app = express();
const port = 3001;

// Body parser middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'drakennievadje19@gmail.com', // replace with your email
    pass: 'thanhnguyen14'   // replace with your email password
  }
});

// Route to handle form submissions
app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Email content
  const mailOptions = {
    from: 'drakennievadje19@gmail.com', // replace with your email
    to: 'do.t.nguyen@tcu.edu',   // replace with your email
    subject: 'New Contact Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Message: ${message}
    `
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

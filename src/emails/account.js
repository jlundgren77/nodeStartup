const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jlund77@yahoo.com',
    subject: 'Welcome To The APP',
    text: `you have signed up. Thanks for joining ${name}`
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jlund77@yahoo.com',
    subject: 'Sorry You Are Leaving',
    text: `Was it something I said ${name}`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
};

import cron from 'node-cron';
import nodemailer from 'nodemailer';
import axios from 'axios';
import Subscriber from '../models/Subscriber.js';

const sendNewsletter = async () => {
  try {
    // 1. Fetch top 5 tech news
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`);
    const articles = response.data.articles;

    // 2. Get all subscribers
    const subscribers = await Subscriber.find({});

    // 3. Create email content
    let html = '<h1>Your Daily Tech News</h1>';
    articles.forEach(article => {
      html += `
        <div>
          <h2><a href="${article.url}">${article.title}</a></h2>
          <p>${article.description}</p>
        </div>
      `;
    });

    // 4. Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 5. Send emails to all subscribers
    for (const subscriber of subscribers) {
      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: subscriber.email,
        subject: 'Your Daily Tech News',
        html: html,
      });
    }

    console.log('Newsletter sent successfully.');
  } catch (error) {
    console.error('Error sending newsletter:', error);
  }
};

// Schedule the newsletter to be sent every day at 8:00 AM
cron.schedule('0 8 * * *', () => {
  console.log('Running newsletter cron job...');
  sendNewsletter();
});

export { sendNewsletter };

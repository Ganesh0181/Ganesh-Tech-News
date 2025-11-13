import Subscriber from '../models/Subscriber.js';

// @desc    Subscribe to the newsletter
// @route   POST /api/newsletter/subscribe
// @access  Public
const subscribe = async (req, res) => {
  const { email } = req.body;

  try {
    const subscriberExists = await Subscriber.findOne({ email });

    if (subscriberExists) {
      return res.status(400).json({ message: 'You are already subscribed' });
    }

    const subscriber = await Subscriber.create({
      email,
    });

    if (subscriber) {
      res.status(201).json({
        _id: subscriber._id,
        email: subscriber.email,
      });
    } else {
      res.status(400).json({ message: 'Invalid subscriber data' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export { subscribe };

import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true, unique: true },
  urlToImage: { type: String },
  publishedAt: { type: Date },
  source: {
    id: { type: String },
    name: { type: String },
  },
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

export default Favorite;

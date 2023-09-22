import { Schema, model, models } from "mongoose";

const labelSchema = new Schema({
  id: String,
  name: String,
  url: String || null,
  description: String,
  genres: [String],
  submissionMethod: String || null,
  contactInfo: {
    email: String || null,
    socialMedia: {
      instagram: String || null,
      twitter: String || null,
      youtube: String || null,
    },
  },
  location: String || null,
  img: String,
  featuredArtists: [String],
  accepting: Boolean,
});

const Label = models.Label || model('Label', labelSchema);

export default Label;

'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import {registerEvents} from './feedback.events';

var FeedbackSchema = new mongoose.Schema({
  city: {type: Schema.Types.ObjectId, ref: 'City', required: true},
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  q5: String
});

registerEvents(FeedbackSchema);
export default mongoose.model('Feedback', FeedbackSchema);

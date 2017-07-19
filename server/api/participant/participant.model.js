'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import {registerEvents} from './participant.events';

var ParticipantSchema = new mongoose.Schema({
  school: {type: String, required: true},
  rollnum: {type: String, required: true},
  name: {type: String, required: true},
  mobile: {type: String, required: true},
  city: {type: Schema.Types.ObjectId, ref: 'City', required: true},
  email: {type: String, required: true},
  class: {type: String, required: true}
  });

registerEvents(ParticipantSchema);
export default mongoose.model('Participant', ParticipantSchema);

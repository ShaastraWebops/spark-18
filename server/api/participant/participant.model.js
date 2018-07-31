'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import {registerEvents} from './participant.events';

var ParticipantSchema = new mongoose.Schema({
  school1: {type: String, required: true},
  rollnum1: {type: String, required: true},
  name1: {type: String, required: true},
  mobile1: {type: String, required: true},
  city: {type: String, required: true},
  //city1: {type: Schema.Types.ObjectId, ref: 'City', required: true},
  email1: {type: String, required: true},
  class1: {type: String, required: true},
  school2: {type: String, required: true},
  rollnum2: {type: String, required: true},
  name2: {type: String, required: true},
  mobile2: {type: String, required: true},
 // city2: {type: Schema.Types.ObjectId, ref: 'City', required: true},
  email2: {type: String, required: true},
  class2: {type: String, required: true}
  });

registerEvents(ParticipantSchema);
export default mongoose.model('Participant', ParticipantSchema);

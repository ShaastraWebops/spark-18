'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema;
import {registerEvents} from './city.events';

var CitySchema = new mongoose.Schema({
	CityName: {type: String, required: true},
	Venue: {type: String, required:true},
	Time: {type: String, required:true},
	date: {type: String, required: true},
	Venue_link: {type: String, required:true},
	Capacity: {type: String, required:false},
	contact: {type: String, required: true},
	active: {type: Boolean, default:true},
	regs: [{type: Schema.Types.ObjectId, ref: 'Participant'}]
});

registerEvents(CitySchema);
export default mongoose.model('City', CitySchema);

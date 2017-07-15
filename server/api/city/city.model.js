'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './city.events';

var CitySchema = new mongoose.Schema({
	CityName: {type: String, required: true},
	Venue: {type: String, required:true},
	Time: {type: Date, required:true},
	Venue_link: {type: String, required:true},
	Capacity: {type: Number, required:false},
	no_of_registered: {type: Number, required:true},
	active: {type: Boolean, required:true, default:true} 
});

registerEvents(CitySchema);
export default mongoose.model('City', CitySchema);

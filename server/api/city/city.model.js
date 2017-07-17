'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './city.events';

var CitySchema = new mongoose.Schema({
	CityName: {type: String, required: true},
	Venue: {type: String, required:true},
	Time: {type: String, required:true},
	Venue_link: {type: String, required:true},
	Capacity: {type: String, required:false},
	no_of_registered: {type: String, required:true},
	active: {type: Boolean, default:true} 
});

registerEvents(CitySchema);
export default mongoose.model('City', CitySchema);

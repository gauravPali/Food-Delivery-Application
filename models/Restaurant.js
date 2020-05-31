const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var restaurantSchema = new Schema({
  arrivalTime: Number,
  foodItems: [String],
  minCost: Number,
  
  name: {
    type: String,
    required: true
  },
  rid: {
    type: Number,
    require: true
  },
  rating: Number,
  tags: [String],
});



module.exports = mongoose.model("Restaurant", restaurantSchema)


// for(var i=0;i<=2;i++){
//     new r(res[i]).save().then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     }) 
// }


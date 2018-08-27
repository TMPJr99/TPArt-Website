//Update the name of the controller below and rename the file.
const painting = require("../controllers/painting.js")
const order = require("../controllers/order.js")
const admin = require("../controllers/admin.js")
module.exports = function(app){

  //PAINTING
  app.get('/', painting.home);
  app.get('/shop', painting.shop);
  app.get('/canvas', painting.canvas);
  //ADMIN


  //ORDER

}

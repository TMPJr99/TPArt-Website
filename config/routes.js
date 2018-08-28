//Update the name of the controller below and rename the file.
const painting = require("../controllers/painting.js")
const order = require("../controllers/order.js")
const admin = require("../controllers/admin.js")
module.exports = function(app){

  //PAINTING
  app.get('/', painting.home);
  app.get('/shop', painting.shop);
  app.get('/canvas', painting.canvas);
  //ORDER
  app.get('/cart/:id', order.cart);
  //ADMIN
  app.get('/contact', admin.contact);
  app.get('/admin', admin.adminPg);
  app.post('/login', admin.login);
  app.use(authenticate);
  app.get('/admin-home', admin.secure);


}

function authenticate(req, res, next){
  if(!req.session.admin_id){
    res.redirect('/admin');
  }else{
    next();
  }
}

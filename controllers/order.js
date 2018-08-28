const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  cart: (req, res)=> {
    knex('painting').where('id', req.params.id)
    .then((result)=>{
      req.session.cart.push(result[0]);
      req.session.save(()=>res.render('cart', {cart: req.session.cart}));
    })
  },
}

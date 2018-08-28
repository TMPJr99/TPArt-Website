const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  cart: (req, res)=> {
    knex('painting').where('id', req.params.id)
    .then((result)=>{
      result[0].price = req.body.price;
      req.session.cart.push(result[0]);
      req.session.total += parseInt(req.body.price);
      req.session.save(()=>res.render('cart', {cart: req.session.cart, total: req.session.total}));
    })
  },

  home_cart: (req, res)=>{
    res.render('cart', {cart: req.session.cart, total: req.session.total})
  },

  wishlist: (req, res)=>{
    knex('painting').where('id', req.params.id)
    .then((result)=>{
      req.session.wishlist.push(result[0]);
      req.session.save(()=>res.render('wishlist', {wishlist: req.session.wishlist}));
    })
  },

  home_wishlist: (req, res)=>{
    res.render('wishlist', {wishlist: req.session.wishlist});
  },

  cart_remove: (req, res)=>{
    req.session.total -= parseInt(req.body.price);
    let cart = req.session.cart;
    for(let i = 0; i < cart.length; i++){
      if(cart[i].id == req.params.id){
        req.session.cart.splice(i, 1);
        req.session.save(()=>{
          res.redirect('/cart')

        })
      }
    }
  },

  payment: (req, res)=>{
    res.render('order');
  },
}

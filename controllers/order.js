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

  payment_1: (req, res)=>{
    let cart = req.session.cart;
    let acc = [];
    for(let i = 0; i < cart.length; i++){
      if(cart[i].id == req.params.id){
        acc.push(cart[i]);
      }
    }
    res.render('order', {cart: acc, total:acc[0].price});
  },

  payment: (req, res)=>{
    res.render('order', {cart: req.session.cart, total:req.session.total});
  },

  insert: (req, res)=>{
    let body = req.body;
    knex('order').insert({
      name: body.name,
      email: body.email,
      address: `${body.address}, ${body.city}, ${body.state}, ${body.zip}`,
      status: "ordered"
    }).then(()=>{
      res.redirect('back');
    })
  },

  charge: (req, res)=>{
    
  }
}

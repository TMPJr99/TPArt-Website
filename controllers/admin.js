const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
   contact: (req, res) => {
     let admin = req.session.admin_id
     knex('painting')
     .then((result)=>{
       let painting = result[0];
       res.render('contact', {painting, admin});
     })
  },

  adminPg: (req, res)=>{
    res.render('admin');
  },

  login: (req, res)=>{
    knex('admin').where('email', req.body.email)
    .then((result)=>{
      let admin = result[0];

      if(admin.password === req.body.password){
        req.session.admin_id = admin.id;
        req.session.save(()=> res.redirect('/'))
      }else{
        res.redirect('/admin');
      }
    })
  },

  secure: (req, res) =>{
    knex('admin').where('id', req.session.admin_id)
    .then((result)=>{
      let admin = result[0];
      res.render('admin-home');
    })
  },

  logout: (req, res)=>{
    req.session.destroy((err)=>{
      if(err) throw err;
      res.redirect('/');
    })
  },

  remove: (req, res)=>{
    knex('painting').del().where('id', req.params.id)
    .then(()=>{
      res.redirect('/shop')
    })
  },

  removeCanvas: (req, res)=>{
    knex('painting').del().where('id', req.params.id)
    .then(()=>{
      res.redirect('/canvas')
    })
  },

  allOrders: (req, res)=>{
    let admin = req.session.admin_id;
    knex('order')
    .then((results)=>{
      res.render('admin-orders', {orders: results, admin})
    })
  }
}

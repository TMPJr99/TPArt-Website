const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
   contact: (req, res) => {
     knex('painting')
     .then((result)=>{
       let painting = result[0];
       res.render('contact', {painting});
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
        req.session.save(()=> res.redirect('/admin-home'))
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
      res.redirect('/admin');
    })
  }
}

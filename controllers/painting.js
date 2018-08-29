const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  home: (req, res) => {
    let admin = req.session.admin_id
    if (!req.session.cart) {
      req.session.cart = [];
    }
    if (!req.session.total) {
      req.session.total = 0;
    }
    knex('painting').then((result) => {
      res.render('home', {
        paintings: result, admin
      });
    })
  },

  shop: (req, res) => {
    let admin = req.session.admin_id;
    knex('painting')
      .then((results) => {
        let acc = [];
        for(let i = 0; i < results.length; i++){
          if(results[i].series !== "canvas"){
            acc.push(results[i])
          }
        }
        res.render('shop', {
          paintings: acc, admin
        });
      })
  },

  canvas: (req, res) => {
    let admin = req.session.admin_id;
    knex('painting').where('series', 'canvas')
      .then((results) => {
        res.render('tp_on_canvas', {
          canvas: results, admin
        });
      })
  },
}

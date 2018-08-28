const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  home: (req, res) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    if (!req.session.wishlist) {
      req.session.wishlist = [];
    }
    if (!req.session.total) {
      req.session.total = 0;
    }
    knex('painting').then((result) => {
      res.render('home', {
        paintings: result
      });
    })
  },

  shop: (req, res) => {
    knex('painting')
      .then((results) => {
        res.render('shop', {
          paintings: results
        });
      })
  },

  canvas: (req, res) => {
    knex('painting').where('series', 'canvas')
      .then((results) => {
        res.render('tp_on_canvas', {
          canvas: results
        });
      })
  },
}

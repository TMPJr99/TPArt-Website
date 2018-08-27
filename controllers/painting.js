const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  home: function(req, res) {
      knex('painting').then((result)=>{
        res.render("home", {paintings:result});
      })
  },

  shop: (req, res)=>{
    res.render('shop');
  },
  canvas: (req, res)=>{
    knex('painting').where('series', 'canvas')
    .then((results)=>{
      res.render('tp_on_canvas', {canvas: results});
    })
  
  }
}

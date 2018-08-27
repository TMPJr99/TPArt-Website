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
}


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('painting').del()
    .then(function () {
      // Inserts seed entries
      return knex('painting').insert([
        {genre: 'abstract', series:"none", tier:2, img_location:"public/images/Aurora_low res.jpg"},
        {genre: 'abstract', series:"canvas", tier:1, img_location:"public/images/Far Far Away_low res.jpg"},
        {genre: 'abstract', series:"canvas", tier:2, img_location:"public/images/Flower_low res.jpg"},
        {genre: 'abstract', series:"canvas", tier:1, img_location:"public/images/Abstract Knife unnamed_low res.jpg"},
        {genre: 'abstract', series:"canvas", tier:2, img_location:"public/images/Mothers Tree 8x10_low res.jpg"},
      ]);
    });
};

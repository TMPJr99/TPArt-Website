
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('painting').del()
    .then(function () {
      // Inserts seed entries
      return knex('painting').insert([
        {genre: 'abstract', series:"none", tier:2, img_location:"/images/Aurora_low res.jpg"},
        {genre: 'abstract', series:"canvas", size:"8x10", tier:1, img_location:"/images/Far Far Away_low res.jpg"},
        {genre: 'abstract', series:"none", tier:2, img_location:"/images/Flower_low res.jpg"},
        {genre: 'abstract', series:"none", tier:1, img_location:"/images/Abstract Knife unnamed_low res.jpg"},
        {genre: 'abstract', series:"canvas", tier:2, size:"16x20", img_location:"/images/Mothers Tree 8x10_low res.jpg"},
      ]);
    });
};

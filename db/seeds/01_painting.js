
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('painting').del()
    .then(function () {
      // Inserts seed entries
      return knex('painting').insert([
        {genre: 'abstract', series:"none", price:100, img_location:"/images/placeholder.png"},
        {genre: 'abstract', series:"canvas", price:150, img_location:"/images/placeholder.png"}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin').del()
    .then(function () {
      // Inserts seed entries
      return knex('admin').insert([
        {email: 'toddporter@mysonisthebest.com', password:"asdf"}
      ]);
    });
};

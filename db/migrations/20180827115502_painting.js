
exports.up = function(knex, Promise) {
  return knex.schema.createTable('painting', (table)=>{
    table.increments();
    table.string('genre');
    table.string('series');
    table.integer('price');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('painting');
};

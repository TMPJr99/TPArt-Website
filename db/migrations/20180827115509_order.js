
exports.up = function(knex, Promise) {
  return knex.schema.createTable('order', (table)=>{
    table.increments();
    table.string('name');
    table.string('email');
    table.string('status');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('order');
};

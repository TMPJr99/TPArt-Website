
exports.up = function(knex, Promise) {
  return knex.schema.createTable('admin', (table)=>{
    table.increments();
    table.string('email');
    table.string('password');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('admin');
};


exports.up = function(knex) {
        return knex.schema.createTable('smurfs', tbl => {
            tbl.increments()
            tbl.string('name')
                .notNullable()
                .unique()
            tbl.string('height')
                .notNullable()
            tbl.integer('age')
                .notNullable()
            tbl.string('description')
        })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExsists('smurfs')
};

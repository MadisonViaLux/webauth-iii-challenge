
exports.up = function(knex) {
    return knex.schema.createTable('deps', tbl => {
        tbl.increments();

        tbl.string('username', 120)
            .notNullable()
            .unique();

        tbl.string('password', 120)
            .notNullable();
        
        tbl.string('department', 120)
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('deps');
};

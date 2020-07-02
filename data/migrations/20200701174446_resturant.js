
exports.up = function(knex) {
  return (
    knex.schema
      .createTable("users", (tbl) => {
        tbl.increments();
        tbl.string("username", 128).notNullable()
        tbl.string("password", 128).notNullable();
      })
      .createTable("items", (tbl) => {
        tbl.increments();
        tbl.string("title", 128).notNullable();
        tbl.string("description", 2000).notNullable();
        tbl.string('category', 64).notNullable();
        tbl.string("itemImage", 1000);
        tbl.string("price", 64).notNullable();
        tbl
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("CASCADE");
      })
  );
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("items")
  .dropTableIfExists("users")
};

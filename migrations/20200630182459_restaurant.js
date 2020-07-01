
exports.up = function(knex) {
  return (
    knex.schema
      .createTable("users", (tbl) => {
        tbl.increments();
        tbl.string("username", 50).notNullable()
        tbl.string("password", 200).notNullable();
      })
      .createTable("items", (tbl) => {
        tbl.increments();
        tbl.string("title", 100).notNullable();
        tbl.string("description", 2000).notNullable();
        tbl.string("image", 400);
        tbl.string("price", 12).notNullable();
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

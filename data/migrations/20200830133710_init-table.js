
exports.up = function(knex) {
    return knex.schema
    .createTable("projects", (tbl) => {
        tbl.increments("id")
        tbl.string("name").notNullable()
        tbl.string("description")
        tbl.boolean("completed")
           .notNullable()
           .defaultTo(false)
        tbl.string('resources')
    })
    .createTable("tasks", (tbl) => {
        tbl.increments("id")
        tbl.string("description")
           .notNullable()
        tbl.text("notes")
        tbl.boolean("completed")
           .notNullable()
           .defaultTo(false)
        tbl.integer("project")
           .unsigned()
           .notNullable()
           .references("projects.id")
           .onDelete("RESTRICT")
           .onUpdate("CASCADE")
    })
    .createTable("resources", (tbl) => {
        tbl.increments("id")
        tbl.string("name")
           .notNullable()
           .unique()
        tbl.string("description")
    })
}

exports.down = function(knex) {
    return knex.schema
    .droptblIfExists("resources")
    .droptblIfExists("tasks")
    .droptblIfExists("projects")
}

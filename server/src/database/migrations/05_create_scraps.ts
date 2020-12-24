import Knex from 'knex'; 

export async function up(knex: Knex)
{
    return knex.schema.createTable('scraps', table => 
    {
        table.increments('id').primary(); 
        table.string('subject').notNullable();
        table.string('message').notNullable(); 
        table.string('status').defaultTo('no').notNullable();
        table.timestamp('scrapsDate').defaultTo(knex.fn.now()).notNullable(); 
        table.integer('studentClass_id')
        .unsigned()
        .references('id')
        .inTable('studentClass')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable();
    })
}
export async function down(knex: Knex)
{
    return knex.schema.dropTable('scraps'); 
}
import Knex from 'knex'; 

export async function up(knex: Knex)
{
    return knex.schema.createTable('requests', table => 
    {
        table.increments('id').primary(); 
        table.string('name').notNullable(); 
        table.string('ra').notNullable(); 
        table.string('class').notNullable(); 
        table.string('documentType').notNullable(); 
        table.timestamp('requestDate').defaultTo(knex.fn.now()).notNullable(); 
        table.string('note').notNullable();
        table.string('status').defaultTo('no').notNullable();
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
    return knex.schema.dropTable('requests'); 
}
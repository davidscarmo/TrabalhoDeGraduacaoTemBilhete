import Knex from 'knex'; 

export async function up(knex: Knex)
{
    return knex.schema.createTable('announcements', table => 
    {
        table.increments('id').primary(); 
        table.string('subject').notNullable(); 
        table.string('message').notNullable();
        table.timestamp('announcementsDate').defaultTo(knex.fn.now()).notNullable(); 
    })
}

export async function down(knex: Knex)
{
    return knex.schema.dropTable('announcements'); 
}
import Knex from 'knex'; 

export async function up (knex: Knex)
{
    return knex.schema.createTable('classes', table =>
    {
        table.increments('id').primary(); 
        table.string('class_name').notNullable(); 
        table.integer('year').notNullable(); 

    } );
};

export async function down(knex: Knex)
{
    return knex.schema.dropTable('classes');
};
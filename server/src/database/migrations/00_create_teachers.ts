import Knex from 'knex'; 

export async function up(knex: Knex)
{
    return knex.schema.createTable('teachers', table => 
    {
        table.increments('id').primary(); 
        table.string('name').notNullable(); 
        table.string('email').notNullable(); 
        table.string('rg').notNullable().unique(); 
        table.string('cpf').notNullable().unique(); 
        table.string('dataNascimento').notNullable(); 
        table.string('tel').notNullable();
        table.string('pasep').notNullable().unique();
    });  
}; 

export async function down(knex: Knex) 
{
    return knex.schema.dropTable('teachers');
};
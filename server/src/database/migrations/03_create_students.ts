import Knex from 'knex'; 

export async function up(knex: Knex)
{
    return knex.schema.createTable('students', table => 
    {
        table.increments('id').primary(); 
        table.string('name').notNullable().unique(); 
        table.string('ra').notNullable().unique(); 
        table.string('rg'); 
        table.string('cpf').notNullable().unique(); 
        table.string('dataNascimento').notNullable(); 
        table.string('nomeMae').notNullable(); 
        table.string('nomePai'); 
        table.string('tel1'); 
        table.string('tel1Desc'); 
        table.string('tel2'); 
        table.string('tel2Desc'); 
           
    });
};

export async function down(knex: Knex)
{
    return knex.schema.dropTable('students'); 
};
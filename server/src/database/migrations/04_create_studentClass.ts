import Knex from 'knex';

export async function up(knex: Knex)
{
    return knex.schema.createTable('studentClass', table => 
    {
        table.increments('id').primary(); 

        table.integer('student_id')
        .unsigned()
        .references('id')
        .inTable('students')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); 

        table.integer('class_id')
        .unsigned()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable(); 
    })
}

export async function down(knex: Knex)
{
    return  knex.schema.dropTable('studentClass'); 
}
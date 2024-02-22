/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {user_id: 7, title: "Meu projeto"},
    {user_id: 8, title: "Meu Segundo Projeto"},
    {user_id: 9, title: "Meu Terceiro Projeto"},
    {user_id: 10, title: "Meu Quarto Projeto"},
  ]);
};

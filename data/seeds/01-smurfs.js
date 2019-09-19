
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('smurfs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('smurfs').insert([
        { name: 'Papa Smurf', age: '300', height: '60cm', description: 'The father and leader of the smurfs'},
        { name: 'Smurfette', age: '120', height: '57cm', description: 'The only girl smurf?'},
        { name: 'Smurf1', age: '240', height: '58cm' },
        { name: 'Smurf2', age: '210', height: '57cm' },
      ]);
    });
};

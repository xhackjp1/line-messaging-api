const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect(function(err) {
  if (err) {
    return console.error('could not connect to postgres', err);
  }
});

exports.get_words = function(callback) {

  var query = `select id, word from words;`;
  client.query(
    query,
    function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      callback(result);
    }
  );
}

exports.add_word = function(message, callback) {

  var query = `insert into words (id, word) values ((select max(id) from words) + 1, '${message}');`;
  client.query(
    query,
    function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      callback(result);
    }
  );
}

exports.delete_word = function(id, callback) {

  var query = `delete from words where id = ${id};`;
  client.query(
    query,
    function(err, result) {
      if (err) {
        return console.error('error running query', err);
      }
      callback(result);
    }
  );
}

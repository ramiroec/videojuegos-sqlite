const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('videogames.db', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite.');
    db.run(`CREATE TABLE IF NOT EXISTS videogames (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      description TEXT,
      photo TEXT,
      video TEXT
    )`);
  }
});

module.exports = db;

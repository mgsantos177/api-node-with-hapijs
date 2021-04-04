const connection = require("../../configs/db");

const findContaByUserId = async (idUsuario) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM conta WHERE idUsuario='${idUsuario}'`,
      function (error, results) {
        if (error) reject(error);

        return resolve(results[0]);
      }
    );
  });
};

const createConta = async (idUsuario) => {
  const saldo = 0;
  const dateAbertura = new Date();

  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO conta ( idUsuario, saldo, dateAbertura) VALUES ('${idUsuario}', ${saldo},'${dateAbertura.toLocaleDateString()}');`,
      async (error, results) => {
        if (error) {
          reject(error);
        }

        return resolve({ id: results.insertId });
      }
    );
  });
};

module.exports = { createConta, findContaByUserId };

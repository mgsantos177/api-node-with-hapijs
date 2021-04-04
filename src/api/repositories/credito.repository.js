const connection = require("../../configs/db");

const findCreditoByIdConta = async (idConta) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM credito WHERE idConta='${idConta}'`,
      function (error, results) {
        if (error) reject(error);

        return resolve(results[0]);
      }
    );
  });
};

const createCredito = async (idConta) => {
  const limite = 200;
  const limiteDisponivel = 200;
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO credito ( idConta, limite, limiteDisponivel) VALUES ('${idConta}', ${limite},${limiteDisponivel});`,
      async (error, results) => {
        if (error) {
          console.log(error);
          return reject(error);
        }

        return resolve({ id: results.insertId });
      }
    );
  });
};

module.exports = { createCredito, findCreditoByIdConta };

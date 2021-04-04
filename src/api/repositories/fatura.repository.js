const connection = require("../../configs/db");

const findFaturaAbertaByIdConta = async (idConta) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM fatura WHERE idConta='${idConta}' AND status='Aberta'`,
      function (error, results) {
        if (error) {
          console.log(error);
          return reject(error);
        }

        return resolve(results[0]);
      }
    );
  });
};

const createFatura = async (idConta) => {
  const status = "Aberta";
  const diaFechamento = 20;
  const diaVencimento = diaFechamento + 10;
  const mesReferencia = "04/2021";
  const valorConsolidado = 0;
  const valorPago = 0;

  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO fatura ( idConta, status, diaFechamento, diaVencimento, mesReferencia, valorConsolidado, valorPago) VALUES ('${idConta}', '${status}','${diaFechamento}', '${diaVencimento}', '${mesReferencia}','${valorConsolidado}', '${valorPago}');`,
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

module.exports = { createFatura, findFaturaAbertaByIdConta };

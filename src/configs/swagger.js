const inert = require("@hapi/inert");
const vision = require("@hapi/vision");
const hapiSwagger = require("hapi-swagger");

const swagger = {
  plugin: hapiSwagger,
  options: {
    info: {
      title: "Projeto Final Acceture 2.1",
      description: "Projeto desenvolvido pelo grupo NoDesing",
      version: "1.1",
    },
  },
};

module.exports = [inert, vision, swagger];

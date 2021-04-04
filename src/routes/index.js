const Joi = require("joi");
const userController = require("../api/controllers/userController");
const {
  CreateUserDTO,
  CreateUserResponseDTO,
} = require("../api/models/dto/user.dto");

const root = {
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "get ";
  },
  options: {
    tags: ["api"],
    description: "Teste",
  },
};

const createUser = {
  method: "POST",
  path: "/create",
  handler: userController.store,
  options: {
    tags: ["api", "usuario"],
    description: "Rota criar usuario",
    validate: {
      payload: CreateUserDTO,
    },
  },
};

module.exports = [root, createUser];

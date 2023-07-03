const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const expressJSDocSwagger = require("express-jsdoc-swagger");
const app = express();
const cors = require("cors");
const apiRouter = require("./server/routes");
const errorHandler = require("./server/middlewares/errorHandler");
const swagger = require("./swagger");
const PORT = process.env.PORT || 4000;

expressJSDocSwagger(app)(swagger);

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

/**
 * @Routes /api
 * entrypoint for all API routes
 */

/**
 * Player
 * @typedef {object} Player
 * @property {number} id - id
 * @property {string} username - player's username
 * @property {string} email - player's email
 * @property {string} password - player's password
 * @property {number} experience - player's experience
 * @property {number} lvl - player's level
 * @property {string} createdAt - player's date of creation
 * @property {string} updatedAt - player's date of updation
 */

/**
 * CreateOrUpdatePlayer
 * @typedef {object} CreateOrUpdatePlayer
 * @property {string} username - player's username
 * @property {string} email - player's email
 * @property {string} password - player's password
 * @property {number} experience - player's experience
 */

/**
 * UpdatePlayerExperience
 * @typedef {object} UpdatePlayerExperience
 * @property {number} exp - new experience value for a particular player
 */
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

const express = require("express");
const routes = express.Router();
const verifyJWT = require ("../middlewares/check_jwt");

const Register = require ("../controllers/user_controller/register");
const Login = require("../controllers/user_controller/login");
const CreateVoiture = require("../controllers/voiture_controller/create")
const ShowAllVoiture = require("../controllers/voiture_controller/get_all")
const DeleteVoiture = require("../controllers/voiture_controller/delete")
const CommentVoiture = require("../controllers/voiture_controller/comment_voiture")

routes.post("/register", Register);
routes.post("/login", Login);

routes.post("/create-voiture", CreateVoiture);
routes.get("/all-voitures", ShowAllVoiture);
routes.delete("/delete-voiture/:id", DeleteVoiture)
routes.put("/comment-voiture/:idUser/:idVoiture", verifyJWT, CommentVoiture);

module.exports = routes;

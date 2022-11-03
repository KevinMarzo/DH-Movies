//Importacion de modulos
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");

//IMPORTACION DE RUTAS
const indexRoute = require("./routes/indexRoute");
const detalleRoute = require("./routes/detalleRoute");
const loginRoute = require("./routes/loginRoute");
const registroRoute = require("./routes/registroRoute");

//Asignando puerto a la app
app.listen(3334, (req, res) => {
	console.log("App en el puerto 3334");
});

//Seteo carpeta stattic
app.use(express.static("./public"));

app.use(
	session({
		secret: "Que tengas un gran día!!!",
		resave: true,
		saveUninitialized: true,
	})
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//Motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views");

app.use("/", indexRoute);
app.use("/detalle", detalleRoute);
app.use("/registrar", registroRoute);
app.use("/login", loginRoute);
app.get("/logout", (req, res) => {
	req.session.destroy();
	res.redirect("/");
});

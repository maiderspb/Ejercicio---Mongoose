const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
  if (!MONGO_URI) {
    console.error("Error de conexión: Falta la variable de entorno MONGO_URI");
    throw new Error("Error al iniciar la base de datos");
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada con éxito");
  } catch (error) {
    console.error("Error de conexión:", error.message);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = { dbConnection };

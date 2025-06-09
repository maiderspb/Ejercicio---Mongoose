const express = require("express");
const app = express();
const PORT = 8080;
const { dbConnection } = require("./config/config");

const productRoutes = require("./routes/productRoutes");

app.use(express.json());
dbConnection();

app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

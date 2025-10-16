const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
app.use(express.json());

// Conectores
const openfoodfacts = require("./connectors/openfoodfacts");
const wikipedia = require("./connectors/wikipedia");
const fusion = require("./utils/fusion");

app.get("/api/vinos", async (req, res) => {
  const { nombre } = req.query;
  try {
    const datos1 = await openfoodfacts(nombre);
    const datos2 = await wikipedia(nombre);
    const vino = fusion(datos1, datos2);
    res.json(vino);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Error al obtener información del vino" });
  }
});

app.listen(8787, () => console.log("Servidor backend en puerto 8787"));

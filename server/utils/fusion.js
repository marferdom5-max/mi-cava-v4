module.exports = function(datos1, datos2) {
  return {
    nombre: datos1.product_name || "Desconocido",
    descripcion: datos2.resumen || "Sin descripción",
    imagen: datos1.image_url || null,
    url: datos2.url || null,
  };
};

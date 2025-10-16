const axios = require("axios");

module.exports = async function(nombre) {
  try {
    const response = await axios.get(
      `https://es.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(nombre)}`
    );
    return {
      resumen: response.data.extract,
      url: response.data.content_urls?.desktop?.page
    };
  } catch {
    return {};
  }
};

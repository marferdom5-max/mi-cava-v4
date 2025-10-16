const axios = require("axios");

module.exports = async function(nombre) {
  try {
    const response = await axios.get(`https://world.openfoodfacts.org/cgi/search.pl`, {
      params: { search_terms: nombre, json: 1 }
    });
    return response.data.products[0] || {};
  } catch {
    return {};
  }
};

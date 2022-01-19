const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => Promise.all(urls.map(getQuote));

const getQuote = async (url) => {
  const response = await httpGet(url);
  const { message } = JSON.parse(response.body);
  if (response.status === 200) {
    return { 'Arnie Quote': message };
  } 
  return { 'FAILURE': message };
}

module.exports = {
  getArnieQuotes,
};

const axios = require('axios');

async function getMetamaskPrice() {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=metamask&vs_currencies=usd');
    const metamaskPrice = response.data.metamask.usd;
    console.log('Metamask Price:', metamaskPrice);
    return metamaskPrice;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

module.exports = {
  getMetamaskPrice
};

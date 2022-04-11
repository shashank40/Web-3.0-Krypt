require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ZcBm5bmto0XTLgf31_PENc9CvMZmge2Q',
      accounts: ['bb88c573f4fdd57a0f8b0fc4b7b5a7bace44626297f2c8fc7b39c0a616ba904f'],
    },
  },
};
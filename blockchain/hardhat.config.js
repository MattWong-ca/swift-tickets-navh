require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const optimismGoerliUrl = process.env.ALCHEMY_API_KEY

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      gasPrice: 1000000000,
    },
    "optimism-goerli": {
      url: optimismGoerliUrl,
      accounts: [process.env.GOERLI_PRIVATE_KEY]
    },
    'zora-goerli': {
      url: 'https://testnet.rpc.zora.energy/',
      accounts: [process.env.GOERLI_PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
};

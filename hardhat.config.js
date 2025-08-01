require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    testnet: {
      url: process.env.BSC_TESTNET_URL || "",
      accounts: [process.env.PRIVATE_KEY]
    },
    mainnet: {
      url: process.env.BSC_MAINNET_URL || "",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

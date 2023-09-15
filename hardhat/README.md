# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

Or

```shell
npm init -y
npm i --save-dev hardhat
npm i --save-dev @nomicfoundation/hardhat-toolbox
npx hardhat


# npm i dotenv

# .env:

# RPC_URL="https://rpc-mumbai.maticvigil.com"
# PRIVATE_KEY="aa2e2598b0f8905d3d16c84c299c003c7df89272a520358a220f781b4aae35bf"
# API_KEY="6R1N6RIBN57XPXF7IX37GE9MG9RPMSMRF2"

npx hardhat compile

npx hardhat run scripts/deploy.js --network mumbai
(will generate a contract_address)

npx hardhat verify --network mumbai (contract_address)
```

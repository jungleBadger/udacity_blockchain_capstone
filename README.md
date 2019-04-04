# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 
This project creates ERC721 tokens for real estate titles and uses ZkSNARKs to verify before minting the token.
The minted tokens are then put to sale on opensea.

## Version Info

Truffle v4.1.14 (core: 4.1.14)
Solidity v0.4.24 (solc-js)
Ganache CLI v6.2.5 (ganache-core: 2.3.3)

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle) and zokrates generated contract and proofs.

To install, download or clone the repo, then:

`npm install`

`truffle compile` 

### Tests

Start Ganache CLI in the terminal using

`ganache-cli `

To run truffle tests:

In a second terminal window run the following commands

`truffle test ./test/TestSquareVerifier.js`

`truffle test ./test/TestSolnSquareVerifier.js`

`truffle test ./test/TestERC721Mintable.js`

### Rinkeby Deployment info

To deploy to rinkeby:
Update the `truggle-config.js` file to reflect your infura settings for rinkeby

In a terminal window run :

`truffle migrate --network rinkeby`


OpenSea Link : https://rinkeby.opensea.io/category/realestatedifferent
contract address:    0xd63d444d37bf1fe8a4af9a6bfa8dac96f377a363
account address:     0x627306090abaB3A6e1400e9345bC60c78a8BEf57
contract ABI: /contracts/build/contracts/SolnSquareVerifier.json
Minted Token. Transaction: 0x21990716419b3102f379ab22893b3142460c9a1c
Minted Token. Transaction: 0x8e6530c84b4c468ef401cb0fd9c2ee995677403c6522ddacc8706ba2d3bd842a
Minted Token. Transaction: 0xb8f29f18acfbc7b81f0e144252d020fd36fb8024ae8c494aaa31d545293e7dab
Minted Token. Transaction: 0x82167e2eea4e2b260c6d0d50b359a7c05bfad60ee249a1c56c986cc1fc6a906e
Minted Token. Transaction: 0xdfd4924bd85b99013c664e66c005b7224a344b632118ef15a456d7bc6c89d4aa
Minted Token. Transaction: 0xa5dd3ce3f02941a6c29ac56e108f79b4797f5b92d7ceedff17cb360ee308e33e
Minted Token. Transaction: 0xc478c2351cbf84e09db3392d87e967fcd59ea098ab4e8106babd2b046717c6e8
Minted Token. Transaction: 0xd9cffa5c25c9716b3290faea207b77d900972ac13edf4eac78a6b4527f564677
Minted Token. Transaction: 0x957731f4e1c68eb662caf5f5b3cc8431cefecb502d71482e6e31c0bb31c4c0d4
Minted Token. Transaction: 0x795fe2ddf4be7bf4d4f98080514ff730ad7636b90b81d4b58b89404a712ff132
Minted Token. Transaction: 0x9c869c7a2944d44544b367595f0ef0eac54feb3f97dba6f038243441605f1ee4



OpenSea Link : https://rinkeby.opensea.io/category/realstatedifferent

change the configuration data in the `mintConfig.json` file and then run

`node mint.js`

The tokens can then be put up for sale on OpenSea Marketplace.

Go to https://docs.opensea.io/docs/getting-started to see how it is done.

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


### References

* [AJMachado's repository](https://github.com/ajmachado/Capstone-Real-Estate-Sale) 
* [Udacity boilerplate](https://github.com/udacity/Blockchain-Capstone)
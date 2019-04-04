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
Minted Token. Transaction: 0x21990716419b3102f379ab22893b3142460c9a1cdd7ea311a3f4ebb428708616

### Mint Tokens

OpenSea Link : https://rinkeby.opensea.io/category/realestatetitle

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
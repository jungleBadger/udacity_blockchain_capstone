// migrating the appropriate contracts
var SquareVerifier = artifacts.require("SquareVerifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");
//var ERC721Mintable = artifacts.require("CustomERC721Token");

module.exports = function(deployer) {
  /* deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier, );
  deployer.deploy(ERC721Mintable); */
  deployer.deploy(SquareVerifier)
    .then(() => {
        return deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
    });
};
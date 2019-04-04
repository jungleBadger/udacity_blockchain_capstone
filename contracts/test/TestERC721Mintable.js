var SquareVerifier = artifacts.require('SquareVerifier');
// var ERC721MintableComplete = artifacts.require('ERC721Mintable');
//var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
var ERC721MintableComplete = artifacts.require('CustomERC721Token');
let proof = require("../../zokrates/code/square/proof");

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            let verifierContract = await SquareVerifier.new({from: account_one});
            this.contract = await ERC721MintableComplete.new(verifierContract.address, {from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_two, 1, {from: account_one});

            
        })

        it('should return total supply', async function () { 
            var tokens = await this.contract.totalSupply({from: account_one});
            assert.equal(tokens, 1, "Total tokens supply incorrect");
        })

        it('should get token balance', async function () { 
            var tokens = await this.contract.balanceOf(account_two, {from: account_two});
            assert.equal(tokens, 1, "Number of tokens do not match");
            
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            var correctURI = "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1"
            var uri = await this.contract.tokenURI(1);
            assert.equal(correctURI, uri, "URIs do not match");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_two, account_three, 1, {from: account_two});
            var newOwner = await this.contract.ownerOf(1, {from: account_three});
            assert.equal(newOwner, account_three, "Transfer not sucessful");
        })
    });

})
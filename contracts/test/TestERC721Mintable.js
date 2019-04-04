var SquareVerifier = artifacts.require('SquareVerifier');
var ERC721MintableComplete = artifacts.require('SolnSquareVerifier');
//var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
//var ERC721MintableComplete = artifacts.require('CustomERC721Token');
let proof = require("../../zokrates/code/square/proof");
let proof1 = require("../../zokrates/code/square/proof_1");
let proof2 = require("../../zokrates/code/square/proof_2");
let proof3 = require("../../zokrates/code/square/proof_3");
let proof4 = require("../../zokrates/code/square/proof_4");
let proof5 = require("../../zokrates/code/square/proof_5");
let proof6 = require("../../zokrates/code/square/proof_6");
let proof7 = require("../../zokrates/code/square/proof_7");
let proof8 = require("../../zokrates/code/square/proof_8");
let proof9 = require("../../zokrates/code/square/proof_9");
let proof10 = require("../../zokrates/code/square/proof_10");

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            let verifierContract = await SquareVerifier.new({from: account_one});
            this.contract = await ERC721MintableComplete.new(verifierContract.address, {from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mintVerified(account_two, 1, 
                    proof.proof.A, 
                    proof.proof.A_p, 
                    proof.proof.B, 
                    proof.proof.B_p, 
                    proof.proof.C, 
                    proof.proof.C_p, 
                    proof.proof.H, 
                    proof.proof.K, 
                    proof.input,
                    {from: account_one});
                    await this.contract.mintVerified(account_two, 2, 
                        proof4.proof.A, 
                        proof4.proof.A_p, 
                        proof4.proof.B, 
                        proof4.proof.B_p, 
                        proof4.proof.C, 
                        proof4.proof.C_p, 
                        proof4.proof.H, 
                        proof4.proof.K, 
                        proof4.input,
                        {from: account_one});
                    await this.contract.mintVerified(account_two, 3, 
                        proof1.proof.A, 
                        proof1.proof.A_p, 
                        proof1.proof.B, 
                        proof1.proof.B_p, 
                        proof1.proof.C, 
                        proof1.proof.C_p, 
                        proof1.proof.H, 
                        proof1.proof.K, 
                        proof1.input,
                        {from: account_one});
                    await this.contract.mintVerified(account_two, 4, 
                        proof2.proof.A, 
                        proof2.proof.A_p, 
                        proof2.proof.B, 
                        proof2.proof.B_p, 
                        proof2.proof.C, 
                        proof2.proof.C_p, 
                        proof2.proof.H, 
                        proof2.proof.K, 
                        proof2.input,
                        {from: account_one});
                    /* await this.contract.mintVerified(account_two, 5, 
                        proof3.proof.A, 
                        proof3.proof.A_p, 
                        proof3.proof.B, 
                        proof3.proof.B_p, 
                        proof3.proof.C, 
                        proof3.proof.C_p, 
                        proof3.proof.H, 
                        proof3.proof.K, 
                        proof3.input,
                        {from: account_one}); */
            
        })

        it('should return total supply', async function () { 
            var tokens = await this.contract.totalSupply({from: account_one});
            assert.equal(tokens, 4, "Total tokens supply incorrect");
        })

        it('should get token balance', async function () { 
            var tokens = await this.contract.balanceOf(account_two, {from: account_two});
            assert.equal(tokens, 4, "Number of tokens do not match");
            
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
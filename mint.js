const HDWalletProvider = require("truffle-hdwallet-provider")
const web3 = require('web3')
const config = require('./mintConfig');
/* const MNEMONIC = process.env.MNEMONIC
const INFURA_KEY = process.env.INFURA_KEY
const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS
const OWNER_ADDRESS = process.env.OWNER_ADDRESS
const NETWORK = process.env.NETWORK */
const MNEMONIC = config.MNEMONIC
const INFURA_KEY = config.INFURA_KEY
let NFT_CONTRACT_ADDRESS = config.CONTRACT_ADDRESS
let OWNER_ADDRESS = config.OWNER_ADDRESS
const NETWORK = config.NETWORK
const NUM_TOKENS = 10
const proof = [
    require('./zokrates/code/square/proof'),
    require('./zokrates/code/square/proof_1'),
    require('./zokrates/code/square/proof_2'),
    require('./zokrates/code/square/proof_3'),
    require('./zokrates/code/square/proof_4'),
    require('./zokrates/code/square/proof_5'),
    require('./zokrates/code/square/proof_6'),
    require('./zokrates/code/square/proof_7'),
    require('./zokrates/code/square/proof_8'),
    require('./zokrates/code/square/proof_9'),
    ];
const CONTRACT_FILE = require('./eth-contracts/build/contracts/SolnSquareVerifier');
const NFT_ABI = CONTRACT_FILE.abi;

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS || !NETWORK) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

async function main() {
    
    const provider = new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/${INFURA_KEY}`);
    const web3Instance = new web3(
        provider
    )
    //console.log(provider);
    //if (NFT_CONTRACT_ADDRESS) {
        
        const nftContract =new web3Instance.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS, { gasLimit: "1000000" });

        // Tokens minted directly to the owner.
        let tokenId = 0;
        //for (var i = 0; i < NUM_TOKENS; i++) {
            proof.forEach(async(proof) =>  {
               tokenId ++;
            await nftContract.methods
             .mintVerified(
                OWNER_ADDRESS, 
                tokenId, 
                proof.proof.A, 
                proof.proof.A_p, 
                proof.proof.B, 
                proof.proof.B_p, 
                proof.proof.C, 
                proof.proof.C_p, 
                proof.proof.H, 
                proof.proof.K, 
                proof.input)
            .send({ from: OWNER_ADDRESS, gas:3000000 }, (error, result) => {
                    if(error){
                        console.log(error);
                    }else{
                        console.log("Minted Token. Transaction: " + result); 
                    }
                });
            
        //}
    //} 
});
}

main();
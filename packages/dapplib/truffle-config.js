require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan raise pizza essay inflict civil army general'; 
let testAccounts = [
"0x818c085e693829fcd6b8761aae1c5dbe7ecfff7c3382f9f67a37957bb35fec65",
"0x2b1aceda0eede76c4801da39a5d34fb66a16ae3efca318e18038b6ab1df179fa",
"0x47949afc8591af71490d2938f4945058c12bf88fd154536c125b62384964aa81",
"0xb6c73eb0170d546f59328dcac41f3a684a34e3e751ebc3c596b5d78099451d26",
"0x78385e02a36b97257bd451f2b70720060905ba21659211b1f6430d43f5762707",
"0xadb23ef3e0d8853c60208c7b2154e2cae0e0318eada86861a16722f4f3200901",
"0x066665b1901e0b63743b72f496e104e39cd94370ddc0eb0a69bfe73804f3313b",
"0x53b691db3f2921bf548d249640fefa3ceb1b241dd88d0ce156f31f95b3b99b55",
"0x0cdfe9c2e93a1e81346e47593ca14d1c4da2357c9b9c2c5f4268ce2cae437b2d",
"0x4e079e9e38eccc7fec0d397fd71289e956fc49d79025c11242922588dbffc72a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


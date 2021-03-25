require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name radar trust unit harvest office army genre'; 
let testAccounts = [
"0xdaf10c40407c5a96597f6d4a032696f9839c12252f2610cc2b2f0dcb43a2bdc4",
"0x44bdbd75185252ea806a10121057722a233e577b45bdb79313b162580d73adc6",
"0x5a6d29ddeaae760e3f3363941bb30d992002c808db18fcc22372fcab403b4de9",
"0xdf143747496f59ddf6c53341ed73061a860b5df143a2ca14e2753ef082d40195",
"0xacd5e306c1e35513d25e1844cb2ee5247e1d6d9e5826eac6725141a1a51e0329",
"0x558e6da29021ed458a7e9f81aa41b09931d2dd4f073ea3af29ab5ee56a71cd4f",
"0xa2046d2982fd55452976a7e0a68c84b84b5f358c7038c1869bb21e2cbfc4825d",
"0x2361b336f84559dea12007d38effbc34c7d8c8b0d7a429135ed5b9784b8ac3d0",
"0x9b6adbb5d986d006fe375264c5cbff362c81e5092ceab444d1670012d0dce29c",
"0x98e8e3d3249079a657b1fc68374628881ddd63595fba67caa4ced245a530b43f"
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
            version: '^0.5.11'
        }
    }
};

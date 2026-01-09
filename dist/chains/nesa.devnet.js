export const devnet = {
    bech32Config: {
        bech32PrefixAccAddr: 'nesa',
        bech32PrefixAccPub: 'nesapub',
        bech32PrefixConsAddr: 'nesavalcons',
        bech32PrefixConsPub: 'nesavalconspub',
        bech32PrefixValAddr: 'nesavaloper',
        bech32PrefixValPub: 'nesavaloperpub',
    },
    beta: true,
    bip44: {
        coinType: 118,
    },
    chainId: 'nesa',
    chainName: 'Nesa Devnet',
    chainSymbolImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/chain.png',
    currencies: [
        {
            coinDecimals: 6,
            coinDenom: 'NES',
            coinGeckoId: 'nesa',
            coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png',
            coinMinimalDenom: 'unes',
        },
    ],
    feeCurrencies: [
        {
            coinDecimals: 6,
            coinDenom: 'NES',
            coinGeckoId: 'nesa',
            coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png',
            coinMinimalDenom: 'unes',
            gasPriceStep: {
                average: 0.02,
                high: 0.1,
                low: 0.01,
            },
        },
    ],
    nodeProvider: {
        email: 'dev@nesa.ai',
        name: 'Nesa',
        website: 'https://nesa.ai/',
    },
    rest: 'https://lcd.dev.nesa.ai',
    rpc: 'https://rpc.dev.nesa.ai',
    stakeCurrency: {
        coinDecimals: 6,
        coinDenom: 'NES',
        coinGeckoId: 'nesa',
        coinImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/nesa/nes.png',
        coinMinimalDenom: 'unes',
    },
};
export default devnet;
//# sourceMappingURL=nesa.devnet.js.map
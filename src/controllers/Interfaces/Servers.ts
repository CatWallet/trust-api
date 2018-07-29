export const Nodes = {
    ethereum : process.env.ETHEREUM_API,
    classic: process.env.CLASSIC_API,
    poa: process.env.POA_API,
    callisto: process.env.CALLISTO_API,
    rinkeby: process.env.RINKEBY_API,
    localhost: "http://localhost:8000/"
}

export enum Endpoints {
    TokensList = "tokens/list",
    Tokens = "tokens",
    Assets = "assets",
    Transactions = "transactions",
    TransactionId = "transactions/",
    RegisterDevice = "push/register",
    UnegisterDevice = "push/unregister"
}

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
export enum CoinTypeIndex {
    ethereum = 60,
    classic = 61,
    poa = 178,
    callisto = 820,
    // gochain = 6060,
    // localhost = 8000 // Uncomment for test pourpouse
}

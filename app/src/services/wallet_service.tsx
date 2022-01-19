import Web3 from "web3";
import {Config} from "../config";
import * as bip39 from 'bip39';

export class WalletService {
    private static web3: Web3 = new Web3(new Web3.providers.HttpProvider(Config.RINKEBY_URL));

    createWallet() {
        const seed = this.generateMnemonic();
        let account = WalletService.web3.eth.accounts.create(seed);
        // @ts-ignore
        account['seed'] = seed;
        return account;
    }

    generateMnemonic() {
        return bip39.generateMnemonic();
    }

    getBalance(privateKey: string) {
        return WalletService.web3.eth.getBalance(privateKey);
    }

}
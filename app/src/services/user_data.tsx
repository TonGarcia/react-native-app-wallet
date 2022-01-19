import {WalletService} from "./wallet_service";


export class UserData {
    private walletService: WalletService;

    constructor() {
        this.walletService = new WalletService();
    }

    loadUserData(autoGenerateWallet=false) {
        this.loadUserDefaults();
    }

    loadUserDefaults() {

    }


}
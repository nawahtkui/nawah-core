import { ethers } from "ethers";
import StorageABI from "./contracts/Storage.json";
import BettingABI from "./contracts/Betting.json";
import StakingABI from "./contracts/Staking.json";
import OptionsABI from "./contracts/Options.json";
import FuturesABI from "./contracts/Futures.json";
import { CONTRACT_ADDRESSES } from "./config";

export class NawahSmartContractsService {
  provider: ethers.providers.Web3Provider | null = null;
  signer: ethers.Signer | null = null;
  contracts: Record<string, ethers.Contract> = {};

  // تهيئة الاتصال بالمحفظة وجميع العقود
  async init() {
    if (!window.ethereum) throw new Error("MetaMask أو Web3 غير متوفر");

    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    await this.provider.send("eth_requestAccounts", []);
    this.signer = this.provider.getSigner();

    // تهيئة كل العقود
    this.contracts.storage = new ethers.Contract(CONTRACT_ADDRESSES.Storage, StorageABI, this.signer);
    this.contracts.betting = new ethers.Contract(CONTRACT_ADDRESSES.Betting, BettingABI, this.signer);
    this.contracts.staking = new ethers.Contract(CONTRACT_ADDRESSES.Staking, StakingABI, this.signer);
    this.contracts.options = new ethers.Contract(CONTRACT_ADDRESSES.Options, OptionsABI, this.signer);
    this.contracts.futures = new ethers.Contract(CONTRACT_ADDRESSES.Futures, FuturesABI, this.signer);
  }

  // قراءة البيانات من العقد
  async callContract(contractName: string, method: string, params: any[] = []) {
    if (!this.contracts[contractName]) throw new Error(`العقد ${contractName} غير موجود`);
    return await this.contracts[contractName][method](...params);
  }

  // تنفيذ المعاملات على البلوكشين
  async sendTransaction(contractName: string, method: string, params: any[] = []) {
    if (!this.contracts[contractName]) throw new Error(`العقد ${contractName} غير موجود`);
    const tx = await this.contracts[contractName][method](...params);
    return await tx.wait(); // انتظار تأكيد البلوك
  }
}

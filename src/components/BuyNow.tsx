import React, { useState } from "react";
import { NawahSmartContractsService } from "../../NawahSmartContractsService";
import { ethers } from "ethers";

interface BuyNowProps {
  nawah: NawahSmartContractsService;
}

const BuyNow: React.FC<BuyNowProps> = ({ nawah }) => {
  const [amount, setAmount] = useState<number>(1);

  const buy = async () => {
    try {
      if (!nawah.signer) throw new Error("Wallet not connected");
      const value = ethers.utils.parseEther(amount.toString());
      const receipt = await nawah.sendTransaction("storage", "buyToken", [value]);
      alert(`Transaction confirmed: ${receipt.transactionHash}`);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
      <button onClick={buy}>Buy Now</button>
    </div>
  );
};

export default BuyNow;

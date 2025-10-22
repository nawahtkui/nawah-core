import React, { useState } from "react";
import { NawahSmartContractsService } from "../../NawahSmartContractsService";

interface ConnectWalletProps {
  nawah: NawahSmartContractsService;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ nawah }) => {
  const [account, setAccount] = useState<string>("");

  const connect = async () => {
    try {
      await nawah.init();
      const signer = nawah.signer!;
      const address = await signer.getAddress();
      setAccount(address);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <button onClick={connect}>Connect Wallet</button>
      {account && <p>Connected: {account}</p>}
    </div>
  );
};

export default ConnectWallet;

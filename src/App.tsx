import React from "react";
import { NawahSmartContractsService } from "../NawahSmartContractsService";
import ConnectWallet from "./components/ConnectWallet";
import PriceDisplay from "./components/PriceDisplay";
import BuyNow from "./components/BuyNow";

const nawah = new NawahSmartContractsService();

const App: React.FC = () => {
  return (
    <div>
      <h1>Nawah Core</h1>
      <ConnectWallet nawah={nawah} />
      <PriceDisplay nawah={nawah} />
      <BuyNow nawah={nawah} />
    </div>
  );
};

export default App;

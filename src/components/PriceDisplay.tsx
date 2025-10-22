import React, { useEffect, useState } from "react";
import { NawahSmartContractsService } from "../../NawahSmartContractsService";

interface PriceDisplayProps {
  nawah: NawahSmartContractsService;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ nawah }) => {
  const [price, setPrice] = useState<number | null>(null);

  const fetchPrice = async () => {
    try {
      const p = await nawah.callContract("storage", "getPrice"); // تأكد أن الدالة موجودة في العقد
      setPrice(Number(ethers.utils.formatEther(p)));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <div>
      <p>Price: {price ? `${price} NWTK per 1 BNB` : "--"}</p>
    </div>
  );
};

export default PriceDisplay;

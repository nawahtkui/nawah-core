import { useState } from "react";

export default function MintTokenPage() {
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [status, setStatus] = useState("");

  const handleMint = async () => {
    setStatus("جارٍ سك الرموز...");
    try {
      // استبدل هذا الجزء باستدعاء العقد الذكي الحقيقي
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus(`تم سك ${supply} من ${tokenName} (${symbol}) بنجاح ✅`);
    } catch (error) {
      setStatus("حدث خطأ أثناء عملية السك ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">سك الرموز</h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="اسم الرمز"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="الرمز المختصر"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="الكمية"
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleMint}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          سك الرمز
        </button>
        {status && (
          <p className="text-center mt-4 font-semibold">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

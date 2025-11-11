"use client";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import useCart from "../lib/cart";
import { useState } from "react";

export default function CheckoutPage() {
  const { address, isConnected } = useAccount();
  const { items, clear } = useCart();
  const totalEth = items.reduce((a, i) => a + i.product.priceEth * i.qty, 0);
  const [sent, setSent] = useState(false);

  const seller = (process.env.NEXT_PUBLIC_SELLER_ADDRESS || "0x0000000000000000000000000000000000000000") as `0x${string}`;
  const { data: hash, isPending, sendTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const handlePay = async () => {
    if (!isConnected || totalEth <= 0) return;
    sendTransaction({ to: seller, value: parseEther(totalEth.toFixed(6)) });
    setSent(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Checkout</h1>
      {!isConnected && <p className="text-white/70">Connect your wallet to continue.</p>}
      <div className="card space-y-3">
        <p>Items: {items.length}</p>
        <p>Total: {totalEth.toFixed(4)} ETH</p>
        <button className="btn disabled:opacity-50" disabled={!isConnected || totalEth <= 0 || isPending} onClick={handlePay}>
          {isPending ? "Confirm in Wallet..." : "Pay with Crypto"}
        </button>
        {hash && <p className="text-xs break-all opacity-70">Tx Hash: {hash}</p>}
        {isConfirming && <p className="text-sm">Waiting for confirmation...</p>}
        {isSuccess && sent && (
          <div className="text-sm">
            <p className="text-green-300">Payment confirmed ✔</p>
            <button className="btn-outline mt-2" onClick={() => clear()}>Clear cart</button>
          </div>
        )}
      </div>
      <p className="text-xs opacity-70">⚠️ Demo only. Uses a simple native transfer on testnets. For production, integrate a proper checkout smart contract or a provider like Coinbase Commerce.</p>
    </div>
  );
}

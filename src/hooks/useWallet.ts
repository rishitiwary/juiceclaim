import { useState } from 'react';

export interface WalletData {
  balance: number;
}

export interface VirtualCard {
  number: string;
  expiry: string;
  cvv: string;
  balance: number;
}

export interface UseWalletReturn {
  walletData: WalletData;
  virtualCard: VirtualCard;
  refreshWallet: () => void;
}

export function useWallet(): UseWalletReturn {
  const [walletData, setWalletData] = useState<WalletData>({
    balance: 4750.00
  });

  const virtualCard: VirtualCard = {
    number: '4111 2222 3333 4444',
    expiry: '12/25',
    cvv: '123',
    balance: 0
  };

  const refreshWallet = () => {
    // In a real implementation, this would fetch from an API
    console.log('Refreshing wallet data...');
    // setWalletData(await fetchWalletData());
  };

  return {
    walletData,
    virtualCard,
    refreshWallet
  };
}

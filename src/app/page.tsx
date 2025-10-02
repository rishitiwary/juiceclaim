'use client';
import { useState } from 'react';
import { ClaimsWalletMax } from '../components/ClaimsWalletMax';
import { Footer } from '../components/Footer';
import { OTPVerificationModal } from '../components/OTPVerificationModal';

export default function Home() {
  const [showOTPModal, setShowOTPModal] = useState(false);
  return (
    <>
      {showOTPModal==false ? (
        <OTPVerificationModal setShowOTPModal={setShowOTPModal}/>
      ) : (
        <>
          <ClaimsWalletMax />
          <Footer />
        </>
      )}
    </>
  );
}
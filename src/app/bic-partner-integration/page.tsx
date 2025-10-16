'use client';

import { useEffect } from 'react';

export default function BicPartnerIntegrationPage() {
  useEffect(() => {
    // Redirect to the HTML file
    window.location.replace('/bic-partner-integration.html');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center">
        <div className="text-6xl mb-4">🚀</div>
        <p className="text-lg text-slate-600">Redirecting to integration guide...</p>
      </div>
    </div>
  );
}

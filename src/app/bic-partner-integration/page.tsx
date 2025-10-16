import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beincom Partner Integration',
  other: {
    'http-equiv': 'refresh',
    content: '0;url=/bic-partner-integration.html',
  },
};

export default function BicPartnerIntegrationPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="text-center">
        <div className="text-6xl mb-4">🚀</div>
        <p className="text-lg text-slate-600">
          Redirecting to integration guide...
        </p>
        <p className="text-sm text-slate-500 mt-4">
          If you are not redirected automatically,{' '}
          <a href="/bic-partner-integration.html" className="text-purple-600 hover:underline">
            click here
          </a>
        </p>
      </div>
    </div>
  );
}

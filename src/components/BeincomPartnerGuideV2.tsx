export default function BeincomPartnerGuideV2() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans leading-relaxed text-slate-700">
      <div className="max-w-7xl mx-auto bg-white rounded-lg p-8 shadow-lg">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-10 rounded-xl mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">🚀 Partner with Beincom</h1>
          <p className="text-xl opacity-90">Drive user growth and track success with our seamless integration platform</p>
        </div>

        <nav className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-0 rounded-xl mb-8 sticky top-5 z-50 shadow-lg overflow-hidden">
          <div className="px-5 py-4 overflow-x-auto">
            <ul className="flex gap-2 list-none min-w-max">
              <li><a href="#overview" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Overview</a></li>
              <li><a href="#getting-started" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Getting Started</a></li>
              <li><a href="#integration-flow" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Integration Flow</a></li>
              <li><a href="#user-referrals" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">User Referrals</a></li>
              <li><a href="#tracking-events" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Tracking Events</a></li>
              <li><a href="#webhooks" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Webhooks</a></li>
              <li><a href="#api-access" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">API Access</a></li>
              <li><a href="#testing" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Testing</a></li>
              <li><a href="#examples" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Examples</a></li>
              <li><a href="#support" className="text-white/90 hover:text-white no-underline px-4 py-2 rounded-lg transition-all duration-300 bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap">Support</a></li>
            </ul>
          </div>
        </nav>

        <section id="overview" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">📋 Partnership Overview</h2>

          <p className="mb-6">Welcome to the Beincom Partner Program! Our integration platform allows you to refer users to Beincom and track their journey through our ecosystem. You&apos;ll receive real-time notifications about user activities and can access detailed analytics through our API.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-blue-700 font-semibold mt-0 mb-3">🎯 User Tracking</h4>
              <p className="text-sm">Track users from referral to key milestones like registration, phone verification, and wallet activation.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-blue-700 font-semibold mt-0 mb-3">🔔 Real-time Notifications</h4>
              <p className="text-sm">Receive instant webhook notifications when users complete important actions in the Beincom ecosystem.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-blue-700 font-semibold mt-0 mb-3">📊 Analytics & Reporting</h4>
              <p className="text-sm">Access comprehensive data about your referred users through our REST API with flexible filtering options.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-blue-700 font-semibold mt-0 mb-3">🔒 Secure Integration</h4>
              <p className="text-sm">Enterprise-grade security with API key authentication, rate limiting, and optional HMAC signing.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-semibold mb-4">🔄 How It Works</h3>
            <div className="flex flex-wrap items-center justify-between my-6">
              <div className="bg-white border-2 border-blue-500 p-4 rounded-lg text-center min-w-40 m-2">
                <strong>1. Setup</strong><br />
                Partner registration<br />
                & API credentials
              </div>
              <div className="text-2xl text-blue-500 mx-2 hidden sm:block">→</div>
              <div className="bg-white border-2 border-blue-500 p-4 rounded-lg text-center min-w-40 m-2">
                <strong>2. Refer</strong><br />
                Direct users to<br />
                Beincom signup
              </div>
              <div className="text-2xl text-blue-500 mx-2 hidden sm:block">→</div>
              <div className="bg-white border-2 border-blue-500 p-4 rounded-lg text-center min-w-40 m-2">
                <strong>3. Track</strong><br />
                Receive notifications<br />
                & query events
              </div>
              <div className="text-2xl text-blue-500 mx-2 hidden sm:block">→</div>
              <div className="bg-white border-2 border-blue-500 p-4 rounded-lg text-center min-w-40 m-2">
                <strong>4. Analyze</strong><br />
                Monitor user<br />
                engagement
              </div>
            </div>
          </div>
        </section>

        <section id="getting-started" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">🏁 Getting Started</h2>

          <div className="space-y-6">
            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">Partnership Agreement</h3>
              <p className="mb-3">Contact our partnership team to discuss collaboration terms and sign the partnership agreement. This ensures both parties understand the integration scope, revenue sharing, and compliance requirements.</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-lg">
                <strong>Contact:</strong> partnerships@beincom.com<br />
                <strong>Timeline:</strong> Typically 1-2 weeks for agreement finalization
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">Partner Account Setup</h3>
              <p className="mb-3">Once the agreement is signed, our team will create your partner account with the following configuration:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>clientId:</strong> Your unique partner identifier (e.g., &quot;acme-corp-2024&quot;)</li>
                <li><strong>clientName:</strong> Your organization name for internal reference</li>
                <li><strong>API Credentials:</strong> Secure API keys for authentication</li>
                <li><strong>Webhook Configuration:</strong> Your endpoint URL and preferred notification method</li>
                <li><strong>Event Subscriptions:</strong> Choose which user events you want to track</li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">Technical Integration</h3>
              <p className="mb-3">Implement the referral tracking and event handling in your application. This typically involves:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Updating your signup/onboarding flow to redirect to Beincom</li>
                <li>Setting up webhook endpoints to receive user event notifications</li>
                <li>Implementing API calls to query user data and events</li>
                <li>Adding analytics and reporting to your dashboard</li>
              </ul>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">Testing & Go Live</h3>
              <p className="mb-3">Thorough testing ensures a smooth user experience and accurate tracking:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Test user referral flows with sandbox users</li>
                <li>Verify webhook delivery and payload processing</li>
                <li>Validate API queries and data accuracy</li>
                <li>Conduct load testing for expected user volumes</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 p-5 rounded-lg my-6">
              <h4 className="text-green-700 font-semibold mt-0 mb-3">✅ Pre-Integration Checklist</h4>
              <ul className="list-none space-y-2 text-sm">
                <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Partnership agreement signed and executed</li>
                <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Technical requirements reviewed and approved</li>
                <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Development environment prepared</li>
                <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Webhook endpoint infrastructure ready</li>
                <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>API integration plan documented</li>
                <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Testing strategy defined</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="integration-flow" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">🔄 Integration Flow</h2>

          <p className="mb-6">Understanding the complete integration flow helps you build a robust and reliable system. Here&apos;s the detailed technical process:</p>

          <div className="space-y-6">
            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">User Referral Process</h3>
              <p className="mb-3">When a user on your platform wants to join Beincom, you redirect them to our signup page with tracking parameters:</p>

              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// Basic referral URL structure
const referralUrl = \`https://group.beincom.com/ref/Cb8pun?type=personal&clientId=\${YOUR_CLIENT_ID}&identityId=\${userIdFromYourSystem}&extra=\${encodeURIComponent(JSON.stringify(additionalData))}\`;

// Example with real data
const referralUrl = \`https://group.beincom.com/ref/Cb8pun?type=personal&clientId=acme-corp-2024&identityId=user-12345&extra=\${encodeURIComponent(JSON.stringify({
  source: 'mobile_app',
  campaign: 'Q4_growth',
  userTier: 'premium'
}))}\`;

// Redirect user
window.location.href = referralUrl;`}
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-r-lg">
                <strong>Key Parameters:</strong><br />
                • <code className="bg-white px-1 rounded">clientId</code>: Your unique partner identifier (required)<br />
                • <code className="bg-white px-1 rounded">identityId</code>: Your internal user ID for tracking (optional but recommended)<br />
                • <code className="bg-white px-1 rounded">extra</code>: Additional context data as JSON string (optional)
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">User Signup & Onboarding</h3>
              <p className="mb-3">The user completes Beincom&apos;s signup and onboarding process. During this journey, several trackable events occur:</p>

              <ul className="list-disc list-inside space-y-1 text-sm mb-4">
                <li><strong>user.registered</strong> - User completes initial registration</li>
                <li><strong>phone.verified</strong> - User verifies their phone number</li>
                <li><strong>wallet.activated</strong> - User activates their Beincom wallet</li>
                <li><strong>kyc.completed</strong> - User completes Know Your Customer verification</li>
              </ul>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 my-4 rounded-r-lg">
                <strong>Automatic Tracking:</strong> Once the user clicks your referral link, all subsequent events are automatically attributed to your partnership. No additional implementation required!
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">Event Notifications</h3>
              <p className="mb-3">As users progress through Beincom&apos;s ecosystem, you&apos;ll receive notifications via your chosen integration methods:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                <div className="bg-teal-50 border border-teal-300 p-4 rounded-lg">
                  <h4 className="text-teal-700 font-semibold mt-0 mb-2">🔔 Webhook Method (Recommended)</h4>
                  <p className="text-sm mb-2">Real-time HTTP POST notifications to your endpoint</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Immediate delivery</li>
                    <li>Automatic retry on failure</li>
                    <li>HMAC signing for security</li>
                  </ul>
                </div>
                <div className="bg-teal-50 border border-teal-300 p-4 rounded-lg">
                  <h4 className="text-teal-700 font-semibold mt-0 mb-2">📡 API Polling Method</h4>
                  <p className="text-sm mb-2">Query our API for user events on your schedule</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Pull-based integration</li>
                    <li>Flexible querying</li>
                    <li>Historical data access</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <h3 className="text-blue-700 font-semibold mt-0 mb-3">Data Processing & Analytics</h3>
              <p className="mb-3">Process the received events to update your systems and generate insights:</p>

              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// Example event processing workflow
function processUserEvent(event) {
  // Update user status in your database
  await updateUserProgress(event.identityId, event.eventType);

  // Trigger business logic based on event type
  switch (event.eventType) {
    case 'user.registered':
      await sendWelcomeEmail(event.identityId);
      await updateConversionMetrics('registration');
      break;

    case 'wallet.activated':
      await unlockPremiumFeatures(event.identityId);
      await updateConversionMetrics('wallet_activation');
      break;
  }

  // Update analytics dashboard
  await refreshAnalyticsDashboard();
}`}
              </div>
            </div>
          </div>
        </section>

        <section id="user-referrals" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">👥 User Referral Implementation</h2>

          <p className="mb-6">The referral system is the foundation of your Beincom integration. Here&apos;s how to implement it effectively:</p>

          <h3 className="text-xl font-semibold mb-4">📝 Referral URL Structure</h3>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            https://group.beincom.com/ref/Cb8pun?type=personal&clientId={'{your-client-id}'}&identityId={'{optional-identity-id}'}&extra={'{optional-extra}'}
          </div>

          <h3 className="text-xl font-semibold mb-4">📊 Parameter Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-5">
              <thead>
                <tr>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Parameter</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Required</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Description</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Example</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Best Practices</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">clientId</code></td>
                  <td className="border border-slate-300 p-3">✅ Yes</td>
                  <td className="border border-slate-300 p-3">Your unique partner identifier</td>
                  <td className="border border-slate-300 p-3">acme-corp-2024</td>
                  <td className="border border-slate-300 p-3">Always include for proper attribution</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">identityId</code></td>
                  <td className="border border-slate-300 p-3">❌ No</td>
                  <td className="border border-slate-300 p-3">Your internal user identifier</td>
                  <td className="border border-slate-300 p-3">user-12345</td>
                  <td className="border border-slate-300 p-3">Include for easier event tracking</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">extra</code></td>
                  <td className="border border-slate-300 p-3">❌ No</td>
                  <td className="border border-slate-300 p-3">Additional context data (JSON string)</td>
                  <td className="border border-slate-300 p-3">{`{"campaign":"summer2024"}`}</td>
                  <td className="border border-slate-300 p-3">Include campaign/source tracking</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4">💡 Implementation Examples</h3>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Web Application (JavaScript)</h4>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// Function to generate referral URL
function generateBeincomReferralUrl(userId, campaignData = {}) {
  const baseUrl = 'https://group.beincom.com/ref/Cb8pun?type=personal';
  const params = new URLSearchParams({
    clientId: 'your-client-id',
    identityId: userId,
    extra: JSON.stringify({
      timestamp: Date.now(),
      source: 'web_app',
      ...campaignData
    })
  });

  return \`\${baseUrl}&\${params.toString()}\`;
}

// Usage in your signup flow
document.getElementById('joinBeincomBtn').addEventListener('click', function() {
  const userId = getCurrentUserId();
  const campaignData = {
    campaign: 'holiday_promotion',
    referralSource: 'dashboard_banner'
  };

  const referralUrl = generateBeincomReferralUrl(userId, campaignData);

  // Open in new tab or same window
  window.open(referralUrl, '_blank');

  // Track the referral event in your analytics
  analytics.track('beincom_referral_initiated', {
    userId: userId,
    campaign: campaignData.campaign
  });
});`}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Mobile Application (React Native)</h4>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`import { Linking } from 'react-native';

const BeincomIntegration = {
  async referUser(userId, extraData = {}) {
    const referralUrl = \`https://group.beincom.com/ref/Cb8pun?type=personal&clientId=your-client-id&identityId=\${userId}&extra=\${encodeURIComponent(JSON.stringify({
      platform: 'mobile',
      app_version: '1.2.3',
      ...extraData
    }))}\`;

    try {
      const supported = await Linking.canOpenURL(referralUrl);
      if (supported) {
        await Linking.openURL(referralUrl);

        // Track successful referral
        analytics.track('beincom_referral_opened', { userId });
      } else {
        console.error('Cannot open Beincom signup URL');
      }
    } catch (error) {
      console.error('Error opening Beincom signup:', error);
    }
  }
};

// Usage in component
const handleJoinBeincom = () => {
  BeincomIntegration.referUser(user.id, {
    campaign: 'mobile_onboarding',
    user_tier: user.tier
  });
};`}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-5 rounded-r-lg">
              <strong>⚠️ Important Notes:</strong>
              <ul className="list-disc list-inside space-y-1 text-sm mt-2">
                <li>Always URL-encode the <code className="bg-white px-1 rounded">extra</code> parameter when it contains JSON</li>
                <li>Keep <code className="bg-white px-1 rounded">identityId</code> values consistent across your system for accurate tracking</li>
                <li>Test referral links in different environments (mobile browsers, apps, etc.)</li>
                <li>Monitor referral success rates and user drop-off points</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tracking-events" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">📈 Tracking User Events</h2>

          <p className="mb-6">Once users are referred to Beincom, you can track their progress through various milestones. Here&apos;s how to effectively monitor and respond to user events:</p>

          <h3 className="text-xl font-semibold mb-4">🎯 Available Event Types</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-5">
              <thead>
                <tr>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Event Type</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Description</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Timing</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Business Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">user.registered</code></td>
                  <td className="border border-slate-300 p-3">User completes initial signup</td>
                  <td className="border border-slate-300 p-3">~2-5 minutes after referral</td>
                  <td className="border border-slate-300 p-3">Initial conversion tracking</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">phone.verified</code></td>
                  <td className="border border-slate-300 p-3">User verifies phone number</td>
                  <td className="border border-slate-300 p-3">~5-15 minutes after signup</td>
                  <td className="border border-slate-300 p-3">Account security milestone</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">wallet.activated</code></td>
                  <td className="border border-slate-300 p-3">User activates Beincom wallet</td>
                  <td className="border border-slate-300 p-3">~30 minutes to several days</td>
                  <td className="border border-slate-300 p-3">High-value conversion event</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">kyc.completed</code></td>
                  <td className="border border-slate-300 p-3">User completes KYC verification</td>
                  <td className="border border-slate-300 p-3">~1-7 days after signup</td>
                  <td className="border border-slate-300 p-3">Full platform access</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-4">📊 Event Data Structure</h3>
          <p className="mb-4">Each event contains comprehensive data about the user action:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            {`{
  "eventId": "evt_7f8a9b2c1d",
  "clientId": "your-client-id",
  "userId": "bic_user_456789",
  "identityId": "user-12345",  // Your internal user ID
  "eventType": "wallet.activated",
  "eventData": {
    "wallet_type": "standard",
    "activation_method": "mobile_app",
    "currency_preferences": ["USD", "BTC"]
  },
  "transactionId": "txn_unique_123",
  "createdAt": "2024-01-15T14:30:00Z",
  "processedAt": "2024-01-15T14:30:05Z",
  "extra": {
    "campaign": "holiday_promotion",
    "source": "web_app",
    "user_tier": "premium"
  }
}`}
          </div>

          <h3 className="text-xl font-semibold mb-4">🔍 Querying Events via API</h3>
          <p className="mb-4">You can query user events programmatically using our REST API:</p>

          <div className="bg-teal-50 border border-teal-300 p-4 rounded-lg my-4">
            <span className="inline-block bg-teal-600 text-white px-2 py-1 rounded font-bold mr-3 text-sm">GET</span>
            <code>https://api.beincom.com/v1/partner/events</code>
            <p className="mt-2 text-sm">Retrieve events with flexible filtering options</p>
          </div>

          <h4 className="font-semibold mb-3">Query Parameters</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse my-5">
              <thead>
                <tr>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Parameter</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Required</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Description</th>
                  <th className="border border-slate-300 p-3 text-left bg-slate-50 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">identityId</code></td>
                  <td className="border border-slate-300 p-3">❌ No</td>
                  <td className="border border-slate-300 p-3">Filter by your internal user ID</td>
                  <td className="border border-slate-300 p-3">user-12345</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">eventType</code></td>
                  <td className="border border-slate-300 p-3">❌ No</td>
                  <td className="border border-slate-300 p-3">Filter by specific event type</td>
                  <td className="border border-slate-300 p-3">wallet.activated</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">startDate</code></td>
                  <td className="border border-slate-300 p-3">❌ No</td>
                  <td className="border border-slate-300 p-3">Filter events after this date</td>
                  <td className="border border-slate-300 p-3">2024-01-01T00:00:00Z</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-3"><code className="bg-slate-100 px-1 rounded">limit</code></td>
                  <td className="border border-slate-300 p-3">❌ No</td>
                  <td className="border border-slate-300 p-3">Maximum events to return (max 5000)</td>
                  <td className="border border-slate-300 p-3">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-semibold mb-3">Example API Queries</h4>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            {`// Get all events for a specific user
curl -X GET "https://api.beincom.com/v1/partner/events?identityId=user-12345" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "x-client-id: YOUR_CLIENT_ID"

// Get wallet activation events from last 30 days
curl -X GET "https://api.beincom.com/v1/partner/events?eventType=wallet.activated&startDate=2024-01-01T00:00:00Z&limit=100" \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "x-client-id: YOUR_CLIENT_ID"`}
          </div>

          <h3 className="text-xl font-semibold mb-4">🎯 Event-Driven Business Logic Examples</h3>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            {`// Node.js example for processing different event types
async function handleUserEvent(event) {
  const { eventType, identityId, eventData, extra } = event;

  try {
    switch (eventType) {
      case 'user.registered':
        // Update conversion funnel
        await analytics.track('beincom_signup_completed', {
          identityId,
          campaign: extra?.campaign,
          conversionTime: calculateConversionTime(event)
        });

        // Send welcome notification
        await notifications.send(identityId, 'beincom_welcome');
        break;

      case 'wallet.activated':
        // High-value conversion event
        await analytics.track('beincom_wallet_activated', {
          identityId,
          walletType: eventData.wallet_type,
          value: 100 // Assign monetary value to this conversion
        });

        // Unlock premium features
        await userService.upgradeToPremium(identityId);
        break;
    }

    // Update user journey stage
    await userJourney.updateStage(identityId, eventType);

  } catch (error) {
    console.error(\`Error processing \${eventType} for \${identityId}:\`, error);
  }
}`}
          </div>
        </section>

        <section id="webhooks" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">🔔 Webhook Integration</h2>

          <p className="mb-6">Webhooks provide real-time notifications when users complete actions in Beincom. This is the recommended method for staying synchronized with user progress.</p>

          <h3 className="text-xl font-semibold mb-4">⚙️ Webhook Configuration</h3>
          <p className="mb-4">During your partner setup, our team will configure your webhook endpoint with these settings:</p>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">Endpoint Configuration</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>URL:</strong> Your HTTPS endpoint (e.g., https://api.yoursite.com/webhooks/beincom)</li>
              <li><strong>Authentication:</strong> API key or HMAC signing for security</li>
              <li><strong>Timeout:</strong> 30 seconds (configurable)</li>
              <li><strong>Retry Policy:</strong> 3 attempts with exponential backoff</li>
              <li><strong>Event Filtering:</strong> Only subscribed event types</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4">📨 Webhook Payload Structure</h3>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            {`{
  "eventId": "evt_7f8a9b2c1d",
  "clientId": "your-client-id",
  "userId": "bic_user_456789",
  "identityId": "user-12345",
  "eventType": "wallet.activated",
  "eventData": {
    "wallet_type": "standard",
    "activation_method": "mobile_app"
  },
  "transactionId": "txn_unique_123",
  "createdAt": "2024-01-15T14:30:00Z",
  "extra": {
    "campaign": "holiday_promotion",
    "source": "web_app"
  }
}`}
          </div>

          <h3 className="text-xl font-semibold mb-4">🔐 Webhook Security</h3>
          <p className="mb-4">Webhooks include security measures to ensure authenticity:</p>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-3">HMAC Signature Verification</h4>
            <p className="mb-3">If HMAC authentication is configured, verify the signature in the <code className="bg-white px-1 rounded">X-Beincom-Signature</code> header:</p>
            <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
              {`// Node.js example for HMAC verification
const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');

  const providedSignature = signature.replace('sha256=', '');

  return crypto.timingSafeEqual(
    Buffer.from(expectedSignature, 'hex'),
    Buffer.from(providedSignature, 'hex')
  );
}

// Express.js webhook handler with verification
app.post('/webhooks/beincom', express.raw({type: 'application/json'}), (req, res) => {
  const signature = req.headers['x-beincom-signature'];
  const payload = req.body;

  if (!verifyWebhookSignature(payload, signature, process.env.BEINCOM_WEBHOOK_SECRET)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }

  // Process the webhook
  const event = JSON.parse(payload);
  processWebhookEvent(event);

  res.status(200).json({ status: 'success' });
});`}
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">📝 Webhook Implementation Examples</h3>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Express.js Implementation</h4>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`const express = require('express');
const app = express();

// Middleware for parsing JSON
app.use('/webhooks/beincom', express.json());

// Webhook endpoint
app.post('/webhooks/beincom', async (req, res) => {
  try {
    const event = req.body;

    // Log incoming webhook
    console.log('Received Beincom webhook:', {
      eventType: event.eventType,
      identityId: event.identityId,
      timestamp: event.createdAt
    });

    // Process the event
    await processUserEvent(event);

    // Respond with success
    res.status(200).json({
      status: 'success',
      eventId: event.eventId
    });

  } catch (error) {
    console.error('Webhook processing error:', error);

    // Return error status to trigger retry
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});`}
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-5 rounded-r-lg">
              <h4 className="font-semibold mb-2">🔧 Webhook Troubleshooting</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Timeouts:</strong> Ensure your endpoint responds within 30 seconds</li>
                <li><strong>Duplicates:</strong> Handle duplicate events gracefully using eventId</li>
                <li><strong>Retries:</strong> Failed webhooks are retried 3 times with exponential backoff</li>
                <li><strong>Monitoring:</strong> Log all webhook requests for debugging and monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="api-access" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">🔌 API Access</h2>

          <p className="mb-6">Our REST API provides programmatic access to user events and data. Use it for building analytics dashboards, generating reports, or syncing data with your systems.</p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <strong>Base URL:</strong> <code>https://api.beincom.com/v1/partner</code><br />
            <strong>Authentication:</strong> Required headers: <code>x-api-key</code> and <code>x-client-id</code><br />
            <strong>Rate Limiting:</strong> 1000 requests per hour (configurable based on partnership)
          </div>

          <h3 className="text-xl font-semibold mb-4">🔐 Authentication</h3>
          <p className="mb-4">All API requests require two authentication headers:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            {`x-api-key: YOUR_API_KEY_HERE
x-client-id: YOUR_CLIENT_ID_HERE`}
          </div>

          <h3 className="text-xl font-semibold mb-4">📊 Available Endpoints</h3>

          <div className="space-y-4">
            <div className="bg-teal-50 border border-teal-300 p-4 rounded-lg">
              <span className="inline-block bg-teal-600 text-white px-2 py-1 rounded font-bold mr-3 text-sm">GET</span>
              <code>/events</code>
              <p className="mt-2 text-sm">Query user events with flexible filtering options</p>
            </div>

            <div className="bg-teal-50 border border-teal-300 p-4 rounded-lg">
              <span className="inline-block bg-teal-600 text-white px-2 py-1 rounded font-bold mr-3 text-sm">GET</span>
              <code>/events/{'{eventId}'}</code>
              <p className="mt-2 text-sm">Get details for a specific event by ID</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">💡 Common Use Cases</h3>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Daily Analytics Sync</h4>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// Sync yesterday's events to your analytics system
async function syncDailyEvents() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const events = await beincomAPI.getEvents({
    startDate: yesterday.toISOString(),
    endDate: today.toISOString(),
    limit: 1000
  });

  for (const event of events) {
    await analytics.recordEvent({
      userId: event.identityId,
      eventType: event.eventType,
      timestamp: event.createdAt,
      properties: {
        beincomUserId: event.userId,
        campaign: event.extra?.campaign
      }
    });
  }
}

// Run daily at 1 AM
cron.schedule('0 1 * * *', syncDailyEvents);`}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Campaign Performance Analysis</h4>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// Analyze campaign performance
async function analyzeCampaignPerformance(campaignId, days = 30) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  const events = await beincomAPI.getEvents({
    startDate: startDate.toISOString(),
    limit: 5000
  });

  // Filter events for this campaign
  const campaignEvents = events.filter(event =>
    event.extra?.campaign === campaignId
  );

  // Calculate funnel metrics
  const metrics = {
    totalReferrals: new Set(campaignEvents.map(e => e.identityId)).size,
    registrations: campaignEvents.filter(e => e.eventType === 'user.registered').length,
    walletActivations: campaignEvents.filter(e => e.eventType === 'wallet.activated').length,
    kycCompletions: campaignEvents.filter(e => e.eventType === 'kyc.completed').length
  };

  // Calculate conversion rates
  metrics.registrationRate = metrics.registrations / metrics.totalReferrals;
  metrics.walletActivationRate = metrics.walletActivations / metrics.registrations;

  return metrics;
}`}
              </div>
            </div>
          </div>
        </section>

        <section id="testing" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">🧪 Testing Your Integration</h2>

          <p className="mb-6">Thorough testing ensures your integration works correctly and provides a smooth user experience. Here&apos;s a comprehensive testing guide:</p>

          <div className="bg-green-50 border border-green-200 p-5 rounded-lg my-6">
            <h4 className="text-green-700 font-semibold mt-0 mb-3">✅ Integration Testing Checklist</h4>
            <ul className="list-none space-y-2 text-sm">
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Referral URL generation and parameter encoding</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>User flow from your platform to Beincom signup</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Webhook endpoint receiving and processing events</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>API authentication and data retrieval</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Error handling and retry mechanisms</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Performance under expected load</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Security measures (HMAC verification, input validation)</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold mb-4">🔬 Testing Strategy</h3>

          <div className="space-y-6">
            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h4 className="font-semibold mb-3">Unit Testing</h4>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// Example unit tests for referral URL generation
describe('Beincom Integration', () => {
  test('generates correct referral URL', () => {
    const url = generateBeincomReferralUrl('user-123', {
      campaign: 'test'
    });

    expect(url).toContain('clientId=your-client-id');
    expect(url).toContain('identityId=user-123');
    expect(url).toContain('extra=');
  });

  test('handles special characters in extra data', () => {
    const url = generateBeincomReferralUrl('user-123', {
      campaign: 'test with spaces & symbols'
    });

    expect(decodeURIComponent(url)).toContain('test with spaces & symbols');
  });
});`}
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-blue-500 p-6 my-6 rounded-r-lg relative">
              <div className="absolute -top-2 -left-4 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h4 className="font-semibold mb-3">Integration Testing</h4>
              <p className="mb-3">Test the complete user flow with actual Beincom integration:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Generate referral URL with test user data</li>
                <li>Navigate to Beincom signup (use test/sandbox environment)</li>
                <li>Complete signup process with test user</li>
                <li>Verify webhook notifications are received</li>
                <li>Query API to confirm event data matches expectations</li>
                <li>Validate business logic triggers correctly</li>
              </ol>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-5 rounded-r-lg">
              <h4 className="font-semibold mb-2">🔧 Common Testing Issues</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>URL Encoding:</strong> Ensure special characters in extra data are properly encoded</li>
                <li><strong>HTTPS Required:</strong> Webhook endpoints must use HTTPS in production</li>
                <li><strong>Response Timeouts:</strong> Webhook handlers should respond within 30 seconds</li>
                <li><strong>Duplicate Events:</strong> Test idempotency by processing the same event multiple times</li>
                <li><strong>Rate Limiting:</strong> Test API calls respect rate limits and handle 429 responses</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
              <h3 className="text-lg font-semibold mb-3">🎯 Testing Tools & Resources</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Webhook Testing:</strong> Use tools like ngrok for local webhook testing</li>
                <li><strong>API Testing:</strong> Postman collection available upon request</li>
                <li><strong>Monitoring:</strong> Set up alerts for webhook failures and API errors</li>
                <li><strong>Logging:</strong> Implement comprehensive logging for debugging</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="examples" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">💡 Complete Integration Examples</h2>

          <p className="mb-6">Here are comprehensive examples showing different integration approaches and use cases:</p>

          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">📱 E-commerce Platform Integration</h3>
              <p className="mb-4">Example for an e-commerce platform wanting to refer customers to Beincom for crypto payments:</p>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// E-commerce integration example
class BeincomEcommerceIntegration {
  constructor(clientId, apiKey) {
    this.clientId = clientId;
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.beincom.com/v1/partner';
  }

  // Generate referral link for checkout page
  generateCheckoutReferralLink(customerId, orderData) {
    const extraData = {
      source: 'checkout_page',
      order_value: orderData.total,
      order_id: orderData.id,
      customer_tier: orderData.customerTier,
      payment_intent: 'crypto_payment'
    };

    return \`https://group.beincom.com/ref/Cb8pun?type=personal&clientId=\${this.clientId}&identityId=\${customerId}&extra=\${encodeURIComponent(JSON.stringify(extraData))}\`;
  }

  // Handle webhook for user wallet activation
  async handleWalletActivation(event) {
    const { identityId, eventData } = event;

    try {
      // Enable crypto payment option for this customer
      await this.enableCryptoPayments(identityId);

      // Send notification about new payment method
      await this.sendPaymentMethodNotification(identityId);

      // Update customer analytics
      await this.updateCustomerAnalytics(identityId, 'crypto_enabled');

      // Offer crypto payment discount
      await this.createCryptoPaymentDiscount(identityId);

    } catch (error) {
      console.error('Error handling wallet activation:', error);
    }
  }
}`}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">🎮 Gaming Platform Integration</h3>
              <p className="mb-4">Example for a gaming platform wanting to integrate Beincom for in-game purchases and rewards:</p>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// Gaming platform integration
class BeincomGamingIntegration {
  constructor(clientId, apiKey) {
    this.clientId = clientId;
    this.apiKey = apiKey;
  }

  // Refer player during onboarding
  async referPlayerDuringOnboarding(playerId, gameData) {
    const extraData = {
      source: 'game_onboarding',
      game_level: gameData.level,
      player_type: gameData.playerType,
      referral_context: 'unlock_premium_features'
    };

    const referralUrl = \`https://group.beincom.com/ref/Cb8pun?type=personal&clientId=\${this.clientId}&identityId=\${playerId}&extra=\${encodeURIComponent(JSON.stringify(extraData))}\`;

    // Track the referral in game analytics
    await this.gameAnalytics.track('beincom_referral_shown', {
      playerId: playerId,
      context: 'onboarding'
    });

    return referralUrl;
  }

  // Handle player wallet activation
  async handlePlayerWalletActivation(event) {
    const { identityId: playerId, eventData } = event;

    try {
      // Unlock premium features
      await this.unlockPremiumFeatures(playerId);

      // Grant welcome bonus
      await this.grantWelcomeBonus(playerId, {
        type: 'crypto_wallet_bonus',
        amount: 1000,
        currency: 'game_coins'
      });

      // Enable NFT marketplace access
      await this.enableNFTMarketplace(playerId);

    } catch (error) {
      console.error('Error handling player wallet activation:', error);
    }
  }
}`}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">📈 SaaS Platform Integration</h3>
              <p className="mb-4">Example for a SaaS platform offering crypto payment options:</p>
              <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
                {`// SaaS platform integration
class BeincomSaaSIntegration {
  constructor(clientId, apiKey) {
    this.clientId = clientId;
    this.apiKey = apiKey;
  }

  // Integrate with subscription upgrade flow
  async handleSubscriptionUpgrade(userId, planData) {
    const extraData = {
      source: 'subscription_upgrade',
      target_plan: planData.name,
      plan_value: planData.price,
      upgrade_context: 'crypto_payment_discount'
    };

    // Check if user already has Beincom wallet
    const events = await this.queryEvents({ identityId: userId });
    const hasWallet = events.some(e => e.eventType === 'wallet.activated');

    if (hasWallet) {
      // Offer immediate crypto payment discount
      return {
        cryptoPaymentAvailable: true,
        discount: 0.15, // 15% discount for crypto payments
        message: 'Pay with crypto and save 15%!'
      };
    } else {
      // Generate referral link with subscription context
      const referralUrl = \`https://group.beincom.com/ref/Cb8pun?type=personal&clientId=\${this.clientId}&identityId=\${userId}&extra=\${encodeURIComponent(JSON.stringify(extraData))}\`;

      return {
        cryptoPaymentAvailable: false,
        referralUrl: referralUrl,
        potentialDiscount: 0.15,
        message: 'Set up Beincom wallet to unlock 15% crypto payment discount'
      };
    }
  }
}`}
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="mb-8">
          <h2 className="text-3xl font-semibold text-blue-700 mt-10 mb-5 border-l-4 border-blue-500 pl-4">📞 Support & Resources</h2>

          <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white p-8 rounded-xl mb-8 text-center">
            <h3 className="text-2xl font-semibold mb-2">🤝 Partner Support</h3>
            <p className="text-lg opacity-90">Our dedicated partner success team is here to help you succeed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-blue-700 font-semibold mt-0 mb-3">📧 Technical Support</h4>
              <p className="text-sm mb-2"><strong>Email:</strong> tech-support@beincom.com</p>
              <p className="text-sm mb-2"><strong>Response Time:</strong> 4-8 hours during business days</p>
              <p className="text-sm">For integration issues, API problems, and technical questions</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-blue-700 font-semibold mt-0 mb-3">🤝 Partnership Team</h4>
              <p className="text-sm mb-2"><strong>Email:</strong> partnerships@beincom.com</p>
              <p className="text-sm mb-2"><strong>Response Time:</strong> 24-48 hours</p>
              <p className="text-sm">For business discussions, contract questions, and strategic planning</p>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm">
              <h4 className="text-blue-700 font-semibold mt-0 mb-3">🆘 Emergency Support</h4>
              <p className="text-sm mb-2"><strong>For Production Issues:</strong> urgent@beincom.com</p>
              <p className="text-sm mb-2"><strong>Response Time:</strong> 1-2 hours</p>
              <p className="text-sm">Use only for critical production issues affecting user experience</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">📚 Additional Resources</h3>
          <div className="bg-green-50 border border-green-200 p-5 rounded-lg my-6">
            <h4 className="text-green-700 font-semibold mt-0 mb-3">🔗 Helpful Links</h4>
            <ul className="list-none space-y-2 text-sm">
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>API Documentation: /docs (Swagger UI)</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Integration Examples: Available in this guide</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Service Status: status.beincom.com</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Partner Portal: partners.beincom.com (coming soon)</li>
              <li className="relative pl-6"><span className="absolute left-0 text-green-500 font-bold">✓</span>Community Forum: community.beincom.com</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-5 rounded-r-lg">
            <h4 className="font-semibold mb-2">🔧 Quick Troubleshooting</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
              <div>
                <h5 className="font-medium mb-2">Common Issues:</h5>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>Webhooks not received:</strong> Check HTTPS, response times, and firewall settings</li>
                  <li><strong>API 401 errors:</strong> Verify both x-api-key and x-client-id headers</li>
                  <li><strong>No events for user:</strong> Confirm clientId in referral URL matches your configuration</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Debug Steps:</h5>
                <ul className="list-disc list-inside space-y-1">
                  <li>Check service status at status.beincom.com</li>
                  <li>Review API logs for error details</li>
                  <li>Test with curl commands from documentation</li>
                  <li>Verify webhook endpoint with test payloads</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 my-5 rounded-r-lg">
            <h4 className="font-semibold mb-2">🎯 Best Practices for Success</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Monitor Integration Health:</strong> Set up alerts for webhook failures and API errors</li>
              <li><strong>Track User Journey:</strong> Analyze conversion funnels to optimize referral flows</li>
              <li><strong>Test Regularly:</strong> Periodic testing ensures continued functionality</li>
              <li><strong>Keep Documentation Updated:</strong> Stay informed about API changes and new features</li>
              <li><strong>Engage with Community:</strong> Share experiences and learn from other partners</li>
            </ul>
          </div>
        </section>

        <footer className="mt-12 pt-5 border-t border-slate-300 text-center text-slate-500">
          <p>&copy; 2024 Beincom. All rights reserved. | Partner Integration Guide v2.0</p>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  );
}
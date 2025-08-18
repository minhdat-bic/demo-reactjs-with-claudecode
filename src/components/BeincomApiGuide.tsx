export default function BeincomApiGuide() {
  return (
    <div className="max-w-6xl mx-auto bg-slate-50 font-sans leading-relaxed text-slate-700">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 border-b-4 border-blue-500 pb-4 mb-8">
          🤝 Beincom Partner API Integration Guide
        </h1>
        
        <nav className="bg-slate-800 text-white p-4 rounded-lg mb-8">
          <ul className="flex flex-wrap gap-5 list-none">
            <li><a href="#overview" className="text-blue-300 hover:text-blue-200 no-underline">Overview</a></li>
            <li><a href="#partner-setup" className="text-blue-300 hover:text-blue-200 no-underline">Partner Setup</a></li>
            <li><a href="#signup-integration" className="text-blue-300 hover:text-blue-200 no-underline">Signup Integration</a></li>
            <li><a href="#api-endpoints" className="text-blue-300 hover:text-blue-200 no-underline">API Endpoints</a></li>
            <li><a href="#webhooks" className="text-blue-300 hover:text-blue-200 no-underline">Webhooks</a></li>
            <li><a href="#authentication" className="text-blue-300 hover:text-blue-200 no-underline">Authentication</a></li>
            <li><a href="#examples" className="text-blue-300 hover:text-blue-200 no-underline">Examples</a></li>
          </ul>
        </nav>

        <section id="overview" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">📋 Overview</h2>
          <p className="mb-4">
            Welcome to the Beincom Partner Integration API documentation. This guide will help you integrate your platform with Beincom to track user referrals and manage user events through our partnership program.
          </p>
          
          <h3 className="text-lg font-medium text-slate-800 mb-3">Integration Flow</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Partnership Setup:</strong> Sign collaboration contract and get partner registration</li>
            <li><strong>User Referral:</strong> Direct users to Beincom signup with tracking parameters</li>
            <li><strong>Event Tracking:</strong> Monitor user activities via API or webhook notifications</li>
          </ol>
        </section>

        <section id="partner-setup" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">🏢 Partner Setup Process</h2>
          
          <div className="bg-slate-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-lg">
            <h3 className="text-blue-700 font-medium mt-0 mb-3">Step 1: Contract Signing</h3>
            <p>Sign a collaboration contract with Beincom. Our team will reach out to finalize partnership terms and integration requirements.</p>
          </div>

          <div className="bg-slate-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-lg">
            <h3 className="text-blue-700 font-medium mt-0 mb-3">Step 2: Partner Registration</h3>
            <p className="mb-3">Beincom will create a Partner entity in our system with your configuration. This includes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>partnerId:</strong> Unique identifier for your organization</li>
              <li><strong>partnerName:</strong> Your organization name</li>
              <li><strong>syncMethod:</strong> Integration methods (API, webhook, or both)</li>
              <li><strong>subscribedEvents:</strong> Event types you want to receive</li>
              <li><strong>webhookConfig:</strong> Webhook endpoint configuration (if applicable)</li>
              <li><strong>apiConfig:</strong> API access configuration including authentication</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <strong>Note:</strong> During the initial phase, partner registration is handled manually by Beincom team. We plan to provide a self-service portal in future releases.
          </div>
        </section>

        <section id="signup-integration" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">🔗 Signup Integration</h2>
          
          <div className="bg-slate-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-lg">
            <h3 className="text-blue-700 font-medium mt-0 mb-3">Step 3: User Referral Implementation</h3>
            <p className="mb-4">When directing users to Beincom&apos;s signup page, include the following query parameters:</p>
            
            <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
              https://signup.beincom.com?partnerId=&#123;your-partner-id&#125;&memberId=&#123;optional-member-id&#125;&callbackData=&#123;optional-callback-data&#125;
            </div>

            <h4 className="font-medium mb-3">Query Parameters</h4>
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
                    <td className="border border-slate-300 p-3"><code>partnerId</code></td>
                    <td className="border border-slate-300 p-3">✅ Yes</td>
                    <td className="border border-slate-300 p-3">Your unique partner identifier provided by Beincom</td>
                    <td className="border border-slate-300 p-3">partner-123</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3"><code>memberId</code></td>
                    <td className="border border-slate-300 p-3">❌ No</td>
                    <td className="border border-slate-300 p-3">Your internal user/member identifier for tracking</td>
                    <td className="border border-slate-300 p-3">user-456</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-3"><code>callbackData</code></td>
                    <td className="border border-slate-300 p-3">❌ No</td>
                    <td className="border border-slate-300 p-3">Additional data for your business logic (JSON string)</td>
                    <td className="border border-slate-300 p-3">&#123;&quot;campaign&quot;:&quot;summer2024&quot;&#125;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-5 rounded-r-lg">
            <strong>Important:</strong> The <code>partnerId</code> parameter is essential for referral tracking. Without it, the user signup won&apos;t be attributed to your partnership.
          </div>
        </section>

        <section id="api-endpoints" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">🔌 API Endpoints</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
            <strong>Base URL:</strong> <code>https://api.beincom.com/partner</code><br />
            <strong>Authentication:</strong> API Key via <code>x-api-key</code> header
          </div>

          <h3 className="text-lg font-medium text-slate-800 mb-3">Get User Events</h3>
          <div className="bg-teal-50 border border-teal-300 p-4 rounded-lg my-4">
            <span className="inline-block bg-teal-600 text-white px-2 py-1 rounded font-bold mr-3">GET</span>
            <code>/events</code>
            <p className="mt-2">Retrieve events for a specific user by their member ID.</p>
          </div>

          <h4 className="font-medium mb-3">Example Request</h4>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            curl -X GET &quot;https://api.beincom.com/partner/events?memberId=user-456&eventType=signup&limit=10&quot; \<br />
            &nbsp;&nbsp;-H &quot;x-api-key: YOUR_API_KEY&quot; \<br />
            &nbsp;&nbsp;-H &quot;Content-Type: application/json&quot;
          </div>

          <h4 className="font-medium mb-3">Example Response</h4>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            &#91;<br />
            &nbsp;&nbsp;&#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;eventId&quot;: &quot;evt_123456&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;partnerId&quot;: &quot;partner-123&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;userId&quot;: &quot;bic_user_789&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;memberId&quot;: &quot;user-456&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;eventType&quot;: &quot;signup&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;eventData&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;email&quot;: &quot;user@example.com&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;signupMethod&quot;: &quot;email&quot;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;transactionId&quot;: &quot;txn_abc123&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;webhookStatus&quot;: &quot;sent&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;webhookAttempts&quot;: 1,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;createdAt&quot;: &quot;2024-01-15T10:30:00Z&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;processedAt&quot;: &quot;2024-01-15T10:30:05Z&quot;<br />
            &nbsp;&nbsp;&#125;<br />
            &#93;
          </div>
        </section>

        <section id="webhooks" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">🔔 Webhook Integration</h2>
          
          <p className="mb-4">Webhooks provide real-time notifications when events occur. Configure your webhook endpoint during partner setup to receive automatic notifications.</p>

          <h3 className="text-lg font-medium text-slate-800 mb-3">Webhook Configuration</h3>
          <p className="mb-3">Your webhook endpoint will be configured with the following properties:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>URL:</strong> Your endpoint URL</li>
            <li><strong>Authentication:</strong> API Key or HMAC signing</li>
            <li><strong>Retry Policy:</strong> Configurable retry attempts with backoff strategy</li>
            <li><strong>Timeout:</strong> Request timeout (default: 30 seconds)</li>
          </ul>

          <h3 className="text-lg font-medium text-slate-800 mb-3">Webhook Payload</h3>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            &#123;<br />
            &nbsp;&nbsp;&quot;eventId&quot;: &quot;evt_123456&quot;,<br />
            &nbsp;&nbsp;&quot;partnerId&quot;: &quot;partner-123&quot;,<br />
            &nbsp;&nbsp;&quot;userId&quot;: &quot;bic_user_789&quot;,<br />
            &nbsp;&nbsp;&quot;memberId&quot;: &quot;user-456&quot;,<br />
            &nbsp;&nbsp;&quot;eventType&quot;: &quot;signup&quot;,<br />
            &nbsp;&nbsp;&quot;eventData&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;email&quot;: &quot;user@example.com&quot;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;signupMethod&quot;: &quot;email&quot;<br />
            &nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&quot;transactionId&quot;: &quot;txn_abc123&quot;,<br />
            &nbsp;&nbsp;&quot;createdAt&quot;: &quot;2024-01-15T10:30:00Z&quot;,<br />
            &nbsp;&nbsp;&quot;callbackData&quot;: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&quot;campaign&quot;: &quot;summer2024&quot;<br />
            &nbsp;&nbsp;&#125;<br />
            &#125;
          </div>
        </section>

        <section id="authentication" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">🔐 Authentication</h2>
          
          <h3 className="text-lg font-medium text-slate-800 mb-3">API Authentication</h3>
          <p className="mb-3">All API requests require authentication via the <code>x-api-key</code> header:</p>
          <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
            x-api-key: YOUR_API_KEY_HERE
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 my-5 rounded-r-lg">
            <strong>Security Note:</strong> Keep your API keys secure and rotate them regularly. Never expose API keys in client-side code.
          </div>
        </section>

        <section id="examples" className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-5">💡 Integration Examples</h2>
          
          <h3 className="text-lg font-medium text-slate-800 mb-3">Complete Integration Flow</h3>
          
          <div className="bg-slate-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-lg">
            <h4 className="font-medium mb-3">1. Direct User to Signup</h4>
            <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
              {/* JavaScript example */}<br />
              const signupUrl = `https://signup.beincom.com?partnerId=$&#123;PARTNER_ID&#125;&memberId=$&#123;userId&#125;&callbackData=$&#123;encodeURIComponent(JSON.stringify(&#123;source: &apos;mobile_app&apos;, campaign: &apos;Q1_2024&apos;&#125;))&#125;`;<br />
              window.location.href = signupUrl;
            </div>
          </div>

          <div className="bg-slate-50 border-l-4 border-blue-500 p-5 my-5 rounded-r-lg">
            <h4 className="font-medium mb-3">2. Check User Events via API</h4>
            <div className="bg-slate-900 text-slate-200 p-5 rounded-lg overflow-x-auto my-4 font-mono text-sm">
              {/* Node.js example */}<br />
              const axios = require(&apos;axios&apos;);<br /><br />
              async function getUserEvents(memberId) &#123;<br />
              &nbsp;&nbsp;try &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;const response = await axios.get(<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`https://api.beincom.com/partner/events?memberId=$&#123;memberId&#125;`,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; headers: &#123; &apos;x-api-key&apos;: process.env.BEINCOM_API_KEY &#125; &#125;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;);<br />
              &nbsp;&nbsp;&nbsp;&nbsp;return response.data;<br />
              &nbsp;&nbsp;&#125; catch (error) &#123;<br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.error(&apos;Error fetching user events:&apos;, error);<br />
              &nbsp;&nbsp;&#125;<br />
              &#125;
            </div>
          </div>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-5 rounded-r-lg">
          <h3 className="text-lg font-medium text-slate-800 mb-3">📞 Support</h3>
          <p className="mb-3">For technical support or partnership inquiries:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Email:</strong> partners@beincom.com</li>
            <li><strong>Documentation:</strong> This page will be updated with new features and changes</li>
            <li><strong>API Status:</strong> Monitor our status page for service updates</li>
          </ul>
        </div>

        <footer className="mt-12 pt-5 border-t border-slate-300 text-center text-slate-500">
          <p>&copy; 2024 Beincom. All rights reserved. | Partner API Integration Guide v1.0</p>
        </footer>
      </div>
    </div>
  );
}
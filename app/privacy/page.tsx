import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { HydrationBoundary } from "@/components/hydration-boundary"

export default function Privacy() {
  return (
    <HydrationBoundary>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-ping"></div>
        </div>
        
        <SharedHeader />
        
        <div className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
                <p className="text-gray-600">How we collect, use, and protect your personal information.</p>
              </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
              <p className="mb-3">
                We collect information you provide directly to us, such as when you create an account, make a
                transaction, or contact us for support. This includes:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Name, email address, and phone number</li>
                <li>Payment information (credit/debit card details, bank account information)</li>
                <li>Transaction history and preferences</li>
                <li>Communication preferences</li>
                <li>Customer support interactions</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
              <p className="mb-3">
                When you use our services, we automatically collect certain information about your device and usage:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>IP address and device identifiers</li>
                <li>Browser type and version</li>
                <li>Operating system information</li>
                <li>Usage patterns and preferences</li>
                <li>Location data (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="mb-3">
                We use the information we collect to provide, maintain, and improve our services. Specifically, we use your information to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Process transactions and send confirmations</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send important service updates and notifications</li>
                <li>Improve our services and develop new features</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>
              <p>
                We may also use aggregated, non-personally identifiable information for analytics and business intelligence purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing and Disclosure</h2>
              <p className="mb-3">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except in the following circumstances:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li><strong>Service Providers:</strong> We share information with trusted third-party service providers who help us operate our business</li>
                <li><strong>Payment Processors:</strong> We share payment information with secure payment processors to complete transactions</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Consent:</strong> We may share information with your explicit consent</li>
              </ul>
              <p>
                All third parties we work with are required to maintain the confidentiality and security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="mb-3">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure data storage with encryption at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights and Choices</h2>
              <p className="mb-3">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li><strong>Access:</strong> You can request access to your personal information</li>
                <li><strong>Correction:</strong> You can request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> You can request deletion of your personal information</li>
                <li><strong>Portability:</strong> You can request a copy of your data in a portable format</li>
                <li><strong>Opt-out:</strong> You can opt out of marketing communications</li>
                <li><strong>Withdraw Consent:</strong> You can withdraw consent for data processing</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to enhance your experience on our platform:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for basic functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our service</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
              <p>
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Data Retention</h2>
              <p className="mb-3">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Account information: Until account deletion or 3 years of inactivity</li>
                <li>Transaction records: 7 years for compliance purposes</li>
                <li>Communication records: 2 years from last interaction</li>
                <li>Marketing data: Until you opt out or 2 years of inactivity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Children's Privacy</h2>
              <p className="mb-3">
                Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
              </p>
              <p>
                If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="mb-3">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Posting the updated policy on our website</li>
                <li>Sending an email notification to registered users</li>
                <li>Displaying a prominent notice on our platform</li>
              </ul>
            </section>


          </div>

            </div>
          </div>
        </div>
        
        <SharedFooter />
      </div>
    </HydrationBoundary>
  )
}

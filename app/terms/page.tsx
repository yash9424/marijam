import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { HydrationBoundary } from "@/components/hydration-boundary"

export default function Terms() {
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
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
                <p className="text-gray-600">Please read these terms and conditions carefully before using our services.</p>
              </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-3">
                By using MARIJAM TECHNOLOGIES PRIVATE LIMITED services, you are agreeing to be bound by the following
                terms and conditions. These terms apply to all visitors, users, and others who access or use the service.
              </p>
              <p>
                If you disagree with any part of these terms, then you may not access the service. Your access to and use of the service is conditioned on your acceptance of and compliance with these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Eligibility</h2>
              <p className="mb-3">
                You must be at least 18 years old to use our services. By using our services, you represent and warrant
                that you meet this age requirement and have the legal capacity to enter into these terms.
              </p>
              <p className="mb-3">
                You also represent that you are not prohibited from receiving services under the laws of India or other applicable jurisdiction.
              </p>
              <p>
                If you are using our services on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Service Description</h2>
              <p className="mb-3">
                MARIJAM TECHNOLOGIES provides mobile recharge, bill payment, and other utility services through our
                platform. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Mobile prepaid and postpaid recharges</li>
                <li>DTH recharges and bill payments</li>
                <li>Electricity bill payments</li>
                <li>Water bill payments</li>
                <li>Gas bill payments</li>
                <li>Insurance premium payments</li>
                <li>Loan EMI payments</li>
                <li>Credit card bill payments</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any service at any time without prior notice. We may also impose limits on certain features and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Responsibilities</h2>
              <p className="mb-3">
                Users are responsible for maintaining the confidentiality of their account information and for all
                activities that occur under their account. You agree to:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Provide accurate and complete information when creating an account</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use the service to transmit harmful or malicious content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Payment Terms</h2>
              <p className="mb-3">
                All payments made through our platform are final and non-refundable unless otherwise specified in our refund policy. You agree to pay all charges incurred by you or on your behalf through the service.
              </p>
              <p className="mb-3">
                We accept various payment methods including credit cards, debit cards, net banking, and digital wallets. All transactions are processed securely through our payment partners.
              </p>
              <p>
                In case of failed transactions, the amount will be refunded to your original payment method within 7-10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Privacy and Data Protection</h2>
              <p className="mb-3">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our service.
              </p>
              <p>
                By using our service, you consent to the collection and use of your information in accordance with our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
              <p className="mb-3">
                MARIJAM TECHNOLOGIES shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>
              <p>
                Our total liability to you for any damages shall not exceed the amount you paid to us in the twelve months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination</h2>
              <p className="mb-3">
                We may terminate or suspend your account and access to the service immediately, without prior notice, for any reason including breach of these terms.
              </p>
              <p>
                Upon termination, your right to use the service will cease immediately. All provisions of these terms which should survive termination shall survive.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
              <p className="mb-3">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on our website.
              </p>
              <p>
                Your continued use of the service after any such changes constitutes your acceptance of the new terms.
              </p>
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

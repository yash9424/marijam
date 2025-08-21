import { SharedHeader } from "@/components/shared-header"
import { SharedFooter } from "@/components/shared-footer"
import { HydrationBoundary } from "@/components/hydration-boundary"

export default function RefundPolicy() {
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
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Refund Policy</h1>
                <p className="text-gray-600">Our refund policy guidelines and procedures.</p>
              </div>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Refund Eligibility</h2>
              <p className="mb-3">
                Refunds are applicable only in specific circumstances. To be eligible for a refund, one of the following conditions must be met:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Payment was deducted but the service was not delivered</li>
                <li>Service was delivered to the wrong account due to our system error</li>
                <li>Duplicate payment was processed for the same transaction</li>
                <li>Technical failure resulted in incomplete service delivery</li>
                <li>Service was cancelled within the specified cancellation window</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800">
                  <strong>Important:</strong> Refunds are not applicable for successfully completed transactions where the service was delivered as requested.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Refund Request Process</h2>
              <p className="mb-3">
                To request a refund, customers must follow these steps:
              </p>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li>Submit a refund request within 7 days of the transaction date</li>
                <li>Provide transaction ID and payment details</li>
                <li>Include supporting documentation (screenshots, receipts, etc.)</li>
                <li>Clearly explain the reason for the refund request</li>
                <li>Wait for our support team to review and respond</li>
              </ol>
              <p className="mb-3">
                Refund requests can be submitted through:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>Customer support portal on our website</li>
                <li>Email to support@marijamtech.com</li>
                <li>Phone call to our customer service number</li>
                <li>In-app support chat feature</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Refund Processing Timeline</h2>
              <p className="mb-3">
                Once a refund request is approved, the processing timeline varies by payment method:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Credit/Debit Cards</h4>
                  <p className="text-sm">3-7 business days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Net Banking</h4>
                  <p className="text-sm">2-5 business days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Digital Wallets</h4>
                  <p className="text-sm">1-3 business days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">UPI</h4>
                  <p className="text-sm">1-2 business days</p>
                </div>
              </div>
              <p>
                Refunds will be processed through the same payment method used for the original transaction. In exceptional cases, alternative refund methods may be arranged.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Non-Refundable Services</h2>
              <p className="mb-3">
                The following services are generally not eligible for refunds:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Successfully completed mobile recharges</li>
                <li>DTH recharges that have been activated</li>
                <li>Bill payments that have been processed by the service provider</li>
                <li>Gift cards and vouchers that have been delivered</li>
                <li>Services used beyond the cancellation window</li>
                <li>Transactions completed more than 30 days ago</li>
              </ul>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800">
                  <strong>Note:</strong> Even for non-refundable services, we may consider refunds in exceptional circumstances at our discretion.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Partial Refunds</h2>
              <p className="mb-3">
                In certain situations, partial refunds may be applicable:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Service was partially delivered or incomplete</li>
                <li>Promotional discounts were incorrectly applied</li>
                <li>Service quality did not meet promised standards</li>
                <li>Technical issues affected service delivery</li>
              </ul>
              <p>
                The refund amount will be calculated based on the portion of service not delivered or the value of the issue encountered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Refund Investigation Process</h2>
              <p className="mb-3">
                All refund requests undergo a thorough investigation process:
              </p>
              <ol className="list-decimal list-inside mb-4 space-y-2">
                <li><strong>Initial Review:</strong> Request is reviewed within 24 hours</li>
                <li><strong>Documentation Check:</strong> All provided documents are verified</li>
                <li><strong>System Analysis:</strong> Transaction logs and system records are examined</li>
                <li><strong>Service Provider Verification:</strong> Confirmation with relevant service providers</li>
                <li><strong>Decision:</strong> Refund approval or denial with detailed explanation</li>
                <li><strong>Processing:</strong> Approved refunds are processed immediately</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Dispute Resolution</h2>
              <p className="mb-3">
                If you disagree with our refund decision, you can:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Request a review by our senior support team</li>
                <li>Provide additional evidence or documentation</li>
                <li>Escalate the matter to our customer relations manager</li>
                <li>File a complaint with relevant consumer protection authorities</li>
              </ul>
              <p>
                We are committed to fair and transparent dispute resolution and will work with you to find a satisfactory solution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cancellation Policy</h2>
              <p className="mb-3">
                Some services may be cancelled before processing:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-1">
                <li>Bill payments can be cancelled within 30 minutes of transaction</li>
                <li>Scheduled recharges can be cancelled up to 1 hour before execution</li>
                <li>Bulk transactions can be cancelled if not yet processed</li>
              </ul>
              <p>
                Cancelled transactions will be automatically refunded within 2-3 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Refund Notifications</h2>
              <p className="mb-3">
                You will be notified about your refund status through:
              </p>
              <ul className="list-disc list-inside mb-3 space-y-1">
                <li>SMS to your registered mobile number</li>
                <li>Email to your registered email address</li>
                <li>In-app notifications</li>
                <li>Account transaction history updates</li>
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

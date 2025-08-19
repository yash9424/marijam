import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-red-500">Refund</span> & <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-gray-600">Our refund policy guidelines and procedures.</p>
          </div>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Eligibility for Refund</h2>
              <p>
                Refunds are applicable only in certain circumstances. To be eligible for a refund, the customer must
                have made a payment for a service that was not delivered or was delivered incorrectly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Request for Refund</h2>
              <p>
                Customers must submit a refund request within [insert time frame, e.g., 7 days] of the transaction date.
                Requests made after this period may not be considered.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Refund Process</h2>
              <p>
                Refunds will be processed through the same payment method used for the original transaction. It may take
                [insert time frame, e.g., 7-14 days] for the refunded amount to reflect in the customer&apos;s account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Non-Refundable Services</h2>
              <p>
                Certain services may not be eligible for refunds, such as recharges made for mobile, DTH, or other
                utilities where the service has been successfully delivered as per the customer's instructions.
              </p>
            </section>
          </div>

          <div className="text-center mt-8">
            <Link href="/">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

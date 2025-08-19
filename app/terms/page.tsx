import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-pink-500">Terms</span> & <span className="text-blue-600">Conditions</span>
            </h1>
            <p className="text-gray-600">Please read these terms and conditions carefully before using our services.</p>
          </div>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Acceptance of Terms</h2>
              <p>
                By using MARIJAM TECHNOLOGIES PRIVATE LIMITED services, you are agreeing to be bound by the following
                terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use our services. By using our services, you represent and warrant
                that you meet this age requirement and have the legal capacity to enter into these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. Service Description</h2>
              <p>
                MARIJAM TECHNOLOGIES provides mobile recharge, bill payment, and other utility services through our
                platform. We reserve the right to modify or discontinue any service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. User Responsibilities</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account information and for all
                activities that occur under their account.
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

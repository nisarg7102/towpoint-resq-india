import Layout from "@/components/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <img src="/favicon.ico" alt="TowPoint Logo" className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-4xl font-bold text-primary">Refund Policy</h1>
        </div>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Overview</h2>
            <p className="leading-relaxed">
              At TowPoint, we are committed to providing quality roadside assistance and towing services. 
              This Refund Policy outlines the circumstances under which refunds may be issued for our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Refund Eligibility</h2>
            <p className="leading-relaxed mb-3">
              You may be eligible for a refund in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service was not provided as promised</li>
              <li>Service provider failed to arrive within the committed timeframe without valid reason</li>
              <li>You were charged incorrectly or overcharged for services</li>
              <li>Service was cancelled by TowPoint due to unavailability</li>
              <li>Duplicate payment was processed</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Non-Refundable Situations</h2>
            <p className="leading-relaxed mb-3">
              Refunds will NOT be provided in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Service was completed as agreed upon</li>
              <li>Customer was not present at the specified location</li>
              <li>Customer cancelled after service provider was dispatched (cancellation fee may apply)</li>
              <li>Customer provided incorrect location or vehicle information</li>
              <li>Service could not be completed due to customer's vehicle condition or safety concerns</li>
              <li>Customer refused service after service provider arrived</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">4. Refund Request Process</h2>
            <p className="leading-relaxed mb-3">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Contact our customer service within 48 hours of service completion</li>
              <li>Provide your service booking details and payment receipt</li>
              <li>Explain the reason for your refund request</li>
              <li>Provide any supporting evidence (photos, videos, etc.) if applicable</li>
              <li>Wait for our team to review your request</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Refund Processing Time</h2>
            <p className="leading-relaxed">
              Once your refund request is approved:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Refund will be processed within 5-7 business days</li>
              <li>The refund will be credited to your original payment method</li>
              <li>You will receive a confirmation email once the refund is processed</li>
              <li>Bank processing time may vary (typically 3-5 business days)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Partial Refunds</h2>
            <p className="leading-relaxed">
              In some cases, we may offer partial refunds if:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Service was partially completed</li>
              <li>There was a delay in service delivery</li>
              <li>Service quality did not meet expected standards</li>
              <li>Minor issues occurred during service delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Cancellation Charges</h2>
            <p className="leading-relaxed">
              If you cancel a service request after our service provider has been dispatched, a cancellation 
              charge may apply. The charge covers the cost of dispatching our service provider to your location. 
              Cancellation charges will be communicated at the time of cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">8. Dispute Resolution</h2>
            <p className="leading-relaxed">
              If you are not satisfied with our refund decision, you may escalate the matter to our senior 
              management team. We are committed to resolving all disputes fairly and promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">9. Contact for Refunds</h2>
            <p className="leading-relaxed">
              For refund requests or questions about this policy, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold">TowPoint - Refund Department</p>
              <p>Email: refunds@towpoint.com</p>
              <p>Phone: +91 94263 69900</p>
              <p>Location: Ahmedabad, Gujarat, India</p>
              <p className="mt-2 text-sm">Available: 24×7 for urgent refund queries</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">10. Policy Updates</h2>
            <p className="leading-relaxed">
              We reserve the right to update this Refund Policy at any time. Any changes will be posted on 
              this page with an updated revision date. Continued use of our services after changes constitutes 
              acceptance of the updated policy.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              Last Updated: October 2025
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy;

import Layout from "@/components/Layout";

const TermsConditions = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="flex items-center gap-3 mb-8">
          <img src="/favicon.ico" alt="TowPoint Logo" className="w-12 h-12 md:w-16 md:h-16" />
          <h1 className="text-4xl font-bold text-primary">Terms & Conditions</h1>
        </div>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using TowPoint's services, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">2. Service Description</h2>
            <p className="leading-relaxed mb-3">
              TowPoint provides 24×7 roadside assistance and car towing services including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Car towing and transportation</li>
              <li>Flat tire assistance and replacement</li>
              <li>Battery jump-start services</li>
              <li>Fuel delivery services</li>
              <li>Key lockout assistance</li>
              <li>Accident recovery services</li>
              <li>On-spot minor repairs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">3. Service Availability</h2>
            <p className="leading-relaxed">
              While we strive to provide 24×7 service availability, we do not guarantee uninterrupted service. 
              Service availability may be affected by factors beyond our control including weather conditions, 
              traffic situations, and emergency circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">4. User Responsibilities</h2>
            <p className="leading-relaxed mb-3">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate information about your location and vehicle</li>
              <li>Be present at the specified location when our service arrives</li>
              <li>Pay for services as per the agreed pricing</li>
              <li>Treat our service personnel with respect</li>
              <li>Not misuse or abuse our services</li>
              <li>Ensure your vehicle is accessible for towing or repair</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">5. Pricing and Payment</h2>
            <p className="leading-relaxed">
              Service charges will be communicated to you before service delivery. Payment is due upon completion 
              of service unless otherwise agreed. We accept cash, digital payments, and other approved payment 
              methods. Prices may vary based on distance, time of day, and service complexity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">6. Cancellation Policy</h2>
            <p className="leading-relaxed">
              You may cancel a service request before our service provider arrives at your location. Cancellation 
              charges may apply if our service provider has already been dispatched. We reserve the right to 
              cancel services in case of safety concerns or inappropriate behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">7. Liability and Insurance</h2>
            <p className="leading-relaxed">
              While we take utmost care in handling your vehicle, TowPoint shall not be liable for any pre-existing 
              damage to your vehicle. We maintain appropriate insurance coverage for our operations. Any damage 
              caused during our service will be assessed and handled according to our insurance policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              TowPoint's liability is limited to the direct cost of the service provided. We are not liable for 
              any indirect, incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">9. Dispute Resolution</h2>
            <p className="leading-relaxed">
              Any disputes arising from these terms or our services shall be resolved through mutual discussion. 
              If resolution cannot be reached, disputes shall be subject to the jurisdiction of courts in 
              Ahmedabad, Gujarat, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact Information</h2>
            <p className="leading-relaxed">
              For any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold">TowPoint</p>
              <p>Email: kphbpatel@gmail.com</p>
              <p>Phone: +91 98251 31493</p>
              <p>Location: Ahmedabad, Gujarat, India</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
              posting on our website. Your continued use of our services constitutes acceptance of modified terms.
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

export default TermsConditions;

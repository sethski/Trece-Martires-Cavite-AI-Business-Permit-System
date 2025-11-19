import { motion } from 'framer-motion';
import { Shield, Eye, Database, Lock, Users, Bell } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { FormData } from '../App';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onPrevious: () => void;
  onSubmit: () => void;
};

export function Consent({ formData, updateFormData, onPrevious, onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.consentAgreed) {
      onSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="shadow-lg border-0 rounded-2xl overflow-hidden">
        <CardContent className="p-8">
          <div className="mb-6">
            <h2 className="text-teal-700">Step 4: Privacy Consent & Full Disclosure</h2>
            <p className="text-gray-600">Please read carefully and agree to the terms before submitting</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Privacy Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-blue-50 rounded-xl p-6 border border-blue-200 max-h-96 overflow-y-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h3 className="text-blue-900">Privacy Consent and Full Disclosure Statement</h3>
              </div>

              <div className="space-y-6 text-gray-700">
                <div className="flex gap-4">
                  <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-2">1. Data Collection</h4>
                    <p>
                      The AI Permit Buddy system collects the following personal data: your full name, email address,
                      contact number, birthdate, business information, government identification documents, business
                      registration documents, selfie photographs, and payment information. This data is collected
                      directly from you through the application form and document upload process.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Eye className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-2">2. Purpose of Data Processing</h4>
                    <p>
                      Your personal data is processed for the following purposes: (a) verification of your identity and
                      business credentials, (b) processing of your business permit application, (c) facial recognition
                      verification to prevent fraud and ensure security, (d) payment processing for application fees,
                      (e) communication regarding your application status, and (f) compliance with legal and regulatory
                      requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-2">3. Data Storage and Security</h4>
                    <p>
                      Your data is securely stored in encrypted databases with restricted access. We implement industry-
                      standard security measures including SSL encryption, secure servers, and regular security audits.
                      Your data will be retained for the duration required by law and regulation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-2">4. Data Sharing</h4>
                    <p>
                      Your personal information may be shared with authorized government agencies, payment processors,
                      and verification services as necessary for processing your application. We do not sell your
                      personal data to third parties.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Bell className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-gray-900 mb-2">5. Your Rights</h4>
                    <p>
                      You have the right to access, correct, or request deletion of your personal data, subject to legal
                      requirements. You may also withdraw consent at any time, though this may affect the processing of
                      your application.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Consent Checkbox */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-teal-50 rounded-xl p-6 border-2 border-teal-300"
            >
              <div className="flex items-start gap-4">
                <Checkbox
                  id="consent"
                  checked={formData.consentAgreed}
                  onCheckedChange={(checked) =>
                    updateFormData({ consentAgreed: checked as boolean })
                  }
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-gray-700 cursor-pointer">
                  This Privacy Consent and Full Disclosure Statement explains in detail how your personal data and
                  uploaded documents are collected, used, processed, stored, protected, and retained by the AI Permit
                  Buddy system. By ticking this checkbox, you acknowledge that you have read, understood, and agreed to
                  the full terms stated above.
                </label>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-between pt-4"
            >
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={onPrevious}
                className="px-8"
              >
                ← Back
              </Button>
              <Button
                type="submit"
                size="lg"
                disabled={!formData.consentAgreed}
                className="bg-green-600 hover:bg-green-700 px-12 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Application ✓
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

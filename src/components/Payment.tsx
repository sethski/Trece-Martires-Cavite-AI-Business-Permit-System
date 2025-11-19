import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { FormData } from '../App';
import alipayLogo from 'figma:asset/24898445378a15056b38781859582880a05c3e18.png';

type Props = {
  formData: FormData;
  onNext: () => void;
  onPrevious: () => void;
};

export function Payment({ formData, onNext, onPrevious }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
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
            <h2 className="text-teal-700">Step 3: Payment</h2>
            <p className="text-gray-600">Complete your payment to process the application</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border-2 border-blue-200"
            >
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  <motion.img
                    src={alipayLogo}
                    alt="Alipay"
                    className="h-20 object-contain"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
                
                <div>
                  <h3 className="text-gray-900 mb-2">Payment Method</h3>
                  <p className="text-gray-600">Fast and secure digital payment via Alipay</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Business Permit Fee:</span>
                    <span className="text-gray-900">₱ 1,500.00</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Processing Fee:</span>
                    <span className="text-gray-900">₱ 100.00</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between items-center">
                    <span className="text-gray-900">Total Amount:</span>
                    <span className="text-teal-700">₱ 1,600.00</span>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <p className="text-teal-800">
                    💳 You will be redirected to Alipay to complete your payment securely.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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
                className="bg-teal-600 hover:bg-teal-700 px-12"
              >
                Continue to Consent →
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import { FileCheck, Building2, User, Wallet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FormData } from '../App';

type Props = {
  formData: FormData;
  onPrevious: () => void;
  onSubmit: () => void;
};

export function ReviewSubmit({ formData, onPrevious, onSubmit }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <FileCheck className="w-6 h-6" />
            Review & Submit
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-8">
            {/* Business Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-blue-900 pb-2 border-b-2 border-blue-100">
                <Building2 className="w-5 h-5" />
                <h3>Business Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 pl-7">
                <div>
                  <p className="text-gray-600">Business Name</p>
                  <p className="text-gray-900">{formData.businessName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Business Type</p>
                  <p className="text-gray-900">{formData.businessType}</p>
                </div>
                <div>
                  <p className="text-gray-600">Business Address</p>
                  <p className="text-gray-900">{formData.businessAddress}</p>
                </div>
                <div>
                  <p className="text-gray-600">Contact Number</p>
                  <p className="text-gray-900">{formData.contactNumber}</p>
                </div>
              </div>
            </motion.div>

            {/* Owner Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-blue-900 pb-2 border-b-2 border-blue-100">
                <User className="w-5 h-5" />
                <h3>Owner Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 pl-7">
                <div>
                  <p className="text-gray-600">Full Name</p>
                  <p className="text-gray-900">{formData.ownerName}</p>
                </div>
                <div>
                  <p className="text-gray-600">Email Address</p>
                  <p className="text-gray-900">{formData.ownerEmail}</p>
                </div>
                <div>
                  <p className="text-gray-600">Residential Address</p>
                  <p className="text-gray-900">{formData.ownerAddress}</p>
                </div>
                <div>
                  <p className="text-gray-600">TIN Number</p>
                  <p className="text-gray-900">{formData.tinNumber}</p>
                </div>
              </div>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 text-blue-900 pb-2 border-b-2 border-blue-100">
                <Wallet className="w-5 h-5" />
                <h3>Payment Method</h3>
              </div>
              <div className="pl-7">
                <p className="text-gray-900">Alipay</p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-between pt-4"
            >
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={onPrevious}
                className="px-8"
              >
                ← Previous
              </Button>
              <Button
                type="button"
                size="lg"
                onClick={onSubmit}
                className="bg-green-600 hover:bg-green-700 px-8"
              >
                Submit Application ✓
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
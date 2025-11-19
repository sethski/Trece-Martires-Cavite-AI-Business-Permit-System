import { motion } from 'framer-motion';
import { Wallet, CreditCard, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { FormData } from '../App';
import alipayLogo from 'figma:asset/24898445378a15056b38781859582880a05c3e18.png';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function PaymentMethod({ formData, updateFormData, onNext, onPrevious }: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Auto-select Alipay since it's the only option
    if (!formData.paymentMethod) {
      updateFormData({ paymentMethod: 'alipay' });
    }
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Wallet className="w-6 h-6" />
            Payment Method
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Label>Payment Method</Label>
            <div className="mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-lg border-2 border-blue-600 bg-blue-50 shadow-lg"
              >
                <div className="flex items-center justify-center gap-6">
                  <img src={alipayLogo} alt="Alipay" className="h-16 object-contain" />
                  <div className="text-center">
                    <h3 className="text-gray-900">Alipay</h3>
                    <p className="text-gray-600">Fast and secure digital payment</p>
                  </div>
                </div>
              </motion.div>
            </div>

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
                ← Previous
              </Button>
              <Button
                type="submit"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8"
              >
                Next Step →
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
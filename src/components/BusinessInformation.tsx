import { motion } from 'framer-motion';
import { Building2, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FormData } from '../App';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
};

export function BusinessInformation({ formData, updateFormData, onNext }: Props) {
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
      <Card className="shadow-xl border-0">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-6 h-6" />
            Business Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Label htmlFor="businessName">Business Name *</Label>
              <Input
                id="businessName"
                placeholder="Enter your business name"
                value={formData.businessName}
                onChange={(e) => updateFormData({ businessName: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Label htmlFor="businessType">Business Type *</Label>
              <Input
                id="businessType"
                placeholder="e.g., Retail, Restaurant, Services"
                value={formData.businessType}
                onChange={(e) => updateFormData({ businessType: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="businessAddress" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Business Address *
              </Label>
              <Input
                id="businessAddress"
                placeholder="Complete business address"
                value={formData.businessAddress}
                onChange={(e) => updateFormData({ businessAddress: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="contactNumber" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Contact Number *
              </Label>
              <Input
                id="contactNumber"
                placeholder="+63 XXX XXX XXXX"
                value={formData.contactNumber}
                onChange={(e) => updateFormData({ contactNumber: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-end pt-4"
            >
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

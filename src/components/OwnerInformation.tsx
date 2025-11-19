import { motion } from 'framer-motion';
import { User, Mail, MapPin, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FormData } from '../App';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function OwnerInformation({ formData, updateFormData, onNext, onPrevious }: Props) {
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
            <User className="w-6 h-6" />
            Owner Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Label htmlFor="ownerName">Full Name *</Label>
              <Input
                id="ownerName"
                placeholder="Enter owner's full name"
                value={formData.ownerName}
                onChange={(e) => updateFormData({ ownerName: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Label htmlFor="ownerAddress" className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Residential Address *
              </Label>
              <Input
                id="ownerAddress"
                placeholder="Complete residential address"
                value={formData.ownerAddress}
                onChange={(e) => updateFormData({ ownerAddress: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Label htmlFor="ownerEmail" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="ownerEmail"
                type="email"
                placeholder="owner@example.com"
                value={formData.ownerEmail}
                onChange={(e) => updateFormData({ ownerEmail: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Label htmlFor="tinNumber" className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                TIN Number *
              </Label>
              <Input
                id="tinNumber"
                placeholder="XXX-XXX-XXX-XXX"
                value={formData.tinNumber}
                onChange={(e) => updateFormData({ tinNumber: e.target.value })}
                required
                className="mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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

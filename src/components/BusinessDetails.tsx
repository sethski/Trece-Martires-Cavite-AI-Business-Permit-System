import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { FormData } from '../App';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
};

export function BusinessDetails({ formData, updateFormData, onNext }: Props) {
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
            <h2 className="text-teal-700">Step 1: Business Details</h2>
            <p className="text-gray-600">Please fill out the information below</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Owner Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-teal-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center">
                  1
                </div>
                <h3 className="text-teal-900">Owner Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="ownerName">Name of Business Owner</Label>
                  <Input
                    id="ownerName"
                    placeholder="Enter full name"
                    value={formData.ownerName}
                    onChange={(e) => updateFormData({ ownerName: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="ownerEmail">Email Address</Label>
                  <Input
                    id="ownerEmail"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.ownerEmail}
                    onChange={(e) => updateFormData({ ownerEmail: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input
                    id="contactNumber"
                    placeholder="+63 912 345 6789"
                    value={formData.contactNumber}
                    onChange={(e) => updateFormData({ contactNumber: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="birthdate">Birthdate</Label>
                  <Input
                    id="birthdate"
                    type="date"
                    value={formData.birthdate}
                    onChange={(e) => updateFormData({ birthdate: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
              </div>
            </motion.div>

            {/* Business Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  2
                </div>
                <h3 className="text-blue-900">Business Details</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="transactionType">Transaction Type</Label>
                  <Input
                    id="transactionType"
                    value={formData.transactionType}
                    onChange={(e) => updateFormData({ transactionType: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfApplication">Date of Application</Label>
                  <Input
                    id="dateOfApplication"
                    value={formData.dateOfApplication}
                    onChange={(e) => updateFormData({ dateOfApplication: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="sssNumber">SSS No.</Label>
                  <Input
                    id="sssNumber"
                    placeholder="XX-XXXXXXX-X"
                    value={formData.sssNumber}
                    onChange={(e) => updateFormData({ sssNumber: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="tinNumber">Tax Identification No. (TIN)</Label>
                  <Input
                    id="tinNumber"
                    placeholder="XXX-XXX-XXX-XXX"
                    value={formData.tinNumber}
                    onChange={(e) => updateFormData({ tinNumber: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="dtiNumber">DTI / SEC / CDC Registration No.</Label>
                  <Input
                    id="dtiNumber"
                    placeholder="Registration number"
                    value={formData.dtiNumber}
                    onChange={(e) => updateFormData({ dtiNumber: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="dateOfIssue">Date of Issue</Label>
                  <Input
                    id="dateOfIssue"
                    type="date"
                    value={formData.dateOfIssue}
                    onChange={(e) => updateFormData({ dateOfIssue: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
              </div>
            </motion.div>

            {/* Business Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-purple-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center">
                  3
                </div>
                <h3 className="text-purple-900">Business Address</h3>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="blockNumber">Block Number</Label>
                  <Input
                    id="blockNumber"
                    placeholder="Block"
                    value={formData.blockNumber}
                    onChange={(e) => updateFormData({ blockNumber: e.target.value })}
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="lotNumber">Lot Number</Label>
                  <Input
                    id="lotNumber"
                    placeholder="Lot"
                    value={formData.lotNumber}
                    onChange={(e) => updateFormData({ lotNumber: e.target.value })}
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="street">Street / Road</Label>
                  <Input
                    id="street"
                    placeholder="Street name"
                    value={formData.street}
                    onChange={(e) => updateFormData({ street: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div className="col-span-3">
                  <Label htmlFor="subdivision">Subdivision</Label>
                  <Input
                    id="subdivision"
                    placeholder="Subdivision name"
                    value={formData.subdivision}
                    onChange={(e) => updateFormData({ subdivision: e.target.value })}
                    className="mt-2 bg-white"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="barangay">Barangay</Label>
                  <Input
                    id="barangay"
                    placeholder="Barangay name"
                    value={formData.barangay}
                    onChange={(e) => updateFormData({ barangay: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">Zip Code</Label>
                  <Input
                    id="zipCode"
                    placeholder="XXXX"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData({ zipCode: e.target.value })}
                    required
                    className="mt-2 bg-white"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-end pt-4"
            >
              <Button
                type="submit"
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-12"
              >
                Continue to Document Upload →
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

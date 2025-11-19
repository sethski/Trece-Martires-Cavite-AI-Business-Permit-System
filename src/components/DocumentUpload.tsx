import { motion } from 'framer-motion';
import { Upload, FileText, CreditCard, Camera } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { FormData } from '../App';
import { useState } from 'react';

type Props = {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
  onPrevious: () => void;
};

export function DocumentUpload({ formData, updateFormData, onNext, onPrevious }: Props) {
  const [businessDocName, setBusinessDocName] = useState('');
  const [idDocName, setIdDocName] = useState('');
  const [selfieDocName, setSelfieDocName] = useState('');

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'businessDocument' | 'idDocument' | 'selfieDocument'
  ) => {
    const file = e.target.files?.[0] || null;
    updateFormData({ [field]: file });
    
    if (field === 'businessDocument') setBusinessDocName(file?.name || '');
    if (field === 'idDocument') setIdDocName(file?.name || '');
    if (field === 'selfieDocument') setSelfieDocName(file?.name || '');
  };

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
            <h2 className="text-teal-700">Step 2: Upload Documents and Verify Identity</h2>
            <p className="text-gray-600">Upload required documents and verify your identity with a selfie</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Required Business Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-teal-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-teal-900">Required Business Documents</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Select Document Type *</Label>
                  <select className="w-full mt-2 p-2 border rounded-lg bg-white">
                    <option>Choose one...</option>
                    <option>DTI Registration</option>
                    <option>SEC Certificate</option>
                    <option>Business Plan</option>
                  </select>
                </div>

                <div>
                  <Label>Upload Document * (JPG, PNG, PDF)</Label>
                  <div className="mt-2 border-2 border-dashed border-teal-300 rounded-lg p-8 bg-white hover:bg-teal-50 transition-colors cursor-pointer">
                    <label htmlFor="businessDoc" className="cursor-pointer flex flex-col items-center gap-2">
                      <Upload className="w-10 h-10 text-teal-600" />
                      <p className="text-teal-700">
                        {businessDocName || 'Click to upload business document'}
                      </p>
                      <input
                        id="businessDoc"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={(e) => handleFileChange(e, 'businessDocument')}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Required Identification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h3 className="text-blue-900">Required Identification</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label>Select ID Type *</Label>
                  <select className="w-full mt-2 p-2 border rounded-lg bg-white">
                    <option>Choose one...</option>
                    <option>Government ID</option>
                    <option>Driver's License</option>
                    <option>Passport</option>
                    <option>PhilHealth ID</option>
                  </select>
                </div>

                <div>
                  <Label>Upload ID * (JPG, PNG)</Label>
                  <div className="mt-2 border-2 border-dashed border-blue-300 rounded-lg p-8 bg-white hover:bg-blue-50 transition-colors cursor-pointer">
                    <label htmlFor="idDoc" className="cursor-pointer flex flex-col items-center gap-2">
                      <CreditCard className="w-10 h-10 text-blue-600" />
                      <p className="text-blue-700">
                        {idDocName || 'Click to upload ID document'}
                      </p>
                      <input
                        id="idDoc"
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={(e) => handleFileChange(e, 'idDocument')}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Selfie Verification */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="text-yellow-900">Selfie Verification</h3>
              </div>
              
              <div>
                <Label>Upload Selfie (JPG, PNG - Must be clear and well-lit)</Label>
                <div className="mt-2 border-2 border-dashed border-yellow-400 rounded-lg p-8 bg-white hover:bg-yellow-50 transition-colors cursor-pointer">
                  <label htmlFor="selfieDoc" className="cursor-pointer flex flex-col items-center gap-2">
                    <Camera className="w-10 h-10 text-yellow-600" />
                    <p className="text-yellow-700">
                      {selfieDocName || 'Click to upload selfie'}
                    </p>
                    <input
                      id="selfieDoc"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange(e, 'selfieDocument')}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </motion.div>

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
                ← Back
              </Button>
              <Button
                type="submit"
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 px-12"
              >
                Continue to Payment →
              </Button>
            </motion.div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}

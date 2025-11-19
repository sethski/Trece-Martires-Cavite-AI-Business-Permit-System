import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { BusinessDetails } from './components/BusinessDetails';
import { DocumentUpload } from './components/DocumentUpload';
import { AIDocVerifier } from './components/AIDocVerifier';
import { Payment } from './components/Payment';
import { Consent } from './components/Consent';
import { SuccessPage } from './components/SuccessPage';
import logoTrece from './assets/5022dfc96c524adfc95cf5c9ef45032ef0188943.png';

export type FormData = {
  // Owner Information
  ownerName: string;
  ownerEmail: string;
  contactNumber: string;
  birthdate: string;
  // Business Details
  transactionType: string;
  dateOfApplication: string;
  sssNumber: string;
  tinNumber: string;
  dtiNumber: string;
  dateOfIssue: string;
  // Business Address
  blockNumber: string;
  lotNumber: string;
  street: string;
  subdivision: string;
  barangay: string;
  zipCode: string;
  // Documents
  businessDocument: File | null;
  idDocument: File | null;
  selfieDocument: File | null;
  // Consent
  consentAgreed: boolean;
};

const steps = [
  { number: 1, title: 'Business Details' },
  { number: 2, title: 'Document Upload' },
  { number: 3, title: 'Payment' },
  { number: 4, title: 'Consent' },
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');
  const [formData, setFormData] = useState<FormData>({
    ownerName: '',
    ownerEmail: '',
    contactNumber: '',
    birthdate: '',
    transactionType: 'NEW',
    dateOfApplication: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
    sssNumber: '',
    tinNumber: '',
    dtiNumber: '',
    dateOfIssue: '',
    blockNumber: '',
    lotNumber: '',
    street: '',
    subdivision: '',
    barangay: '',
    zipCode: '',
    businessDocument: null,
    idDocument: null,
    selfieDocument: null,
    consentAgreed: false,
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleSubmit = () => {
    const appNum = `BP-${Date.now().toString().slice(-8)}`;
    setApplicationNumber(appNum);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SuccessPage applicationNumber={applicationNumber} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50 flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white shadow-md border-b-4 border-teal-500 rounded-b-2xl mx-auto mt-4 w-full max-w-6xl"
      >
        <div className="px-6 py-6">
          <div className="flex items-center gap-4 justify-center">
            <img src={logoTrece} alt="Trece Martires Logo" className="w-20 h-20 object-contain" />
            <div className="text-center">
              <h1 className="text-teal-700">Trece Martires Cavite AI Business Permit System</h1>
              <p className="text-gray-600">Business Permit Application Portal</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Step Indicators */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 bg-white rounded-2xl shadow-md p-6"
        >
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <motion.button
                  onClick={() => handleStepClick(step.number)}
                  className="flex flex-col items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Step Circle */}
                  <motion.div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep > step.number
                        ? 'bg-teal-600 text-white shadow-lg'
                        : currentStep === step.number
                        ? 'bg-teal-600 text-white shadow-xl shadow-teal-300'
                        : 'bg-gray-300 text-gray-500'
                    }`}
                    animate={
                      currentStep === step.number
                        ? {
                            scale: [1, 1.08, 1],
                            transition: { duration: 0.6, repeat: Infinity },
                          }
                        : {}
                    }
                  >
                    {currentStep > step.number ? (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 500 }}
                      >
                        <Check className="w-7 h-7" />
                      </motion.div>
                    ) : (
                      <span className="text-xl">{step.number}</span>
                    )}
                  </motion.div>

                  {/* Step Title */}
                  <span
                    className={`text-sm transition-colors ${
                      currentStep >= step.number
                        ? 'text-teal-700'
                        : 'text-gray-400'
                    }`}
                  >
                    {step.title}
                  </span>
                </motion.button>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-1 bg-gray-300 mx-4 relative">
                    <motion.div
                      className="h-full bg-teal-600"
                      initial={{ width: '0%' }}
                      animate={{
                        width: currentStep > step.number ? '100%' : '0%',
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <BusinessDetails
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
              />
            )}
            {currentStep === 2 && (
              <DocumentUpload
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
            {currentStep === 3 && (
              <Payment
                formData={formData}
                onNext={handleNext}
                onPrevious={handlePrevious}
              />
            )}
            {currentStep === 4 && (
              <Consent
                formData={formData}
                updateFormData={updateFormData}
                onPrevious={handlePrevious}
                onSubmit={handleSubmit}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
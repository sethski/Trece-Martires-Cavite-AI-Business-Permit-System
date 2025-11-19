import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, FileCheck, Shield, CheckCircle2, XCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { FormData } from '../App';

type Props = {
  formData: FormData;
  onNext: () => void;
  onPrevious: () => void;
  onVerificationComplete: (score: number) => void;
};

type VerificationStatus = 'idle' | 'analyzing' | 'complete';
type DocumentStatus = 'pending' | 'analyzing' | 'verified' | 'failed';

export function AIDocVerifier({ formData, onNext, onPrevious, onVerificationComplete }: Props) {
  const [status, setStatus] = useState<VerificationStatus>('idle');
  const [businessDocStatus, setBusinessDocStatus] = useState<DocumentStatus>('pending');
  const [idDocStatus, setIdDocStatus] = useState<DocumentStatus>('pending');
  const [selfieStatus, setSelfieStatus] = useState<DocumentStatus>('pending');
  const [faceMatchScore, setFaceMatchScore] = useState(0);
  const [documentQualityScore, setDocumentQualityScore] = useState(0);
  const [overallScore, setOverallScore] = useState(0);

  const startVerification = () => {
    setStatus('analyzing');
    
    // Simulate business document verification
    setTimeout(() => {
      setBusinessDocStatus('analyzing');
    }, 500);

    setTimeout(() => {
      const businessScore = Math.random() > 0.2 ? 'verified' : 'failed';
      setBusinessDocStatus(businessScore);
    }, 2500);

    // Simulate ID verification
    setTimeout(() => {
      setIdDocStatus('analyzing');
    }, 3000);

    setTimeout(() => {
      const idScore = Math.random() > 0.15 ? 'verified' : 'failed';
      setIdDocStatus(idScore);
    }, 5000);

    // Simulate selfie/face match verification
    setTimeout(() => {
      setSelfieStatus('analyzing');
    }, 5500);

    setTimeout(() => {
      const selfieScore = Math.random() > 0.2 ? 'verified' : 'failed';
      setSelfieStatus(selfieScore);
      
      // Calculate scores
      const faceMatch = Math.floor(Math.random() * 20) + 80; // 80-100%
      const docQuality = Math.floor(Math.random() * 15) + 85; // 85-100%
      const overall = Math.floor(Math.random() * 100) + 1; // 1-100
      
      setFaceMatchScore(faceMatch);
      setDocumentQualityScore(docQuality);
      setOverallScore(overall);
      
      setStatus('complete');
      onVerificationComplete(overall);
    }, 7500);
  };

  useEffect(() => {
    // Auto-start verification when component mounts
    startVerification();
  }, []);

  const getStatusIcon = (docStatus: DocumentStatus) => {
    switch (docStatus) {
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
      case 'analyzing':
        return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'verified':
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusText = (docStatus: DocumentStatus) => {
    switch (docStatus) {
      case 'pending':
        return 'Waiting...';
      case 'analyzing':
        return 'Analyzing...';
      case 'verified':
        return 'Verified';
      case 'failed':
        return 'Review Required';
    }
  };

  const getStatusColor = (docStatus: DocumentStatus) => {
    switch (docStatus) {
      case 'pending':
        return 'text-gray-600';
      case 'analyzing':
        return 'text-blue-600';
      case 'verified':
        return 'text-green-600';
      case 'failed':
        return 'text-red-600';
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
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-teal-700">AI Document Verification</h2>
            </div>
            <p className="text-gray-600">Our AI is analyzing your documents for authenticity and accuracy</p>
          </div>

          {/* Verification Progress */}
          <div className="space-y-4 mb-8">
            {/* Business Document */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-teal-50 to-white rounded-lg border border-teal-200"
            >
              <div className="flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-teal-600" />
                <div>
                  <p className="font-medium text-gray-800">Business Document</p>
                  <p className={`text-sm ${getStatusColor(businessDocStatus)}`}>
                    {getStatusText(businessDocStatus)}
                  </p>
                </div>
              </div>
              {getStatusIcon(businessDocStatus)}
            </motion.div>

            {/* ID Document */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-200"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-800">ID Verification</p>
                  <p className={`text-sm ${getStatusColor(idDocStatus)}`}>
                    {getStatusText(idDocStatus)}
                  </p>
                </div>
              </div>
              {getStatusIcon(idDocStatus)}
            </motion.div>

            {/* Selfie/Face Match */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-white rounded-lg border border-purple-200"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-800">Face Match (Selfie vs ID)</p>
                  <p className={`text-sm ${getStatusColor(selfieStatus)}`}>
                    {getStatusText(selfieStatus)}
                  </p>
                </div>
              </div>
              {getStatusIcon(selfieStatus)}
            </motion.div>
          </div>

          {/* AI Analysis Results */}
          {status === 'complete' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <h3 className="text-indigo-900 font-semibold">AI Analysis Complete</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Face Match</p>
                  <p className="text-2xl font-bold text-indigo-600">{faceMatchScore}%</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Doc Quality</p>
                  <p className="text-2xl font-bold text-purple-600">{documentQualityScore}%</p>
                </div>
                <div className="text-center p-3 bg-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Overall Score</p>
                  <p className={`text-2xl font-bold ${overallScore >= 80 ? 'text-green-600' : 'text-orange-600'}`}>
                    {overallScore}%
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded-lg">
                <p className="text-sm text-gray-700">
                  {overallScore >= 80 
                    ? '✅ Documents passed AI verification. Your application is likely to be approved automatically.'
                    : '⚠️ Some documents require manual review. Your application will be processed by our staff.'}
                </p>
              </div>
            </motion.div>
          )}

          {/* Progress Indicator */}
          {status === 'analyzing' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <Loader2 className="w-5 h-5 text-teal-600 animate-spin" />
                <p className="text-gray-600">Analyzing documents...</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-teal-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 7 }}
                />
              </div>
            </motion.div>
          )}

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
              disabled={status === 'analyzing'}
            >
              ← Back
            </Button>
            <Button
              type="button"
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 px-12"
              onClick={onNext}
              disabled={status !== 'complete'}
            >
              {status === 'complete' ? 'Continue to Payment →' : 'Please wait...'}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

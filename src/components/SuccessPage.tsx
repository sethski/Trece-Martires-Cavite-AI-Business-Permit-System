import { motion } from 'framer-motion';
import { CheckCircle2, Mail, MapPin, Download } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import logoTrece from '../assets/5022dfc96c524adfc95cf5c9ef45032ef0188943.png';
import qrCodeImage from '../assets/582453764_1196817289177115_9128746263049029609_n.png';

type Props = {
  applicationNumber: string;
};

export function SuccessPage({ applicationNumber }: Props) {
  const handleDownload = () => {
    // Open the PDF file - use relative path for GitHub Pages
    const pdfPath = import.meta.env.BASE_URL + 'Final-MAYORS-PERMIT.pdf-1.pdf';
    window.open(pdfPath, '_blank');
  };

  const handleQRClick = () => {
    // Also open PDF when clicking QR code
    const pdfPath = import.meta.env.BASE_URL + 'Final-MAYORS-PERMIT.pdf-1.pdf';
    window.open(pdfPath, '_blank');
  };

  // Approval Page
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="shadow-2xl border-0 overflow-hidden">
          {/* Success Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="flex justify-center mb-4"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
            </motion.div>
            <h1 className="text-white mb-2">Business Permit Approved</h1>
            <p className="text-green-100">Application Successfully Submitted</p>
          </motion.div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <p className="text-gray-700 mb-4">
                Your application for a Business Permit has been approved by the{' '}
                <span>LGU Trece Martires City, Cavite – Business Permits and Licensing Office</span>.
              </p>
            </motion.div>

            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg text-center"
            >
              <p className="text-gray-700 mb-4">📲 Please scan the QR code below or click to access your e-Permit PDF.</p>
              <div className="flex justify-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  onClick={handleQRClick}
                  className="bg-white p-4 rounded-lg shadow-lg cursor-pointer"
                >
                  <img
                    src={qrCodeImage}
                    alt="QR Code - Click to view permit PDF"
                    className="w-48 h-48 object-contain"
                  />
                </motion.div>
              </div>
              <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
                <p className="text-gray-600">Application Number</p>
                <p className="text-blue-900">{applicationNumber}</p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="border-t pt-6 space-y-3"
            >
              <p className="text-gray-700">For further assistance:</p>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p>Email</p>
                  <a href="mailto:businesslicensingdept@tmcc.com" className="text-blue-600 hover:underline">
                    businesslicensingdept@tmcc.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <div>
                  <p>Visit</p>
                  <p className="text-gray-900">
                    Business Licensing Department<br />
                    Trece Martires City, Cavite 4109
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                View Permit PDF
              </Button>
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
                className="flex-1"
                size="lg"
              >
                New Application
              </Button>
            </motion.div>
          </div>

          {/* Footer Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="bg-gray-50 p-6 flex justify-center items-center gap-4 border-t"
          >
            <img src={logoTrece} alt="Trece Martires Logo" className="w-12 h-12 object-contain" />
            <div className="text-center">
              <p className="text-gray-600">LGU Trece Martires City, Cavite</p>
              <p className="text-gray-500">Business Permits and Licensing Office</p>
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
}

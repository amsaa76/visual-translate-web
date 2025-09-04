import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WhitepaperDocument } from './WhitepaperDocument';
import { Download, FileText, X } from 'lucide-react';

export const WhitepaperViewer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadPDF = () => {
    // Create a new window with the whitepaper content for printing
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Dolphin Solana Whitepaper</title>
          <meta charset="utf-8">
          <style>
            @media print {
              body { margin: 0; }
              .no-print { display: none !important; }
            }
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
          </style>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
          <div id="whitepaper-content"></div>
          <script>
            // This will be filled by React content
            window.addEventListener('load', () => {
              window.print();
            });
          </script>
        </body>
        </html>
      `);
      
      // Get the whitepaper content
      const whitepaperElement = document.getElementById('whitepaper-content');
      if (whitepaperElement) {
        printWindow.document.getElementById('whitepaper-content').innerHTML = whitepaperElement.innerHTML;
      }
      
      printWindow.document.close();
    }
  };

  const handleViewWhitepaper = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Whitepaper Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center gap-2"
          onClick={handleViewWhitepaper}
        >
          <FileText className="w-5 h-5" />
          View Whitepaper
        </Button>
        
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center gap-2"
          onClick={handleDownloadPDF}
        >
          <Download className="w-5 h-5" />
          Download PDF
        </Button>
      </div>

      {/* Modal for Whitepaper Viewer */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">Dolphin Solana Whitepaper</h2>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-1"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsModalOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* Whitepaper Content */}
            <div className="flex-1 overflow-auto">
              <div id="whitepaper-content">
                <WhitepaperDocument />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
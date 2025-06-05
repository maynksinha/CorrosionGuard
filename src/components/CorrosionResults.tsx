import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, Info, RefreshCw, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface CorrosionResultsProps {
  result: {
    isCorroded: boolean;
    confidence: number;
    severity: string;
    recommendations: string[];
    timestamp: string;
    rawAnalysis?: string;
  };
  image: string | null;
  onReset: () => void;
}

const CorrosionResults: React.FC<CorrosionResultsProps> = ({ result, image, onReset }) => {
  const { isCorroded, confidence, severity, recommendations, timestamp, rawAnalysis } = result;
  const [showRawAnalysis, setShowRawAnalysis] = useState(false);
  
  const formattedDate = new Date(timestamp).toLocaleString();
  
  const getSeverityColor = () => {
    if (!isCorroded) return 'bg-green-100 text-green-800';
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-amber-100 text-amber-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getStatusIcon = () => {
    if (!isCorroded) {
      return <CheckCircle className="h-8 w-8 text-green-500" />;
    } else if (severity === 'High') {
      return <AlertTriangle className="h-8 w-8 text-red-500" />;
    } else {
      return <Info className="h-8 w-8 text-amber-500" />;
    }
  };

  const toggleRawAnalysis = () => {
    setShowRawAnalysis(!showRawAnalysis);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white border rounded-lg shadow-sm overflow-hidden"
    >
      <div className={`p-4 ${isCorroded ? 'bg-rust-primary' : 'bg-green-500'} text-white`}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Analysis Results</h3>
          <span className="text-sm opacity-80">{formattedDate}</span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-4">
          {getStatusIcon()}
          <div className="ml-3">
            <h4 className="font-bold text-lg text-steel-dark">
              {isCorroded ? 'Corrosion Detected' : 'No Corrosion Detected'}
            </h4>
            <p className="text-neutral-dark">
              Confidence: {confidence}%
            </p>
          </div>
        </div>
        
        {isCorroded && (
          <>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-sm font-medium text-steel-dark">Severity:</span>
                <span className={`ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor()}`}>
                  {severity}
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    severity === 'High' ? 'bg-red-500' : 
                    severity === 'Medium' ? 'bg-amber-500' : 
                    'bg-blue-500'
                  }`}
                  style={{ width: `${severity === 'High' ? 90 : severity === 'Medium' ? 60 : 30}%` }}
                ></div>
              </div>
            </div>
            
            <div className="mb-4">
              <h5 className="font-medium text-steel-dark mb-2">Recommendations:</h5>
              <ul className="space-y-2 text-sm text-neutral-dark">
                {recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-rust-primary mr-2">•</span>
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        
        {rawAnalysis && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button
              onClick={toggleRawAnalysis}
              className="flex items-center text-steel-primary hover:text-rust-primary transition-colors w-full justify-between"
            >
              <span className="flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                {showRawAnalysis ? 'Hide Full Analysis' : 'Show Full Analysis'}
              </span>
              {showRawAnalysis ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            {showRawAnalysis && (
              <div className="mt-3 p-3 bg-gray-50 rounded-md text-sm text-steel-dark whitespace-pre-wrap">
                {rawAnalysis}
              </div>
            )}
          </div>
        )}
        
        <button 
          onClick={onReset}
          className="mt-4 flex items-center text-steel-primary hover:text-rust-primary transition-colors"
        >
          <RefreshCw className="h-4 w-4 mr-1" />
          Analyze a new image
        </button>
      </div>
    </motion.div>
  );
};

export default CorrosionResults;
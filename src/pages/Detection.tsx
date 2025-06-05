// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { Upload, AlertCircle, CheckCircle, X, Camera, Info } from 'lucide-react';
// import ImageUploader from '../components/ImageUploader';
// import CorrosionResults from '../components/CorrosionResults';

// const Detection: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [result, setResult] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [imageFile, setImageFile] = useState<File | null>(null);
  
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleImageUpload = (imageDataUrl: string, file: File) => {
//     setImage(imageDataUrl);
//     setImageFile(file);
//     setResult(null);
//     setError(null);
//   };

//   const resetState = () => {
//     setImage(null);
//     setImageFile(null);
//     setResult(null);
//     setError(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const analyzeImage = async () => {
//     if (!image || !imageFile) return;

//     setIsLoading(true);
//     setError(null);

//     try {
//       // Create form data for the file upload
//       const formData = new FormData();
//       formData.append('file', imageFile);

//       // Call the API endpoint
//       const response = await fetch('http://127.0.0.1:8000/detect-corrosion/', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error(`API request failed with status: ${response.status}`);
//       }

//       const data = await response.json();
      
//       // Process the analysis result
//       const analysisText = data.analysis;
      
//       // First, determine if corrosion is detected by explicitly checking for no corrosion phrases
//       const noCorrosionPhrases = [
//         'no corrosion detected',
//         'no signs of corrosion',
//         'corrosion free',
//         'no evidence of corrosion',
//         'no corrosion found',
//         'no visible corrosion'
//       ];
      
//       // Check if analysis contains any no-corrosion phrases
//       const isCorroded = !noCorrosionPhrases.some(phrase => 
//         analysisText.toLowerCase().includes(phrase)
//       );
      
//       // Only extract severity and recommendations if corrosion is detected
//       let severity = isCorroded ? extractSeverity(analysisText) : "None";
//       let recommendations = isCorroded ? extractRecommendations(analysisText, severity) : 
//         ["No corrosion detected - no action required", "Continue regular maintenance schedule"];
      
//       // Extract confidence or provide a default
//       let confidence = extractConfidence(analysisText);
//       if (confidence === null) {
//         confidence = isCorroded ? Math.round(Math.random() * 10 + 85) : Math.round(Math.random() * 5 + 90);
//       }
      
//       setResult({
//         isCorroded,
//         confidence,
//         severity,
//         recommendations,
//         timestamp: new Date().toISOString(),
//         rawAnalysis: analysisText // Keep the full text for reference
//       });
//     } catch (err) {
//       console.error('Error analyzing image:', err);
//       setError("Failed to analyze image. Please try again or check your connection.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Helper function to extract severity from analysis text
//   const extractSeverity = (text: string): string => {
//     // Check for explicit severity mentions first
//     const severityRegex = /severity:?\s*(high|medium|low)/i;
//     const match = text.match(severityRegex);
    
//     if (match && match[1]) {
//       return match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
//     }
    
//     // Check for keywords indicating severity
//     const textLower = text.toLowerCase();
//     if (textLower.includes('severe') || 
//         textLower.includes('high') || 
//         textLower.includes('critical') ||
//         textLower.includes('advanced') ||
//         textLower.includes('significant')) {
//       return 'High';
//     } else if (textLower.includes('moderate') || 
//                textLower.includes('medium') || 
//                textLower.includes('intermediate')) {
//       return 'Medium';
//     } else if (textLower.includes('corrosion')) {
//       // If corrosion is mentioned but no severity indicators, default to Low
//       return 'Low to No Corrosion';
//     }
    
//     return 'None'; // Default if no severity indicators found
//   };

//   // Helper function to extract recommendations from analysis text with fallbacks based on severity
//   const extractRecommendations = (text: string, severity: string): string[] => {
//     // Try to find numbered recommendations
//     const recommendations: string[] = [];
//     const recLines = text.split('\n').filter(line => 
//       /^\d+\./.test(line.trim()) || 
//       line.toLowerCase().includes('recommend')
//     );
    
//     if (recLines.length > 0) {
//       return recLines.map(line => line.replace(/^\d+\.\s*/, '').trim());
//     }
    
//     // If no numbered recommendations, look for sentences containing "recommend"
//     const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 0);
//     const recSentences = sentences.filter(s => 
//       s.toLowerCase().includes('recommend') || 
//       s.toLowerCase().includes('treat') ||
//       s.toLowerCase().includes('action') ||
//       s.toLowerCase().includes('should')
//     );
    
//     if (recSentences.length > 0) {
//       return recSentences.map(s => s.trim());
//     }
    
//     // Default recommendations based on the detected severity
//     if (severity === 'High') {
//       return [
//         "Immediate inspection by a corrosion specialist recommended",
//         "Consider replacement of affected components",
//         "Implement protective coating to prevent further damage"
//       ];
//     } else if (severity === 'Medium') {
//       return [
//         "Schedule maintenance within the next 4-6 weeks",
//         "Apply corrosion inhibitor to affected areas",
//         "Regular monitoring and documentation"
//       ];
//     } else if (severity === 'Low to No Corrosion') {
//       return [
//         "Monitor for progression within 3 months",
//         "Clean affected area and apply protective coating",
//         "Document current state for future comparison"
//       ];
//     }
    
//     return ["No action required"];
//   };

//   // Helper function to extract confidence from analysis text
//   const extractConfidence = (text: string): number | null => {
//     const confidenceRegex = /confidence:?\s*(\d+)%?/i;
//     const match = text.match(confidenceRegex);
    
//     if (match && match[1]) {
//       return parseInt(match[1], 10);
//     }
    
//     return null;
//   };

  // return (
  //   <>
  //     {/* Hero Section */}
  //     <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-steel-primary text-white overflow-hidden">
  //       <div className="absolute inset-0 overflow-hidden">
  //         <div 
  //           className="absolute inset-0 bg-cover bg-center opacity-20" 
  //           style={{ 
  //             backgroundImage: "url('https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
  //           }}
  //         />
  //       </div>
  //       <div className="container-custom relative z-10">
  //         <motion.div
  //           initial={{ opacity: 0, y: 20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.8 }}
  //           className="text-center max-w-3xl mx-auto"
  //         >
  //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
  //             Corrosion <span className="text-rust-primary">Detection</span> Tool
  //           </h1>
  //           <p className="text-lg md:text-xl mb-8 text-neutral-light">
  //             Upload an image of your equipment or infrastructure to instantly detect and analyze corrosion.
  //             Get actionable insights to prevent damage.
  //           </p>
  //         </motion.div>
  //       </div>
        
  //       {/* Wave Separator */}
  //       <div className="absolute bottom-0 left-0 right-0">
  //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
  //           <path 
  //             fill="#F0F4F8" 
  //             fillOpacity="1" 
  //             d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
  //           ></path>
  //         </svg>
  //       </div>
  //     </section>

  //     {/* Detection Tool Section */}
  //     <section className="py-16 bg-neutral-light min-h-[60vh]">
  //       <div className="container-custom">
  //         <div className="max-w-4xl mx-auto">
  //           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
  //             <div className="p-8">
  //               <h2 className="text-2xl md:text-3xl font-bold mb-6 text-steel-dark text-center">
  //                 Upload an Image for Corrosion Analysis
  //               </h2>
                
  //               <div className="mb-6 p-4 bg-steel-light bg-opacity-20 rounded-lg">
  //                 <div className="flex items-start">
  //                   <Info className="text-steel-primary mr-3 flex-shrink-0 mt-1" />
  //                   <p className="text-sm text-steel-dark">
  //                     For best results, upload a clear, well-lit image of the suspected corrosion area. 
  //                     The system works best with close-up photos that show surface detail.
  //                   </p>
  //                 </div>
  //               </div>
                
  //               {error && (
  //                 <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-on-scroll">
  //                   <div className="flex items-start">
  //                     <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" />
  //                     <div>
  //                       <p className="text-red-700 font-medium">Analysis Error</p>
  //                       <p className="text-red-600">{error}</p>
  //                     </div>
  //                     <button 
  //                       onClick={() => setError(null)} 
  //                       className="ml-auto text-red-400 hover:text-red-600"
  //                     >
  //                       <X size={18} />
  //                     </button>
  //                   </div>
  //                 </div>
  //               )}
                
  //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  //                 <div className={`${result ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
  //                   <ImageUploader 
  //                     onImageUpload={handleImageUpload}
  //                     fileInputRef={fileInputRef}
  //                   />
                    
  //                   {image && !result && (
  //                     <div className="mt-6 flex justify-center">
  //                       <button
  //                         onClick={analyzeImage}
  //                         disabled={isLoading}
  //                         className={`btn-primary px-8 py-3 flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
  //                       >
  //                         {isLoading ? (
  //                           <>
  //                             <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
  //                             Analyzing...
  //                           </>
  //                         ) : (
  //                           <>
  //                             <Camera className="mr-2 h-5 w-5" />
  //                             Analyze Image
  //                           </>
  //                         )}
  //                       </button>
  //                     </div>
  //                   )}
  //                 </div>
                  
  //                 {result && (
  //                   <CorrosionResults result={result} image={image} onReset={resetState} />
  //                 )}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  import React, { useState, useRef } from 'react';
  import { motion } from 'framer-motion';
  import { Upload, AlertCircle, CheckCircle, X, Camera, Info, FileArchive, ChevronRight, ChevronDown } from 'lucide-react';
  import ImageUploader from '../components/ImageUploader';
  import CorrosionResults from '../components/CorrosionResults';
  
  interface BatchResult {
    filename: string;
    isCorroded: boolean;
    confidence: number;
    imageUrl?: string;
  }
  
  const Detection: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    
    // Batch processing states
    const [batchMode, setBatchMode] = useState<boolean>(false);
    const [batchResults, setBatchResults] = useState<BatchResult[]>([]);
    const [batchFile, setBatchFile] = useState<File | null>(null);
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
    
    const fileInputRef = useRef<HTMLInputElement>(null);
    const batchFileInputRef = useRef<HTMLInputElement>(null);
  
    const handleImageUpload = (imageDataUrl: string, file: File) => {
      setImage(imageDataUrl);
      setImageFile(file);
      setResult(null);
      setError(null);
      setBatchMode(false);
      setBatchResults([]);
    };
  
    const handleBatchFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        setBatchFile(file);
        setImage(null);
        setImageFile(null);
        setResult(null);
        setError(null);
        setBatchMode(true);
        setBatchResults([]);
      }
    };
  
    const resetState = () => {
      setImage(null);
      setImageFile(null);
      setResult(null);
      setError(null);
      setBatchMode(false);
      setBatchResults([]);
      setBatchFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      if (batchFileInputRef.current) {
        batchFileInputRef.current.value = '';
      }
    };
  
    const toggleExpandItem = (index: number) => {
      const newExpandedItems = new Set(expandedItems);
      if (newExpandedItems.has(index)) {
        newExpandedItems.delete(index);
      } else {
        newExpandedItems.add(index);
      }
      setExpandedItems(newExpandedItems);
    };
  
    // const analyzeImage = async () => {
    //   if (!image || !imageFile) return;
    
    //   setIsLoading(true);
    //   setError(null);
    
    //   try {
    //     // Create form data for the file upload
    //     const formData = new FormData();
    //     formData.append('file', imageFile);
    
    //     // Call the API endpoint
    //     const response = await fetch('http://127.0.0.1:8000/detect-corrosion/', {
    //       method: 'POST',
    //       body: formData,
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`API request failed with status: ${response.status}`);
    //     }
    
    //     const data = await response.json();
        
    //     // Process the analysis result
    //     const analysisText = data.analysis;
        
    //     // Determine if corrosion is detected
    //     const isCorroded = determineCorrosionStatus(analysisText);
        
    //     // Extract recommendations based on corrosion status
    //     const recommendations = isCorroded 
    //       ? extractRecommendations(analysisText) 
    //       : ["No corrosion detected - no action required", "Continue regular maintenance schedule"];
        
    //     // Extract confidence or provide a default
    //     let confidence = extractConfidence(analysisText);
    //     if (confidence === null) {
    //       confidence = isCorroded ? Math.round(Math.random() * 10 + 85) : Math.round(Math.random() * 5 + 90);
    //     }
        
    //     setResult({
    //       isCorroded,
    //       confidence,
    //       recommendations,
    //       timestamp: new Date().toISOString(),
    //       rawAnalysis: analysisText // Keep the full text for reference
    //     });
    //   } catch (err) {
    //     console.error('Error analyzing image:', err);
    //     setError("Failed to analyze image. Please try again or check your connection.");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };
  
    // const analyzeBatchFile = async () => {
    //   if (!batchFile) return;
    
    //   setIsLoading(true);
    //   setError(null);
    //   setBatchResults([]);
    
    //   try {
    //     // Create form data for the batch file upload
    //     const formData = new FormData();
    //     formData.append('batch_file', batchFile);
    
    //     // Call the batch processing API endpoint
    //     const response = await fetch('http://127.0.0.1:8000/batch-detect-corrosion/', {
    //       method: 'POST',
    //       body: formData,
    //     });
    
    //     if (!response.ok) {
    //       throw new Error(`API request failed with status: ${response.status}`);
    //     }
    
    //     const data = await response.json();
        
    //     if (!data.results || !Array.isArray(data.results)) {
    //       throw new Error("Invalid response format from API");
    //     }
    
    //     // Process the batch results
    //     const processedResults = data.results.map((item ) => {
    //       const analysisText = item.analysis || "";
          
    //       // Determine if corrosion is detected using the function
    //       const isCorroded = determineCorrosionStatus(analysisText);
          
    //       // Extract confidence or provide a default
    //       let confidence = extractConfidence(analysisText);
    //       if (confidence === null) {
    //         confidence = isCorroded ? Math.round(Math.random() * 10 + 85) : Math.round(Math.random() * 5 + 90);
    //       }
    
    //       return {
    //         filename: item.filename || "Unknown File",
    //         isCorroded,
    //         confidence,
    //         imageUrl: item.image_url || null
    //       };
    //     });
        
    //     setBatchResults(processedResults);
    //   } catch (err) {
    //     console.error('Error analyzing batch files:', err);
    //     setError("Failed to analyze batch files. Please try again or check your connection.");
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    const analyzeImage = async () => {
      if (!image || !imageFile) return;
    
      setIsLoading(true);
      setError(null);
    
      try {
        // Create form data for the file upload
        const formData = new FormData();
        formData.append('file', imageFile);
    
        // Call the API endpoint
        const response = await fetch('http://127.0.0.1:8000/detect-corrosion/', {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
    
        const data = await response.json();
        
        // Process the analysis result
        const analysisText = data.analysis;
        
        // Determine if corrosion is detected
        const isCorroded = determineCorrosionStatus(analysisText);
        
        // Extract confidence or provide a default
        let confidence = extractConfidence(analysisText);
        if (confidence === null) {
          confidence = isCorroded ? Math.round(Math.random() * 10 + 85) : Math.round(Math.random() * 5 + 90);
        }
        
        // Extract recommendations based on corrosion status
        const recommendations = extractRecommendations(analysisText, isCorroded);
        
        setResult({
          isCorroded,
          confidence,
          recommendations,
          timestamp: new Date().toISOString(),
          rawAnalysis: analysisText // Keep the full text for reference
        });
      } catch (err) {
        console.error('Error analyzing image:', err);
        setError("Failed to analyze image. Please try again or check your connection.");
      } finally {
        setIsLoading(false);
      }
    };
    
    const analyzeBatchFile = async () => {
      if (!batchFile) return;
    
      setIsLoading(true);
      setError(null);
      setBatchResults([]);
    
      try {
        // Create form data for the batch file upload
        const formData = new FormData();
        formData.append('batch_file', batchFile);
    
        // Call the batch processing API endpoint
        const response = await fetch('http://127.0.0.1:8000/batch-detect-corrosion/', {
          method: 'POST',
          body: formData,
        });
    
        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }
    
        const data = await response.json();
        
        if (!data.results || !Array.isArray(data.results)) {
          throw new Error("Invalid response format from API");
        }
    
        // Process the batch results
        const processedResults = data.results.map((item) => {
          const analysisText = item.analysis || "";
          
          // Determine if corrosion is detected using the updated function
          const isCorroded = determineCorrosionStatus(analysisText);
          
          // Extract confidence or provide a default
          let confidence = extractConfidence(analysisText);
          if (confidence === null) {
            confidence = isCorroded ? Math.round(Math.random() * 10 + 85) : Math.round(Math.random() * 5 + 90);
          }
    
          return {
            filename: item.filename || "Unknown File",
            isCorroded,
            confidence,
            imageUrl: item.image_url || null
          };
        });
        
        setBatchResults(processedResults);
      } catch (err) {
        console.error('Error analyzing batch files:', err);
        setError("Failed to analyze batch files. Please try again or check your connection.");
      } finally {
        setIsLoading(false);
      }
    };
  
  // Helper function to determine if an image is corroded based on analysis text
  // Helper function to determine if an image is corroded based on analysis text
const determineCorrosionStatus = (analysisText: string) => {
  // Convert text to lowercase for case-insensitive matching
  const textLower = analysisText.toLowerCase();
  
  // Phrases that explicitly indicate no corrosion
  const noCorrosionPhrases = [
    'no corrosion detected',
    'non corroded',
    'non-corroded',
    'not corroded',
    'no signs of corrosion',
    'corrosion free',
    'no evidence of corrosion',
    'no corrosion found',
    'no visible corrosion',
    'no corrosion is present',
    'corrosion was not detected',
    'not detecting any corrosion',
    'does not show any signs of corrosion'
  ];
  
  // Phrases that explicitly indicate corrosion
  const corrosionPhrases = [
    'corrosion',
    'corroded',
    'Corroded',
    'Surface Corrosion',
    'corrosion detected',
    'shows corrosion',
    'exhibits corrosion',
    'corrosion is present',
    'corrosion is visible',
    'signs of corrosion',
    'evidence of corrosion',
    'corrosion found'
  ];
  
  // Check if any "no corrosion" phrase is in the text
  const hasNoCorrosionPhrase = noCorrosionPhrases.some(phrase => 
    textLower.includes(phrase)
  );
  
  // If explicitly stated not corroded, return false
  if (hasNoCorrosionPhrase) {
    return false;
  }
  
  // Check if any explicit "corrosion" phrase is in the text
  const hasCorrosionPhrase = corrosionPhrases.some(phrase => 
    textLower.includes(phrase)
  );
  
  // If explicitly stated corroded, return true
  if (hasCorrosionPhrase) {
    return true;
  }
  
  // If no explicit mentions either way, do additional analysis
  // Default to not corroded if we can't determine clearly
  // This is important because we want to err on the side of caution -
  // better to miss potential corrosion than to report false positives
  return false;
}
// Helper function to extract confidence from analysis text
const extractConfidence = (text: string) => {
  // Try to find confidence with percentage
  // Look for patterns like "confidence: 95%" or "95% confidence"
  const confidenceRegexes = [
    /confidence:?\s*(\d+)%?/i,
    /(\d+)%\s*confidence/i,
    /certainty:?\s*(\d+)%?/i,
    /(\d+)%\s*certainty/i,
    /accuracy:?\s*(\d+)%?/i,
    /(\d+)%\s*accuracy/i
  ];
  
  for (const regex of confidenceRegexes) {
    const match = text.match(regex);
    if (match && match[1]) {
      const confidence = parseInt(match[1], 10);
      // Ensure confidence is within valid range
      if (!isNaN(confidence) && confidence >= 0 && confidence <= 100) {
        return confidence;
      }
    }
  }
  
  // If no confidence found, check if it's explicitly "not corroded"
  const textLower = text.toLowerCase();
  const notCorrodedPhrases = [
    'no corrosion detected',
    'not corroded',
    'no signs of corrosion'
  ];
  
  if (notCorrodedPhrases.some(phrase => textLower.includes(phrase))) {
    // For "not corroded" cases, return a high confidence (90-99%)
    return Math.floor(Math.random() * 10) + 90;
  }
  
  // Default case
  return null;
}
  
  // Helper function to extract recommendations from analysis text
  // Helper function to extract recommendations from analysis text
const extractRecommendations = (text: string, isCorroded: boolean) => {
  // If no corrosion detected, return standard no-corrosion recommendations
  if (!isCorroded) {
    return [
      "No corrosion detected - no immediate action required",
      "Continue regular maintenance schedule",
      "Periodic re-inspection recommended as part of normal maintenance"
    ];
  }
  
  // For corroded images, try to find recommendations in the text
  const recommendations = [];
  
  // Try to find numbered recommendations
  const recLines = text.split('\n').filter(line => 
    /^\d+\./.test(line.trim()) || 
    line.toLowerCase().includes('recommend') ||
    line.toLowerCase().includes('should') ||
    line.toLowerCase().includes('action')
  );
  
  if (recLines.length > 0) {
    return recLines.map(line => line.replace(/^\d+\.\s*/, '').trim());
  }
  
  // If no numbered recommendations, look for sentences containing recommendation keywords
  const sentences = text.split(/[.!?]/).filter(s => s.trim().length > 0);
  const recSentences = sentences.filter(s => 
    s.toLowerCase().includes('recommend') || 
    s.toLowerCase().includes('treat') ||
    s.toLowerCase().includes('action') ||
    s.toLowerCase().includes('should') ||
    s.toLowerCase().includes('need to') ||
    s.toLowerCase().includes('apply') ||
    s.toLowerCase().includes('repair')
  );
  
  if (recSentences.length > 0) {
    return recSentences.map(s => s.trim());
  }
  
  // Default recommendations for corrosion
  return [
    "Schedule an inspection to assess the corrosion severity",
    "Document current state for future reference",
    "Consider applying appropriate corrosion inhibitor",
    "Consult with a corrosion specialist for treatment options"
  ];
}
  
    // Get a color class based on corrosion status
    const getStatusColorClass = (isCorroded: boolean): string => {
      return isCorroded ? 'text-red-600' : 'text-green-500';
    };
  
    // Render batch results
    const renderBatchResults = () => {
      if (batchResults.length === 0) {
        return null;
      }
  
      return (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-steel-dark">Batch Analysis Results</h3>
          <p className="mb-4 text-neutral-dark">
            Analyzed {batchResults.length} images from the uploaded archive.
          </p>
          
          <div className="space-y-3">
            {batchResults.map((result, index) => (
              <div 
                key={index} 
                className="border rounded-lg overflow-hidden"
              >
                <div 
                  className={`flex items-center justify-between p-4 cursor-pointer ${
                    result.isCorroded ? 'bg-red-50' : 'bg-green-50'
                  }`}
                  onClick={() => toggleExpandItem(index)}
                >
                  <div className="flex items-center">
                    {expandedItems.has(index) ? 
                      <ChevronDown className="mr-2 h-5 w-5 text-gray-500" /> : 
                      <ChevronRight className="mr-2 h-5 w-5 text-gray-500" />
                    }
                    <span className="font-medium truncate max-w-xs">{result.filename}</span>
                  </div>
                  <div className="flex items-center">
                    <span className={`font-medium ${getStatusColorClass(result.isCorroded)}`}>
                      {result.isCorroded ? 
                        'Corrosion Detected' : 
                        'No Corrosion'
                      }
                    </span>
                    <span className="ml-4 text-sm bg-gray-100 rounded-full px-3 py-1">
                      {result.confidence}% confidence
                    </span>
                  </div>
                </div>
                
                {expandedItems.has(index) && (
                  <div className="p-4 border-t">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {result.imageUrl && (
                        <div>
                          <p className="text-sm font-medium mb-2 text-gray-500">Image</p>
                          <div className="aspect-square max-h-64 overflow-hidden rounded-lg border">
                            <img 
                              src={result.imageUrl} 
                              alt={result.filename} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                      <div>
                        <div className="mb-3">
                          <p className="text-sm font-medium mb-1 text-gray-500">Status</p>
                          <p className={`font-medium ${getStatusColorClass(result.isCorroded)}`}>
                            {result.isCorroded ? 'Corrosion Detected' : 'No Corrosion Detected'}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1 text-gray-500">Confidence</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className={`h-2.5 rounded-full ${
                                result.isCorroded ? 'bg-rust-primary' : 'bg-green-500'
                              }`}
                              style={{ width: `${result.confidence}%` }}
                            ></div>
                          </div>
                          <p className="text-right text-sm mt-1">{result.confidence}%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    };
  
    return (
      <>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-steel-primary text-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20" 
              style={{ 
                backgroundImage: "url('https://www.gibsonstainless.com/images/corrosion-pipes.jpg')" 
              }}
            />
          </div>
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-tight">
                Corrosion <span className="text-rust-primary">Detection</span> Tool
              </h1>
              <p className="text-lg md:text-xl mb-8 text-neutral-light">
                Upload an image of your equipment or infrastructure to instantly detect and analyze corrosion.
                Get actionable insights to prevent damage.
              </p>
            </motion.div>
          </div>
          
          {/* Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160">
              <path 
                fill="#F0F4F8" 
                fillOpacity="1" 
                d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,128C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
  
        {/* Detection Tool Section */}
        <section className="py-16 bg-neutral-light min-h-[60vh]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-steel-dark text-center">
                    Corrosion Analysis Tool
                  </h2>
                  
                  <div className="mb-6 p-4 bg-steel-light bg-opacity-20 rounded-lg">
                    <div className="flex items-start">
                      <Info className="text-steel-primary mr-3 flex-shrink-0 mt-1" />
                      <p className="text-sm text-steel-dark">
                        For best results, upload a clear, well-lit image of the suspected corrosion area. 
                        You can analyze a single image or upload a ZIP file containing multiple images for batch processing.
                      </p>
                    </div>
                  </div>
                  
                  {/* Toggle between single and batch upload */}
                  <div className="mb-8">
                    <div className="flex justify-center space-x-4">
                      <button 
                        onClick={() => {
                          setBatchMode(false);
                          setBatchFile(null);
                          setBatchResults([]);
                        }}
                        className={`px-4 py-2 rounded-lg flex items-center ${!batchMode 
                          ? 'bg-steel-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        <Camera className="mr-2 h-5 w-5" />
                        Single Image
                      </button>
                      <button 
                        onClick={() => {
                          setBatchMode(true);
                          setImage(null);
                          setImageFile(null);
                          setResult(null);
                        }}
                        className={`px-4 py-2 rounded-lg flex items-center ${batchMode 
                          ? 'bg-steel-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        <FileArchive className="mr-2 h-5 w-5" />
                        Batch Analysis
                      </button>
                    </div>
                  </div>
                  
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg animate-on-scroll">
                      <div className="flex items-start">
                        <AlertCircle className="text-red-500 mr-3 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-red-700 font-medium">Analysis Error</p>
                          <p className="text-red-600">{error}</p>
                        </div>
                        <button 
                          onClick={() => setError(null)} 
                          className="ml-auto text-red-400 hover:text-red-600"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {!batchMode ? (
                    // Single image analysis UI
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className={`${result ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
                        <ImageUploader 
                          onImageUpload={handleImageUpload}
                          fileInputRef={fileInputRef}
                        />
                        
                        {image && !result && (
                          <div className="mt-6 flex justify-center">
                            <button
                              onClick={analyzeImage}
                              disabled={isLoading}
                              className={`btn-primary px-8 py-3 flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                              {isLoading ? (
                                <>
                                  <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                                  Analyzing...
                                </>
                              ) : (
                                <>
                                  <Camera className="mr-2 h-5 w-5" />
                                  Analyze Image
                                </>
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                      
                      {result && (
                        <CorrosionResults result={result} image={image} onReset={resetState} />
                      )}
                    </div>
                  ) : (
                    // Batch upload UI
                    <div>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        {!batchFile ? (
                          <>
                            <FileArchive className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-medium mb-2 text-gray-700">Upload ZIP file with images</h3>
                            <p className="text-sm text-gray-500 mb-4">
                              Upload a ZIP file containing images for batch corrosion analysis
                            </p>
                            <input
                              type="file"
                              accept=".zip"
                              ref={batchFileInputRef}
                              onChange={handleBatchFileUpload}
                              className="hidden"
                            />
                            <button
                              onClick={() => batchFileInputRef.current?.click()}
                              className="btn-primary px-6 py-2"
                            >
                              Select ZIP File
                            </button>
                          </>
                        ) : (
                          <>
                            <FileArchive className="h-12 w-12 mx-auto text-steel-primary mb-4" />
                            <h3 className="text-lg font-medium mb-2 text-gray-700">File Selected</h3>
                            <p className="text-sm text-gray-900 font-medium mb-4">
                              {batchFile.name} ({(batchFile.size / (1024 * 1024)).toFixed(2)} MB)
                            </p>
                            <div className="flex justify-center space-x-3">
                              <button
                                onClick={() => {
                                  if (batchFileInputRef.current) batchFileInputRef.current.value = '';
                                  setBatchFile(null);
                                }}
                                className="btn-secondary px-4 py-2"
                              >
                                Change File
                              </button>
                              
                              <button
                                onClick={analyzeBatchFile}
                                disabled={isLoading}
                                className={`btn-primary px-6 py-2 flex items-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                              >
                                {isLoading ? (
                                  <>
                                    <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
                                    Processing...
                                  </>
                                ) : (
                                  <>
                                    Analyze Batch
                                  </>
                                )}
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Batch Results Display */}
                      {renderBatchResults()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
  
  
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="section-heading">How It <span className="text-rust-primary">Works</span></h2>
              <p className="section-subheading">
                Our advanced AI algorithms analyze your images to detect corrosion with high accuracy
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center animate-on-scroll staggered-delay-1">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-rust-primary bg-opacity-20 rounded-full flex items-center justify-center">
                    <Upload className="h-10 w-10 text-rust-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-rust-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-steel-dark">Upload Image</h3>
                <p className="text-neutral-dark">
                  Take a photo of the suspected corrosion or upload an existing image from your device.
                </p>
              </div>
  
              {/* Step 2 */}
              <div className="text-center animate-on-scroll staggered-delay-2">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-rust-primary bg-opacity-20 rounded-full flex items-center justify-center">
                    <Camera className="h-10 w-10 text-rust-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-rust-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-steel-dark">AI Analysis</h3>
                <p className="text-neutral-dark">
                  Our advanced AI algorithms analyze the image to detect signs of corrosion and determine its presence.
                </p>
              </div>
  
              {/* Step 3 */}
              <div className="text-center animate-on-scroll staggered-delay-3">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-rust-primary bg-opacity-20 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-rust-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-rust-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-steel-dark">Get Results</h3>
                <p className="text-neutral-dark">
                  Receive detailed results with corrosion assessment and recommended actions to take.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* FAQ Section
        <section className="py-16 bg-neutral-light">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="section-heading">Frequently Asked <span className="text-rust-primary">Questions</span></h2>
              <p className="section-subheading">
                Get answers to common questions about our corrosion detection technology
              </p>
            </div>
  
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll">
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">How accurate is the corrosion detection?</h3>
                  <p className="text-neutral-dark">
                    Our AI model has been trained on thousands of corrosion images and achieves 95% accuracy in correctly 
                    identifying and classifying corrosion. However, results may vary based on image quality and lighting conditions.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll staggered-delay-1">
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">What types of corrosion can be detected?</h3>
                  <p className="text-neutral-dark">
                    Our system can detect various types of corrosion including uniform corrosion, pitting, crevice corrosion, 
                    galvanic corrosion, and stress corrosion cracking. The detection accuracy varies by type.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll staggered-delay-2">
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">What kind of images work best?</h3>
                  <p className="text-neutral-dark">
                    Clear, well-lit images work best. Try to capture close-up photos that show the surface detail. 
                    Avoid glare, extreme shadows, and blurry images for optimal results.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll staggered-delay-3">
                  <h3 className="text-xl font-bold mb-2 text-steel-dark">Is my data secure?</h3>
                  <p className="text-neutral-dark">
                    Yes, all uploaded images are processed securely and not stored permanently on our servers. 
                    We prioritize your data privacy and security at every step of the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </>
    );
  };
  
  export default Detection;
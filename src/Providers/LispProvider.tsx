import React, { createContext, useState } from 'react';

interface RecordingContextType {
  recordingUris: string[];
  addRecordingUri: (uri: string) => void;
}

const RecordingContext = createContext<RecordingContextType>({
  recordingUris: [],
  addRecordingUri: () => {}
});

export const RecordingProvider: React.FC = ({ children }) => {
  const [recordingUris, setRecordingUris] = useState<string[]>([]);

  const addRecordingUri = (uri: string) => {
    setRecordingUris((prevUris) => [...prevUris, uri]);
  };

  return (
    <RecordingContext.Provider value={{ recordingUris, addRecordingUri }}>
      {children}
    </RecordingContext.Provider>
  );
};

export default RecordingContext;

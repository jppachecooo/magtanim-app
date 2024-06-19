import React, { createContext, useState } from 'react';

export const AppContext = createContext<any>(null);

export default function AppContextProvider({ children }: { children: any }) {
  const [selectedSeason, setSelectedSeason] = useState<string>('');
  const [qInfoModalVisible, setQInfoModalVisible] = useState<boolean>(false);
  const [pDBCModalVisible, setPDBCModalVisible] = useState<boolean>(false);

  const AppContextValue = {
    selectedSeason,
    setSelectedSeason,
    qInfoModalVisible,
    setQInfoModalVisible,
    pDBCModalVisible,
    setPDBCModalVisible,
  };

  return (
    <AppContext.Provider value={AppContextValue}>
      {children}
    </AppContext.Provider>
  );
}

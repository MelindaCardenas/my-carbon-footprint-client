import React, { createContext, useState, useMemo, useContext} from 'react';
/* eslint-disable react/prop-types */

const OffsetContext = createContext();

export const OffsetProvider = ({ children }) => {
    const [totalOffset, setTotalOffset] = useState(0); 
    
    const value = useMemo(() => ({totalOffset, setTotalOffset}), [totalOffset, setTotalOffset])

    return (
    <OffsetContext.Provider value={value}>
        {children}
    </OffsetContext.Provider>
    )
};

export function useOffsetContext() {
    const context = useContext(OffsetContext)

    return context;
}
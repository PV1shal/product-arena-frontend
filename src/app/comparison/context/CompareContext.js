'use client';

import { createContext, useContext, useState } from "react";

const ComparisonContext = createContext();

export function ComparisonProvider({ children }) {
    const [comparisonData, setComparisonData] = useState([]);

    return (
        <ComparisonContext.Provider value={{comparisonData, setComparisonData}} >
            {children}
        </ComparisonContext.Provider>
    );
}

export function useComparisonContext() {
    return useContext(ComparisonContext);
}
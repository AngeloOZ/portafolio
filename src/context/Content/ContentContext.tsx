import { LandingInfo } from '@/interfaces';
import { createContext, useContext } from 'react';

interface Data extends LandingInfo {
    // Define your data structure here
}

export const ContentContext = createContext({} as Data);

export function useContentContex() {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}


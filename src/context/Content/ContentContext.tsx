import { createContext, useContext } from 'react';

interface Data {
    // Define your data structure here
}

export const ContentContext = createContext<Data | undefined>(undefined);

export function useContentContex(): Data {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
}


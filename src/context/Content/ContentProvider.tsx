import { LandingInfo } from '@/interfaces';
import { ContentContext } from '.';

interface ContentProviderProps {
    data: LandingInfo;
    children: React.ReactNode;
}

export function ContentProvider({ data, children }: ContentProviderProps) {
    return (<ContentContext.Provider
        value={{
            ...data,
        }}
    >
        {children}
    </ContentContext.Provider>);
}

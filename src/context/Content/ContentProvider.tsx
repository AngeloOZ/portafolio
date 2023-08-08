import { ContentContext } from '.';

interface ContentProviderProps {
    data: any;
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

import React, { useContext } from "react";

type NotificationContextType = {
  showNotification: boolean;
  setShowNotification: React.Dispatch<React.SetStateAction<boolean>>;
};

const NotificationContext = React.createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({children}: {children: React.ReactNode}) {
    const [showNotification, setShowNotification] = React.useState(false);

    return (
        <NotificationContext.Provider value={{showNotification, setShowNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

export function useNotification() {
    const context = useContext(NotificationContext);
    if (context === undefined) {
        throw new Error("useNotification must be used within a NotificationProvider");
    }
    return context;
}
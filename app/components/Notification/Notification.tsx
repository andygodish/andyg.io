import React from 'react'
import { v4 } from 'uuid';
import { useNotification } from '~/utils/NotificationProvider/notification-provider';


export interface NotificationInterface {
    id: string;
    type: string;
    message: string;
}

export interface NotificationProps {
}

const Notification: React.FC<NotificationProps> = (_props): React.ReactElement => {
    const notification: NotificationInterface = {
        id: v4(),
        type: 'SUCCESS',
        message: 'Thanks for reaching out!'
    }

    const [width, setWidth] = React.useState<number>(0);
    const {showNotification, setShowNotification} = useNotification();
    const intervalID = React.useRef<any>(null);


    const handleStartTimer = () => {
        intervalID.current = setInterval(() => {
            setWidth(previousWidth => {
                if (previousWidth < 100) {
                    return previousWidth + 1;
                }

                clearInterval(intervalID.current);
                setShowNotification(false);
                return previousWidth;
            });
        }, 20);

    };

    const handlePauseTimer = () => {
        clearInterval(intervalID.current);
    }

    React.useEffect(() => {
        handleStartTimer();
        return () => {
            handlePauseTimer();
        };
    }, []);

    const isHiddendCondition = showNotification ? 'fixed' : 'hidden';
    const typeCondition = notification.type === 'SUCCESS' ? 'bg-green-400' : 'bg-red-400';

    return (
            <div className={`${isHiddendCondition} rounded-lg right-5 top-16 bg-warmGrey-100 mb-4 z-50`}>
                <div className='shadow-md rounded-lg truncate'>
                    <p className='p-3'>{notification.message}</p>
                    <div className={`${typeCondition}`} style={{ height: "10px", width: `${width}%` }} />
                </div>
            </div>
    );
};

export { Notification };
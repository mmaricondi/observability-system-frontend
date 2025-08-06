import { SuccessIcon, ErrorIcon, WarningIcon } from '../../assets/icons';

function Alert({ message, type }: { message: string; type: 'success' | 'error' | 'warning' }) {
    const icon = type === 'success' ? <SuccessIcon /> : type === 'error' ? <ErrorIcon /> : <WarningIcon />;
    const bgColor = type === 'success' ? '#E6F5E8' : type === 'error' ? '#FFF0EB' : '#FBF2CB';
    const textColor = type === 'success' ? '#263A2D' : type === 'error' ? '#661313' : '#542208';
    return (
         <div className={`flex items-center flex-row gap-2 bg-[${bgColor}] text-[${textColor}] p-3 rounded`}>
            {icon}
            <div>{message}</div>
        </div>
    )
}

export default Alert;
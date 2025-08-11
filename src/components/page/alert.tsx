import { SuccessIcon, ErrorIcon, WarningIcon } from '../../assets/icons';

function Alert({ message, type }: { message: string; type: 'up' | 'unstable' | 'down' }) {
    const icon = type === 'up' ? <SuccessIcon /> : type === 'unstable' ? <WarningIcon /> : <ErrorIcon />;
    const bgColor = type === 'up' ? '#E6F5E8' : type === 'unstable' ? '#FBF2CB' : '#FFF0EB';
    const textColor = type === 'up' ? '#263A2D' : type === 'unstable' ? '#542208' : '#661313';
    return (
         <div className={`flex items-center flex-row gap-2 p-3 rounded`} style={{ backgroundColor: bgColor, color: textColor }}>
            {icon}
            <div>{message}</div>
        </div>
    )
}

export default Alert;
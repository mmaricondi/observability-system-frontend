
const AlertMessage = {
    SUCCESS: 'Todos os serviços estão operacionais',
    WARNING: 'Estamos passando por alguns problemas!',
    ERROR: 'Alguns serviços podem estar fora do ar!'
} as const;

const AlertType = {
    SUCCESS: 'up',
    WARNING: 'unstable',
    ERROR: 'down',
} as const;

const StatusService = {
    UP: 'up',
    DOWN: 'down'
} as const;

export { AlertMessage, AlertType, StatusService };
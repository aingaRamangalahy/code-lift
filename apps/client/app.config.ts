export default defineAppConfig({
    ui: {
        primary: 'blue',
        gray: 'cool',
        notifications: {
            // Show toasts at the top right of the screen
            position: 'top-0 bottom-auto',
        },
        // colors: ['blue', 'green', 'yellow', 'red', 'gray'],
        strategy: 'merge',
        button: {
            default: {
                size: 'md',
                color: 'blue',
                variant: 'solid',
            },
        },
        input: {
            default: {
                size: 'md',
                color: 'gray',
            },
        },
        card: {
            base: 'overflow-hidden',
            background: 'bg-white dark:bg-gray-900',
            divide: 'divide-y divide-gray-200 dark:divide-gray-800',
            ring: 'ring-1 ring-gray-200 dark:ring-gray-800',
            rounded: 'rounded-lg',
            shadow: 'shadow-sm',
            body: {
                base: 'grow p-4',
                background: '',
            },
        },
    },
})

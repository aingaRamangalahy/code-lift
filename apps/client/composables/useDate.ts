import dayjs from 'dayjs'

export const useDate = () => {
    const formatDate = (date: string | Date | undefined) => {
        if (!date) return undefined
        return dayjs(date).format('MMM DD')
    }

    return { formatDate }
}

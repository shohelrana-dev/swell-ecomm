export const formatCurrency = ({ amount, local = 'en-US', currency = 'USD', decimalPlaces = 2 }:any) => {
    const formatter = new Intl.NumberFormat(local, {
        style: 'currency',
        currency,
        maximumFractionDigits: decimalPlaces
    })

    return isNaN(amount) ? '--' : formatter.format(amount)
}

export const capitalize = (text: string) => {
    const lower = text.toLowerCase()
    const first = lower.charAt(0).toUpperCase()
    return first + lower.slice(1)
}
export const countTotal = (items) => {
    let total = 0
    Object.entries(items).forEach(([index, item]) => {
        total += item.fullPrice
    })
    return total
}

// This will allow a dollar sign next to price
export default function formatCurrency(num) {
    return "$" + Number(num.toFixed(1)).toLocaleString() + " "
}

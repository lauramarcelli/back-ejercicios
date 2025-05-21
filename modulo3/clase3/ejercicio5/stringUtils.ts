export function capitalize(str: string): string {
    return str[0].toLocaleUpperCase() + str.slice(1)
}




export function reverse(str: string): string {
    return str.split("").reverse().join("")
}
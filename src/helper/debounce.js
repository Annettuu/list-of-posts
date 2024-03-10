export const debounce = (callback, ms) => {
    let timeout
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => callback(...args), ms)
    }
}
export const places  = (str: string) => {

    return str.toLowerCase().trim().split('').reverse().join('');
}
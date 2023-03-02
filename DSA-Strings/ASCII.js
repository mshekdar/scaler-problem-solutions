// char to ASCII
// "ABC".split("").forEach((char) => console.log(char.charCodeAt(0)));

// ASCII to char
// [97, 98, 99].forEach((code) => console.log(String.fromCharCode(code)));

toggle('aA')

function toggle(str) {
    const chars = str.split('')
    const diff = String.fromCharCode('a') - String.fromCharCode('A')
    for (const char of chars) {
        const charCode = char.charCodeAt(0)
        console.log(charCode)
    }
}

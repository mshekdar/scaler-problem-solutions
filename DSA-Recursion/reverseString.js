// Print reverse string

function reverseString(str) {
    const appendLast = (subString) => {
        const lastChar = subString[subString.length - 1]
        process.stdout.write(lastChar)
        if (subString.length > 1) {
            appendLast(subString.slice(0, subString.length - 1))
        }
    }
    appendLast(str)
    process.stdout.write('\n')
}

reverseString('scaleracademy')

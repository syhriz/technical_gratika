const userInput = process.argv[2].split('')
const rawInput = process.argv[2];
let arrayLetter = [];

for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== " ") {
        if (!arrayLetter.includes(userInput[i])) {
            arrayLetter.push(userInput[i])

        }

    }
}

arrayLetter.sort(customSort)
console.log(arrayLetter.map(counting))

function counting(param) {
    let count = (rawInput.match(new RegExp(param, "g")) || []).length

    return param + ' : ' + count;
}


function customSort(strA, strB) {
    var icmp = strA.toLowerCase().localeCompare(strB.toLowerCase());
    if (icmp != 0) {

        return icmp;
    }

    if (strA > strB) {
        return 1;
    } else if (strA < strB) {
        return -1;
    } else {

        return 0;
    }
}
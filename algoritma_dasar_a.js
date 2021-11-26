function custSort(a, b) {
    if (isFinite(a) && isFinite(b)) return a - b;
    if (isNaN(a) && isFinite(b)) return -1;
    if (isFinite(a) && isNaN(b)) return 1;
    if (isNaN(a) && isNaN(b)) {
        let x = String(a).toLowerCase();
        let y = String(b).toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
    }
}

let question = [12, 9, 30, 'A', 'M', 99, 82, 'J', 'N', 'B'];
question.sort(custSort)
console.log(question)
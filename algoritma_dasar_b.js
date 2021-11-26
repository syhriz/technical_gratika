const userInput = process.argv[2].split(',')
const keyword = userInput[1]
const string = userInput[0]
let ptrn_count = 0;

function pattern_count(kwd, st) {
    if (kwd != null) {
        let value = st.search(kwd)
        if (value > -1) {
            ptrn_count++;
            let newStr = st.slice(value + (kwd.length - 1));
            pattern_count(kwd, newStr)
        }
    } else {
        ptrn_count = 0
    }
}

pattern_count(keyword, string);

console.log(ptrn_count);
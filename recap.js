const names = ["abul", "kabul", "babul", "dabul", "cabul", "pabul", "abul", "cabul", "babul", "gabul"];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }

        console.log(element);
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

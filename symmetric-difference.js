// From freeCodeCamp
// Create a function that takes two or more arrays and returns an array of their symmetric difference.
// The returned array must contain only unique values (No duplicates)
// sym([1,2,3],[5,2,1,4]) should return [3,4,5]
// sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5]
// sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]

function sym(...args) {
    let difference = [];
    let shared = [];
    args.forEach((arg) => {
        let history = []
        arg.forEach((value) => {
            if (!shared.includes(value) && !history.includes(value)) {
                if (!difference.includes(value)) {
                    difference.push(value);
                }
                else {
                    shared.push(value);
                    const index = difference.indexOf(value)
                    difference.splice(index, 1)
                }
            }
            history.push(value)
        });
        shared = []
    });
    return difference.sort((a, b) => a - b);
}

console.log(sym([1,2,3],[5,2,1,4]))
console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]))
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]))

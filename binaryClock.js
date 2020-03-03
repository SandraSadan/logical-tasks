// Your code here!
const inputArray = [1,0,3,7,4,9]
let resultArray = []
let subArray = []
let finalResult = []

for (let i =0; i < inputArray.length; i++) {
   resultArray = binaryValue(inputArray[i])
}

function binaryValue(value) {
    // To find the binary value of each element
    let rem = [];
    while (value >= 1) {
        const quotient = value/2;
        let remainder = (value % 2) | 0;
        rem.push(remainder);
        value = quotient;
    }
    subArray.push(rem)
    // To push zero when the length of the array is not 4 or empty
    subArray.map((item) => {
            while (item.length < 4) {
                item.push(0)
            }
            return item;
    })
    return subArray
}

//To rearrange the resultant matrix to the binary clock format
for (i=3; i>=0; i--) {
    let element = []
    for (j=0; j<6; j++) {
        let currentValue = resultArray[j][i]
        element.push(currentValue)
    }
    finalResult.push(element)
}

console.log("Input:", inputArray)
console.log("Output:", finalResult)

function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element ; 
        }
    }
    return largest
}

const hiLight = [25,58,965,26,86,94,44,58]
const tallest = maxInArray(hiLight);
console.log('Max number is:', tallest)
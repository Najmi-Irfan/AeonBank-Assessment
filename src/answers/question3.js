
function twoSum(numbers, target) {
    // your code here
    let firstIndex = 0;
    let secondIndex = numbers.length - 1;

    while (1 <= firstIndex < secondIndex < numbers.length) {
        // get the total sum
        const total = numbers[firstIndex] + numbers[secondIndex];
        if (total === target) {
            return [firstIndex + 1, secondIndex + 1];
        } else if (total < target) {
            // Since total sum not large enough, will move forward in index and find new sum
            firstIndex++;
        } else {
            // Since the total sum is too large, will move backward in index and find new sum
            secondIndex--;
        }
    }
    // in case the condition not met will return empty array
    return [];
}

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));
// console.log(twoSum([-1, 0], -1));

// Task details:
// 1. Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
//    find two numbers such that they add up to a specific target number. 
// 2. Let these two numbers be  numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
// 3. Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
// 4. The tests are generated such that there is exactly one solution. You may not use the same element twice.
// 5. Your solution must use only constant extra space.
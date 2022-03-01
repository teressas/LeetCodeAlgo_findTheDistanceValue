/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
//  Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
//  Output: 2
//  Explanation: 
//  For arr1[0]=4 we have: 
//  |4-10|=6 > d=2 
//  |4-9|=5 > d=2 
//  |4-1|=3 > d=2 
//  |4-8|=4 > d=2 
//  For arr1[1]=5 we have: 
//  |5-10|=5 > d=2 
//  |5-9|=4 > d=2 
//  |5-1|=4 > d=2 
//  |5-8|=3 > d=2
//  For arr1[2]=8 we have:
//  |8-10|=2 <= d=2
//  |8-9|=1 <= d=2
//  |8-1|=7 > d=2
//  |8-8|=0 <= d=2


var findTheDistanceValue = function (arr1, arr2, d) {
    // set distanceValue to 0
    let distanceVal = 0;
    // have for loop traverse through arr1
    for (let i = 0; i < arr1.length; i++) {
        // set condition to true here 
        // once condition turns false it will remain false through the remaining indexes in the arr2
        let condition = true
        // have for loop traverse through arr2
        for (let j = 0; j < arr2.length; j++) {
            // make sure the value compared to d is an absolute value
            const absVal = Math.abs(arr1[i] - arr2[j])
            // if absVal <= d then condition turns false
            if (absVal <= d) {
                condition = false
            }
        }
        // once looping through one index of arr2 is complete, 
        // this if check will increase the count if the condition remained true
        if (condition) {
            distanceVal++
        }
    }
    return distanceVal
};

const arr1 = [4, 5, 8], arr2 = [10, 9, 1, 8], d = 2
// Output: 2
console.log(findTheDistanceValue(arr1, arr2, d))

// const arr3 = [1,4,2,3], arr4 = [-4,-3,6,10,20,30], d = 3
// Output: 2
// console.log(findTheDistanceValue(arr3, arr4, d))
/**
 * @param {number} n
 * @return {number}
 */

/** 
 * input: n = 11
 * output: 
 * explaination: 11 = 4 + 4 + 3, 4 x 4 x 3 = 
 * 
 */

 
var integerBreak = function(n) {
    let greatestProduct = 0;
    let latestProduct = 0;
    let positiveIntegers = [];
    /** 
 create array of integers, start @ 2 and see how many you can add, then add
    remainder to array 
    2 + 2 + ... + remainder = n -> [2, 2, ... , remainder]
    3 + 3 + ... + remainder = n -> [3, 3, ... , remainder]
    positiveIntegers = [];
    */

    // loop this for k: 
   // increment k (start at 2)
    for (let k = 1; k < n; k++) {
        positiveIntegers = [];
        // console.log(k);
        latestProduct = 0;
        let runningTotal = n;
        let remainder = n % k; // if n % k = 1 ; first number of positiveIntegers is k + 1
        if (remainder == 1) { // do this check once per k increment
            // console.log('here remainder = 1')
            positiveIntegers.push(k+1)
            runningTotal -= k + 1;
        } else if (remainder > 0) {
            positiveIntegers.push(remainder)
            // console.log('here remainder')
            runningTotal -= remainder;
        }
        while (runningTotal > 0) {
            runningTotal -= k;
            positiveIntegers.push(k)
        }
        // console.log(positiveIntegers);
        latestProduct = findProduct(positiveIntegers);
        // console.log(latestProduct)
        checkProduct();
        if (latestProduct < greatestProduct) {
            console.log(positiveIntegers);
            return greatestProduct;
        }
    }

    function findProduct(nums) { // multiply all integers in array together and update latestProduct, create function
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            product = product * nums[i];
        }
        return product;
    }
    function checkProduct() { // check if greater than greatestProduct and update, create function
        if (latestProduct > greatestProduct) {
        greatestProduct = latestProduct;
        } 

    }

    return greatestProduct;
};

console.log(integerBreak(25));
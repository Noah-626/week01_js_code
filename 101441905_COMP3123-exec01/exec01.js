// Write a JavaScript program to capitalize the first letter of each word of a given string.

let words = "the quick brown fox jumped over the lazy dog";
function capitalizeFirstLetter(str)
{
   
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (i === 0 || str[i - 1] === ' ') {
          result += currentChar.toUpperCase();
        } else {
          result += currentChar;
        }
      }
  
    return result;
}
console.log("Ex1: " + capitalizeFirstLetter(words));

// Write a JavaScript program to find the largest of three given integers.
let nums1 = [1,0,1];
let nums2 = [0,-10,-20];
let nums3 = [1000,510,440];

function max(nums)
{
    let max = 0;
    for(let num in nums)
    {
        if(max < nums[num])
        {
            max = nums[num];
        }
    }
    return max; 
}
console.log();
console.log("Ex2: ");
console.log(max(nums1));
console.log(max(nums2));
console.log(max(nums3));

// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
function right(str)
{
    if(str.length < 3)
    {
        return "Length must be greater or equal to three";
    }

    if (str.length < 3) {
        return str;
      }
    
      let result = '';
    
      for (let i = str.length - 3; i < str.length; i++) {
        result += str[i];
      }
    
      for (let i = 0; i < str.length - 3; i++) {
        result += str[i];
      }
    
      return result;
}
console.log();
console.log("Ex3: ");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// Write a JavaScript program to find the types of a given angle.
// Types of angles:
// • Acute angle: An angle between 0 and 90 degrees.
// • Right angle: An 90 degree angle.
// • Obtuse angle: An angle between 90 and 180 degrees.
// • Straight angle: A 180 degree angle.

function angle_Type(angle)
{
    let typeOfAngle = '';
    if(angle > 0 && angle < 90)
    {
        typeOfAngle = 'Acute angle';
    }else if(angle > 90 && angle < 180)
    {
        typeOfAngle = 'Obtuse angle';
    }else if(angle === 90)
    {
        typeOfAngle = 'Right angle';
    }else if (angle === 180){
        typeOfAngle = 'Straight angle';
    }
    return typeOfAngle;
}

console.log();
console.log("Ex4: ");
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

// Exercise 5: 
// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.

function array_max_sum(nums, k)
{
    let maxSum = 0;
    for (let i = 0; i <= nums.length - k; i++) {
        let currentSum = 0;
        
        for (let j = i; j < i + k; j++) {
            currentSum += nums[j];
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log();
console.log("Ex5: ");
console.log(array_max_sum([1, 2, 3, 14, 5], 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))

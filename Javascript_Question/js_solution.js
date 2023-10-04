// Define the function
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    // In case there is no solution, we'll just return null
    return null;
}

// Test cases
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Expected output: [0, 1] (because nums[0] + nums[1] == 9)

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Expected output: [1, 2] (because nums[1] + nums[2] == 6)

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Expected output: [0, 1] (because nums[0] + nums[1] == 6)

const nums4 = [1, 2, 3, 4, 5];
const target4 = 10;
console.log(twoSum(nums4, target4)); // Expected output: [2, 4] (because nums[2] + nums[4] == 10)

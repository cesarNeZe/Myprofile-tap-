function twoSum(nums, target) {
    // Create a Map to store elements and their indices
    const numMap = new Map();
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      // Calculate the complement needed to reach the target
      const complement = target - nums[i];
  
      // Check if the complement exists in the Map
      if (numMap.has(complement)) {
        // If found, return the indices of the current element and the complement
        return [numMap.get(complement), i];
      }
  
      // If not found, store the current element and its index in the Map
      numMap.set(nums[i], i);
    }
  
    // If no solution is found, return an empty array or handle the case as needed
    return [];
  }
  
  // Test case
  const nums = [2, 7, 11, 15];
  const target = 9;
  const result = twoSum(nums, target);
  console.log(result); // Output: [0, 1]
  
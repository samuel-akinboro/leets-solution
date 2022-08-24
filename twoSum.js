/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let index = 0;
  for (let i = index + 1 == nums.length ? index : index + 1; i < nums.length; i++) {
    console.log('test->',index, i, nums.length)
      if (i == nums.length - 1 && index !== nums.length -1) {
          if(nums[index] + nums[i] == target) return [index, i];
          index += 1;
          i = index
          console.log('test2->',index, i, nums.length)
      }else{
          if(nums[index] + nums[i] == target) return [index, i];
          console.log('test->3',index, i, nums.length)
          // if(index == nums.length - 1) index += 1
      }
  }
};

console.log(twoSum([3,2,4], 6))
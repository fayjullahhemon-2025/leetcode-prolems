var searchInsert = function(nums, target) {
    if(nums.indexOf(target)===-1){
        let flag=0;
        for(let i = 0;i<nums.length;i++){
            if(target>nums[i]){
                flag++;
                continue;
            }else{
                return i;
            }
        }
        if(flag===nums.length){
            return nums.length;
        }
    }else{
        return nums.indexOf(target);
    }
    
};
console.log(searchInsert([1,3,5,6],8))
console.log(searchInsert([1,3,5,6],0))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([-1,3,5,6],2))
console.log(searchInsert([-1,3,5,6],0))
console.log(searchInsert([1,3,5,6],5))

var twoSum = function (nums, target){
    let obj = {};
    for(const num of nums){
        let remaining = target-num;
        if(obj.hasOwnProperty(remaining)){
            let flag;
            for(let i = 0; i<nums.length;i++){
                if(nums[i]===remaining){
                    flag = i;
                }
            }
            return [flag,nums.indexOf(num)]
        }else{
            obj[num] = nums.indexOf(num);
            // console.log(obj)
        }
    }
}
console.log(twoSum([3,3],6));
console.log(twoSum([3,2,4],6));
console.log(twoSum([0,3,2,0],0));
// console.log([3,4,2].indexOf(4));
// let abc = {
//     '3':0,
// }
// if(Object.keys(abc).includes('3')){
//     abc['3'] = abc['3']+1;
// }
// console.log(abc['3'])
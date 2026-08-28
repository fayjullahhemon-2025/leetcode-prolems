var shuffle = function(nums, n) {
    const sSlicedArr = nums.slice(n,nums.length);
    const fSlicedArr = nums.slice(0,n);
    const finalArr=[];
    let j = 1;
    let k = 0;
    for(let i = 0;i<nums.length;i=i+2){
        finalArr[i]=fSlicedArr[k];
        finalArr[j]=sSlicedArr[k];
        j=j+2;
        k++;
    }
    return finalArr;

};
console.log(shuffle([2,5,1,3,4,7],3))
var kidsWithCandies = function (candies, extraCandies) {
    let boolArr=[];
    
    for (const candy of candies) {
        let sum = 0;
        sum = candy + extraCandies;
        let counter = 0;
        for(const candy of candies){
            if(sum>=candy){
                counter++;
            }else{
                continue;
            }
        }
        if(counter===candies.length){
            boolArr.push(true);
        }else{
            boolArr.push(false);
        }
    }
    return boolArr;
};
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4,2,1,1,2], 1));
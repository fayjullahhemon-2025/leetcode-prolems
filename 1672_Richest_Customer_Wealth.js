var maximumWealth = function(accounts) {
    let sum = 0;
    let total = -Infinity;
    for(let i = 0 ; i<accounts.length;i++){
        for(let j = 0;j<accounts[i].length;j++){
            sum = sum + accounts[i][j];
        }
        if(sum>=total){
            total = sum;
        }
        sum = 0;
    }
    return total;
};
console.log(maximumWealth([[1,2,3],[3,2,1]]));
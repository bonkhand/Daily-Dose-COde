const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var kidsWithCandies = function(candies, extraCandies) {
    const n = candies.length;
    let high = 0;
    let res = Array(n).fill(false);
    for ( let i = 0; i<n; i++)
    {
        if(candies[i]>high)
        high = candies[i]
    }
    for (let j =0; j<n; j++)
    {
       if(candies[j]+extraCandies>=high){
          res[j]=true;
       }
    }
    return res
    
};

readline.question('Enter candies (space-separated): ', (candies) => {
    readline.question('Enter extra candies: ', (extraCandies) => {
        const candyArray = candies.split(' ').map(Number);
        console.log(kidsWithCandies(candyArray, parseInt(extraCandies)));
        readline.close();
    })   
});
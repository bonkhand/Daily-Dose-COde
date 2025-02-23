/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    input: process.stdout
})
var canPlaceFlowers = function(flowerbed, n) {
    const len = flowerbed.length;

    for( let i=0; i< len ;i++)
    {
        if (flowerbed[i] === 0 && ( i=== 0 || flowerbed[i-1] === 0)&&
        (i === len -1 || flowerbed[i+1] === 0)
        )
        {
            flowerbed[i] = 1;
            n--
            if (n===0)
            {
                return true;
            }
        }
    }
    return n<=0;
};

readline.question('Enter flowerbed (space-separated):', (flowerbed) => {
    readline.question('Enter n: ', (n) => {
        const flowerArray = flowerbed.split(' ').map(Number);
        console.log(canPlaceFlowers(flowerArray, parseInt(n)));
        readline.close();
    })   
});
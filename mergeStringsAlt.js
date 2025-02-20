const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


  var mergeStrings = function(word1, word2) {
    let result ='';
    for(let i = 0; i <Math.max(word1.length, word2.length) ; i++)
    {
        if(i < word1.length)
            result += word1[i];
        if(i < word2.length)
            result += word2[i];
    }
       return result;
  };

  readline.question('Enter word1: ', (word1) => {
    readline.question('Enter word2: ', (word2) => {
        const ans = mergeStrings(word1, word2);
        console.log(`Output: ${ans}`);
        readline.close();           
    })}
);
  
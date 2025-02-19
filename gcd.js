const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  // Function to compute the GCD of two numbers
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  
  // Main function to find the greatest common divisor of strings
  const gcdOfStrings = (str1, str2) => {
    if (str1 + str2 !== str2 + str1) return '';
    const len = gcd(str1.length, str2.length);
    return str1.substring(0, len);
  };
  
  // Read inputs from the user
  readline.question('Enter str1: ', (str1) => {
    readline.question('Enter str2: ', (str2) => {
      // Call the function and print the result
      const result = gcdOfStrings(str1, str2);
      console.log(`Output: "${result}"`);
  
      // Close the readline interface
      readline.close();
    });
  });
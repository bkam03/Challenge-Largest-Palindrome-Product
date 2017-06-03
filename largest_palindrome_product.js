/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */

module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  var currentFactor0 = 0;
  var currentFactor1 = 0;
  var currentProduct = 0;

  function generateFactors(numOfDigits) {
    var newDigit = '';
    for(var i = 0; i< numOfDigits; i++) {
      newDigit += '9';
    }
    return newDigit;
  }

  function isPalindrome(number) {
    var numString = number.toString();
    var centerNumPosition = '';
    var leftCharCompare = 0;
    var rightCharCompare = 0;
    var isPalindrome = false;
    var isComparisonComplete = false;

    if( numString.length % 2 !== 0 ) {
      centerNumPosition = ( numString.length - 1 ) / 2;
      numString = numString.slice(0,centerNumPosition) + numString.slice(centerNumPosition + 1);
    }
    rightCharCompare = numString.length - 1;

    while( !isComparisonComplete ) {
      if( numString.charAt(leftCharCompare) !== numString.charAt(rightCharCompare) ) {
        console.log('found to not be palindrome');
        break;
      } else if( leftCharCompare >= rightCharCompare ) {
        isComparisonComplete = true;
        console.log('found to be palindrome');
      }
      leftCharCompare++;
      rightCharCompare--;

    }

    if( isComparisonComplete === true ) {
      console.log('set palindrome to true');
      isPalindrome = true;
    }

    return isPalindrome;
  }


  currentFactor0 = generateFactors(digits);

  console.log('\nbegin while loop 1');
  while( currentFactor0 * currentFactor0 > palindromeNumber ) {
    currentFactor1 = currentFactor0;
    //loop though factor0 until first product is lower than palindrome
    console.log('\nbegin while loop 2');
    while( currentFactor0 * currentFactor1 > palindromeNumber ) {
      //holding factor0 static, loop through factor 1 values
      currentProduct = currentFactor0 * currentFactor1;
      console.log('currentProduct ', currentProduct);
        //multiply factors, store in currentProduct
      if( currentProduct > palindromeNumber ) {
        console.log('greater than palindrome');
        //check if product is greater than largest palindrome.
        if( isPalindrome(currentProduct)) {
          console.log('new palindrome');
          palindromeNumber = currentProduct;
          factor_0 = Number(currentFactor0);
          factor_1 = currentFactor1;
        }
        //check if this is palindrome

      } else {
        break;
      }
        //if not, then end this factor0 chain
        currentFactor1--;
    }
      currentFactor0--;
  }

  console.log('\n\nfactor 0:', typeof factor_0);
  console.log('factor 1:', typeof factor_1);
  console.log('palindromeNumber', typeof palindromeNumber);

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};


function addBinary( a, b ){
  var sum = a + b,
  		binary = '';
  while ( sum > 0 ) {
    binary = ( sum % 2 ) + binary;
    sum = Math.floor( sum / 2 );
  }
  return binary;
}
console.log( addBinary( 1,2 ) ); //Should be 11
console.log( addBinary( 51,12 ) ); //Should be 111111
console.log( addBinary( 100, 0 ) ); //Should be 1100100
const charOrder = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'a', 'B',
'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j',
'K', 'k', 'L', 'l', 'M' ,'m', 'N', 'n', 'O', 'o', 'P', 'p', 'Q','q', 'R','r', 'S','s', 'T',
't', 'U','u', 'V','v', 'W','w','X','x', 'Y','y', 'Z','z'];

console.log("javascript");

Sort("Cat", "Butt");
Sort("battleship", "BunkBed")

// alphanumeric sort function returns -1 if string A is before string B,
// and 1 if string A is after string B. If the two strings are identical, returns -1
function Sort (stringA, stringB) {

  console.log("Checking if ", stringA, "or", stringB, "comes first.");

  var minLength = stringA.length;
  if (stringB.length < stringA.length) {
    minLength = stringB.length;
  }

  console.log("Min Length is " +  minLength);

  for (var i = 0; i < minLength; i++) {
    var charA = stringA[i];
    var charB = stringB[i];

    console.log("comparing", charA, "to", charB);
    if (ValueOfCharacter(charA) < ValueOfCharacter(charB)) {
      console.log(stringA + " is before " + stringB);
      return -1;
    }
    if (ValueOfCharacter(charA) > ValueOfCharacter(charB)) {
      console.log(stringA + " is after " + stringB);
      return 1;
    }

    // If we get to this point, it means the characters have the same value.
    // the loop will continue and check the next index pair of characters in the words.
  }

  return -1;
  console.log(stringA + " sorts identical to " + stringB);
}

// returns integer value of alphanumeric placement
function ValueOfCharacter(character) {

  console.log("Checking value of character " + character);

  // If the character isn't contained in the alphanumeric array, it's probably a special
  // symbol. We will place special symbols before anything else
  if (charOrder.includes(character) == false) {
    return -1;
  }

  return charOrder.indexOf(character);
}

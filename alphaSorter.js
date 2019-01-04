const charOrder = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c',
'd', 'e',  'f', 'g', 'h', 'i', 'j', 'k','l','m',  'n', 'o', 'p', 'q','r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z'];

console.log("javascript");

Sort("Cat", "Butt");
Sort("battleship", "BunkBed");
Sort("dog", "dog");
Sort("dog", "dogs");

// alphanumeric sort function returns -1 if string A is before string B,
// and 1 if string A is after string B. If the two strings are identical, returns -1
function Sort (stringA, stringB) {

  // convert our strings to lowercase
  a = stringA.toLowerCase();
  b = stringB.toLowerCase();

  console.log("Checking if ", stringA, "or", stringB, "comes first.");

  var minLength = stringA.length;
  if (stringB.length < stringA.length) {
    minLength = stringB.length;
  }

  for (var i = 0; i < minLength; i++) {
    var charA = a[i];
    var charB = b[i];

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

  if (stringA.length < stringB.length) {
    console.log(stringA + " is slightly before " + stringB);
    return -1;
  }
  if (stringA.length > stringB.length) {
    console.log(stringA + " is slightly after " + stringB);
    return 1;
  }

  console.log(stringA + " sorts identical to " + stringB);
  return -1;

}

// returns integer value of alphanumeric placement
function ValueOfCharacter(character) {

  // If the character isn't contained in the alphanumeric array, it's probably a special
  // symbol. We will place special symbols before anything else
  if (charOrder.includes(character) == false) {
    return -1;
  }

  return charOrder.indexOf(character);
}

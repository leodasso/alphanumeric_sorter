const charOrder = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c',
'd', 'e',  'f', 'g', 'h', 'i', 'j', 'k','l','m',  'n', 'o', 'p', 'q','r', 's', 't',
'u', 'v', 'w', 'x', 'y', 'z'];

var heavyLogging = false;

let unsortedWords = ['car', '02cherries', 'zapple', 'horse', 'horses', 'chicken',
'222', 'itaewon', 'crispyChicken', 'radical', 'bacon', 'kevin', 'happy'];

let unsortedNums = ['34342', '2445', '2421', '5436', '2', '014', '024821'];

SortArrayAlphanumeric(unsortedWords);

SortArrayAlphanumeric(unsortedNums);

function SortArrayAlphanumeric(array) {

  console.log(array);

  for (let i = 1; i < array.length; i++) {
    SortSingleElement(i, array);
  }

  console.log(array);
}

function SortSingleElement(index, array)
{
  if (heavyLogging) {
    console.log('Sorting element at index', index);
  }

  // catch for if we're trying to sort the very first item in the array
  if (index <= 0) return;

  var itemAtIndex;
  var itemAtPrevIndex;
  var indexToCompareTo = index - 1;

  while (indexToCompareTo >= 0) {

    // compare the item to the previous index
    itemAtIndex = array[index];
    itemAtPrevIndex = array[indexToCompareTo];

    // if the item at selected index should be before the other item alphabetically...
    if (Compare(itemAtIndex, itemAtPrevIndex) < 0)
    {
      Swap(array, index, indexToCompareTo);
    }
    else {
      // if it doesn't belong before the previous index, we return here.
      return;
    }

    index--;
    indexToCompareTo--;

    if (heavyLogging) {
      console.log(array);
    }
  }
}



function Swap(array, index1, index2) {
  if (index1 >= array.length || index2 >= array.length) {
    console.log('Swap attempted outside the bounds of the array');
    return;
  }

  var obj1 = array[index1];
  var obj2 = array[index2];
  array[index1] = obj2;
  array[index2] = obj1;
}

// alphanumeric sort function returns -1 if string A should be before string B,
// and 1 if string A should be after string B. If the two strings are identical, returns -1
function Compare (stringA, stringB) {

  // convert our strings to lowercase
  a = stringA.toLowerCase();
  b = stringB.toLowerCase();

  if (heavyLogging) {
    console.log("Checking if ", stringA, "or", stringB, "comes first.");
  }

  var minLength = stringA.length;
  if (stringB.length < stringA.length) {
    minLength = stringB.length;
  }

  for (var i = 0; i < minLength; i++) {
    var charA = a[i];
    var charB = b[i];

    if (ValueOfCharacter(charA) < ValueOfCharacter(charB)) {
      if (heavyLogging) {
        console.log(stringA + " is before " + stringB);
      }
      return -1;
    }
    if (ValueOfCharacter(charA) > ValueOfCharacter(charB)) {
      if (heavyLogging) {
        console.log(stringA + " is after " + stringB);
      }
      return 1;
    }

    // If we get to this point, it means the characters have the same value.
    // the loop will continue and check the next index pair of characters in the words.
  }

  if (stringA.length < stringB.length) {
    if (heavyLogging) {
      console.log(stringA + " is slightly before " + stringB);
    }
    return -1;
  }
  if (stringA.length > stringB.length) {
    if (heavyLogging){
      console.log(stringA + " is slightly after " + stringB);
    }
    return 1;
  }

  if (heavyLogging) {
    console.log(stringA + " sorts identical to " + stringB);
  }
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

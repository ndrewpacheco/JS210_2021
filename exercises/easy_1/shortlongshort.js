function shortLongShort(str1, str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str1Length > str2Length) {
    return (console.log(str2 + str1 + str2))
  } else {
    return (console.log(str1 + str2 + str1))
  }


}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
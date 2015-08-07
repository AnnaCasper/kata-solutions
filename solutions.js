// Given 2 strings, a and b, return a string of the form
// short+long+short, with the shorter string on the outside
// and the longer string on the inside. The strings will not
// be the same length, but they may be empty (length0).

function solution(a, b){
  if(a.length > b.length){
    return b + a + b
  } else {
    return a + b + a
  }
}

// Create a function add(n) which returns a function that always adds n to any number
function add(n) {
  return function(x){
    return x + n
  }
}

// Your objective is to complete a recursive function reverse() that receives
// str as String and returns the same string in reverse order
function reverse(str) {
  if (str.length == 0) {
    return ''
  } else {
    var newString = str.substring(1, str.length -1)
    return str.substring(str.length, str.length -1) + reverse(newString)
  }
 }

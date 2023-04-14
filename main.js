function findUniq(arr) {

  let arrS = arr.sort(function(a, b){
    return a - b;
  })
  let i = arr.length;
  if(arrS[0] !== arrS[1]){
    return arrS[0]
  }
    return arrS[i-1]
}
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));

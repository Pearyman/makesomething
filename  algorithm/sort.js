/**
 * 
 * @param {bubblSort} arr 
 */

const bubbleSort = (arr) => {
  for(let i =0; i<arr.length-1; i++)
    for(let j =0; j<arr.length-1-i; j++){
      if(arr[j]>arr[j+1]){
        const temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
  }
  return arr
}
const result = bubbleSort([5,4,3,2,1])
console.log(result)

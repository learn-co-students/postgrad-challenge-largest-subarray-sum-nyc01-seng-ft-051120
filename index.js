
function largestSubarraySum (array) {
  let currentSum = array[0]
    let biggestSum = array[0]
    for (let i = 1; i < array.length ; i++){
        currentSum = Math.max(array[i],array[i]+currentSum)
        if(currentSum > biggestSum) {
            biggestSum = currentSum
        }
    }
    return biggestSum  
}
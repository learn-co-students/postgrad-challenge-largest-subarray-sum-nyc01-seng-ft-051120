function largestSubarraySum(arr) {
  let current = 0
  let max = 0

  for (let i = 0; i<arr.length; i++){
    let currentNum = arr[i]
    current = Math.max((current + currentNum),0)
    max = Math.max(current, max)
  }
  return max
}

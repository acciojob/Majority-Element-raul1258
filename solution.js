// arr = array of numbers
function major(arr)
{
  let count = 1;
  let prev = arr[0];
  for(let i = 1; i < arr.length; i++){
      if(count === 0){
          count = 1;
          prev = arr[i];
          continue;
      }
      if(prev === arr[i]){
          count++;
      }else{
          count--;
      }

  }
  return prev;
}
module.exports=major;

import "./styles.css";


// imprementing a burbble sort
function BubbleSort(arr, order){
  for(let i = 0; i<= arr.length-1;i++){
  
    for( let j = i; j<=arr.length-1;j++){
      if (order === "dec") {
        if (arr[i] < arr[j]) {
        
          let currentJIndex  = arr[j]
          let currentIIndex = arr[i]
          arr[i] = currentJIndex
          arr[j] = currentIIndex
        }
        }else if(order === "acc"){
          if (arr[i] > arr[j]) {
        
            let currentJIndex  = arr[j]
            let currentIIndex = arr[i]
            arr[i] = currentJIndex
            arr[j] = currentIIndex
          }
        }
      
       
      
    }
  }
  
  console.log(arr)
}
const myArr = [33,1,3,86,4,86,2,0];

BubbleSort(myArr,"acc")


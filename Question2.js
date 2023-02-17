// ## Q2: Leaders in an array
//   Given an array A of positive integers. Your task is to find the leaders in the array. 
// An element of array is leader if it is greater than or equal to all the elements to 
// its right side. The rightmost element is always a leader. 
 
//  Input & Output:
 
// Input:
// n = 6
// A[] = {16,17,4,3,5,2}
// Output: 17 5 2
// Explanation: The first leader is 17 
// as it is greater than all the elements
// to its right.  Similarly, the next 
// leader is 5. The right most element 
// is always a leader so it is also 
// included.


let n = 6 ;
let A = [16,17,4,3,5,2];

for(let i=0 ; i<n ; i++){
    let count =0 ;
    for(let j=i+1 ; j<n ; j++ ){
        if(A[i] < A[j]){
            count++;
        }
    }
    if(count ==0){
        console.log(A[i]);
    }
}
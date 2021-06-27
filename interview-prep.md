# **Technical Interview Preparation** #

## **Common Problem Solving Patterns!** ##
*(from Colt Steele's Udemy Course)*

### **Frequency Counters** ###
*uses objects or sets to collect values/frequencies of values*  
> sidenote: using objects to store values (*O(n)*) can help avoid need for nested loops (*O(n^2)*) 
  
EXAMPLE PROBLEMS:  
Write a funciton called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency must be the same.  
  
*same([1,2,3], [4,1,9]) // true*  
*same([1,2,3], [4,1,9]) // false*  
*same([1,2,3], [4,1,9]) // false*  
  
```javascript
// less effecient solution- O(n^2). indexOf essentially loops over second array:
function same(arr1, arr2){
    // if arrays aren't same length, automatically return false
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i < arr.length; i++){
        // answers the question: "what is the index of arr1[i] squared in the second array?"
        let correctIndex = arr2.indexOf(arr1[i]**2)
        // if index of arr1[i] squared = -1, means not in arr2
        if(correctIndex === -1){
            return false;
        }
        // removes correct index from arr2
        arr2.splice(correctIndex, 1)
    }
    return true;
}
```

<br/>

### **Multiple Pointers** ###

<br/>

### **Sliding Window** ###



// Run time complexity: O(n^2)
// Space complexity: O(n)
function addToZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }
            }
        }

        return false
    }
                

//console.log(addToZero([1,2,3,-2]))



// Run time complexity: O(n^2)
// Space complexity: O(n)
function hasUniqueChars(str){
    let string = str.split('')
    for(let i = 0; i < string.length; i++){
        for(let j = i + 1; j < string.length; j++){
            if(string[i] === string[j]){
                return false
            }
        }
    }return true

}

//console.log(hasUniqueChars('Moonday'))

// Run Time Complexity: O(n)
// Space Complexity: O(n)
function isPanagram(str){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let string = str.toLowerCase()
    for(let i = 0; i < alphabet.length; i++){
        if(string.indexOf(alphabet[i]) === -1){
             return false
        }
       
       
}
return true
}
//console.log(isPanagram("The quick brown fox jumps over the lazy dog"))

// Run time complexity: O(n^2)
// Space Complexity: O(n)
function longestWord(arr){
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i].length > arr[j].length){
                return arr[i].length
            }else if(arr[i].length < arr[j].length){
                return arr[j].length
            }
            
        }
    }
}

console.log(longestWord(['hi','hello']))
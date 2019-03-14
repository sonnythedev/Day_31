/*
    Difficulty: Easy    

    Create an extension for arrays that sort them using bubble sort.

    Tip: A bubble sort repeatedly loops over the items in an array, comparing items that are next to each other and swapping them if they aren’t sorted. This looping continues until all items are in their correct order.

    Samples:
    1) [12, 5, 4, 9, 3, 2, 1].solution() == [1, 2, 3, 4, 5, 9, 12]
    2) ["f", "a", "b"].solution() == ["a", "b", "f"]
    2) [].solution() == []
*/

// solution1

Array.prototype.solution1=function(){
     //console.log(this);
     for(let j=this.length; j>=0; j--){
        let swapped=false;
        for(let i=0; i<j; i++){
            if(this[i]>this[i+1]){
                let temp=this[i];
                this[i]=this[i+1];
                this[i+1]=temp;
                swapped=true;
            }
        }

        if(!swapped) return this;
     }
     return this;
}


// solution2




/*
************************* PERFORMANCE TESTS *************************
*/

// get big numbers for test

// shuffle numbers

// test solution1

let arr=[10,9,8,7,1];
console.log(arr.solution1());

// test solution2

// test dafault sort()


/*
************************* PERFORMANCE RESULTS *************************

*/
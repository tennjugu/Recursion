function mergeSort(arr){
    if (arr.length <= 1){
        //console.log(arr)
        return arr
    }
    if(arr.length > 1){
        let midLength = arr.length / 2
        let leftSide = arr.slice(0, midLength)
        //console.log(leftSide)
        let rightSide = arr.slice(midLength, arr.length)
        //console.log(rightSide)
        let leftList = mergeSort (leftSide)
        let rightList =  mergeSort(rightSide) 
        return mergeSortedList(leftList, rightList)
    }
    
}

function mergeSortedList(A, B) {
    let sortedList = []
    let i = 0
    let j = 0
    while(i < A.length && j < B.length){
        if (A[i] < B[j]){
            sortedList.push(A[i])
            i++
        }else{
            sortedList.push(B[j])
            j++
        }
    }
    for (;i < A.length; i++){
        sortedList.push(A[i])
    }
    for (;j < B.length; j++){
        sortedList.push(B[j])
    }
    return sortedList
}

// arr = [5, 2, 9, 1, 5, 6, 8, 3, 7]
// console.log(mergeSort(arr))
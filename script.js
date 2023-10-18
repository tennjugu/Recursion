function mergeSort(arr){
    const b = arr.length
    let midLength
    if (b <= 1){
        console.log(arr)
        return 
    }
    if(b > 1){
            midLength = b / 2
            const leftSide = arr.slice(0, midLength)
            const rightSide = arr.slice(midLength, b)
            mergeSort(leftSide)
            mergeSort(rightSide)
            return
        // if (b % 2 != 0 ){
        //     mid = (b - 1) / 2
        //     console.log(arr[mid])
        //     console.log(arr.slice(0, mid))
        //     return
        // }
    }
}


arr = [5, 2, 9, 1, 5, 6, 8]
mergeSort(arr)
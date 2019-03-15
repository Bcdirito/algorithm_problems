function tribonacci(signature,n){
    if (n === 0){
        return []
    } else if (n <= 3){
        return signature.slice(0, n)
    } else {
        let array = signature,
        remainder = n - 3

        for (let i = 0; i < remainder; i++){
            let sum = array[array.length - 1] + array[array.length - 2] + array[array.length - 3]
            array.push(sum)
        }

        return array
    }
}
// Runtime 132 ms, Memory Usage 44.5 MB

const isValidSudoku = (board) => {

    // initialize an object variable
    // there will be nine keys and values
    // these arrays will be the 3x3 squares flattened

    let threeByThrees = {
        1: [...board[0].slice(0,3), ...board[1].slice(0,3), ...board[2].slice(0, 3)],
        2: [...board[3].slice(0,3), ...board[4].slice(0,3), ...board[5].slice(0, 3)],
        3: [...board[6].slice(0,3), ...board[7].slice(0,3), ...board[8].slice(0, 3)],
        4: [...board[0].slice(3,6), ...board[1].slice(3,6), ...board[2].slice(3, 6)],
        5: [...board[3].slice(3,6), ...board[4].slice(3,6), ...board[5].slice(3, 6)],
        6: [...board[6].slice(3,6), ...board[7].slice(3,6), ...board[8].slice(3, 6)],
        7: [...board[0].slice(6), ...board[1].slice(6), ...board[2].slice(6)],
        8: [...board[3].slice(6), ...board[4].slice(6), ...board[5].slice(6)],
        9: [...board[6].slice(6), ...board[7].slice(6), ...board[8].slice(6)]
    }
    
    // declare another object variable
    // the values of this object will be the vertical arrays in the sudoku
    let verts = {}
    
    // iterate through the first index
    for (let h = 0; h < board[0].length; h++){
        // initialize a key value pair
        // the key is the current index
        // the value is an empty array 
        verts[h] = []


        // iterate through the vertical array
         for (let v = 0; v < board.length; v++){

            // push each value into the appropriate key
             verts[h].push(board[v][h])
         }
    }
        
    // declare a helper function
    // this helper function will check if every array is valid
    const checker = (arr) => {
        // declare a history object
        // we will utilize this object to see if there are any repeated numbers
        let history = {}

        // iterate through the array
        for (let i = 0; i < arr.length; i++){
            
            // if a key already exists, then the number is repeated
            // therefore this is not a valid sudoku
            // return false
            if (history[arr[i]] !== undefined) return false

            // else if there is no key and the character is not a ".", crate a key-value pair
            else if (arr[i] !== ".") history[arr[i]] = i
        }
    }
    
    // iterate horizontally
    // run the checker on each array
    for (let i = 0; i < board.length; i++){
        if (checker(board[i]) === false) return false
    }
    
    // iterate vertically
    // run the checker on each array
    for (const key in verts) {
        if (checker(verts[key]) === false) return false
    }
    
    // iterate through the 3x3s
    // run the checker on each array
    for (const key in threeByThrees) {
        if (checker(threeByThrees[key]) === false) return false
    }

    
    // if you reach this point, you have a valid sudoku 
    return true
};
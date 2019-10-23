const isValidSudoku = (board) => {
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
    
    let verts = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
    }
        
    let topBoard = board[0]

    for (let h = 0; h < topBoard.length; h++){
         for (let v = 0; v < board.length; v++){
             verts[h].push(board[v][h])
         }
    }
        
    
    const checker = (arr) => {
        let history = {}
        for (let i = 0; i < arr.length; i++){
            if (history[arr[i]] !== undefined) return false
            else if (arr[i] !== ".") history[arr[i]] = i
        }
    }
    
    for (let i = 0; i < board.length; i++){
        if (checker(board[i]) === false) return false
    }
    
    for (const key in verts) {
        if (checker(verts[key]) === false) return false
    }
    
    for (const key in threeByThrees) {
        if (checker(threeByThrees[key]) === false) return false
    }
    
        
    return true
};
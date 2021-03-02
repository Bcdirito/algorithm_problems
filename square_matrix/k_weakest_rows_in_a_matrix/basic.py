def kWeakestRows(mat, k):
    i_count = {}
    
    for x in range(0, len(mat)):
        i_count[x] = 0
        for i in mat[x]:
            if i == 1:
                i_count[x] += 1
    
    sorted_items = sorted(i_count.items(), key=lambda k: k[1])
    
    rows = []
    
    for n in range(0, k):
        rows.append(sorted_items[n][0])
    
    return rows
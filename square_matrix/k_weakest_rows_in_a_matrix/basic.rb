def k_weakest_rows(mat, k)
    soldier_history = Hash.new(0)

    mat.each_with_index do |row, idx|
        soldier_history[idx] += row.select {|r| r === 1}.length
    end

    soldier_history.keys.sort_by {|k| soldier_history[k]}[0...k]
end
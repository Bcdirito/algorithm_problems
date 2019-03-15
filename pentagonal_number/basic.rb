def PentagonalNumber(num)

    i = 1
        if i < num
            l = 2
            until l > num
                  i += (l - 1) * 5
                  l += 1
          end
      end
      i
  end
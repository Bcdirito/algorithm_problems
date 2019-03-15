def tribonacci(signature,n)
    if n == 0
      return []
    elsif n <= 3
      return signature[0...n]
    else
      array = signature
      remainder = n - 3
      remainder.times do
        sum = array[-1] + array[-2] + array[-3]
        array << sum
      end
      return array
    end
  end
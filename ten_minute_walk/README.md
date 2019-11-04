## Ten Minute Walk Algorithm

Given an array of directions, [n, s, e, w], return whether or not your walk will take ten minutes and return you where you started.

Every direction takes one minute to walk

### Test Cases:

[n, s, n, s] -> False (Doesn't take ten minutes)

[n, s, e, w, n, s, e, w, n, s] -> True (Ten minutes and returns to the start)

[n, e, w, s, n, e, w, s, n, e] -> False (Ten minutes but doesn't return to start)

#### Algorithm Found on Code Wars
[https://www.codewars.com/kata/54da539698b8a2ad76000228/train/ruby]
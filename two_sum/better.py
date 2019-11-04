def two_sum(nums, target):
    history = {}

    for i in range(0, len(nums)):
        diff = target - nums[i]
        if nums[i] in history:
            return [history[nums[i]], i]
        else:
            history[diff] = i

    return "No Pair Sum"

print(two_sum([1, 4, 9, 6], 7))
print(two_sum([2, 3, 5], 8))
print(two_sum([15, 25, 19], 41))
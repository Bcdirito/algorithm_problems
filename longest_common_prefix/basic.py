# Runtime 40ms, Memory Usage 13.6 MB

def longestCommonPrefix(strs):
        if len(strs) > 0:
            common_prefix = ""
            first_word = strs[0]
            
            for f in range(0, len(first_word)):
                common_prefix += first_word[f]
                for s in range(0, len(strs)):
                    if common_prefix != strs[s][0:len(common_prefix)]:
                        common_prefix = common_prefix[:-1]
                        break
                        
            return common_prefix
        else:
            return ""
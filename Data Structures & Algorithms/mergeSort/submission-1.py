# Definition for a pair.
# class Pair:
#     def __init__(self, key: int, value: str):
#         self.key = key
#         self.value = value
class Solution:
    def mergeSort(self, pairs: List[Pair]) -> List[Pair]:
        return self.divide(pairs, 0, len(pairs) - 1)

    def divide(self, p: List[Pair], s: int, e: int) -> List[Pair]:
        if e - s + 1 <= 1:
            return p

        m = (s + e) // 2

        self.divide(p, s, m)

        self.divide(p, m + 1, e)

        self.merge(p, s, m, e)

        return p

    def merge(self, p: List[Pair], s: int, m: int, e: int) -> None:
        l = p[s:m+1]
        r = p[m+1:e+1]

        i, j, k = 0, 0, s

        while i < len(l) and j < len(r):
            if l[i].key <= r[j].key:
                p[k] = l[i]
                i += 1
            else:
                p[k] = r[j]
                j += 1
            k += 1
        
        while i < len(l):
            p[k] = l[i]
            i += 1
            k += 1

        while j < len(r):
            p[k] = r[j]
            j += 1
            k += 1

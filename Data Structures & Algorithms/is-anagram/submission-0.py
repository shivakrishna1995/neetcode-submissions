class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        mapS, mapT = defaultdict(int), defaultdict(int)

        if len(s) != len(t):
            return False

        for c in s:
            mapS[c] += 1

        for c in t:
            mapT[c] += 1

        for c, cnt in mapS.items():
            if mapT[c] != cnt:
                return False

        return True


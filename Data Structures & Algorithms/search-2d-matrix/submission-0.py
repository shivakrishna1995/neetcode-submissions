class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows, cols = len(matrix), len(matrix[0])

        t, b = 0, rows - 1
        while t <= b:
            m = t + ((b - t) // 2)
            if target > matrix[m][-1]:
                t = t + 1
            elif target < matrix[m][0]:
                b = b - 1
            else:
                break

        if not t <= b:
            return False

        row = (t + b) // 2
        l, r = 0, cols - 1
        while l <= r:
            m = l + ((r - l) // 2)
            if target > matrix[row][m]:
                l = l + 1
            elif target < matrix[row][m]:
                r = r - 1
            else:
                return True
        
        return False

class TreeNode:
    def __init__(self, key, val):
        self.key = key
        self.val = val
        self.left = None
        self.right = None

class TreeMap:
    
    def __init__(self):
        self.root = None

    def insert(self, key: int, val: int) -> None:
        if not self.root:
            self.root = TreeNode(key, val)
            return

        cur = self.root
        while True:
            if key > cur.key:
                if not cur.right:
                    cur.right = TreeNode(key, val)
                    return
                cur = cur.right
            elif key < cur.key:
                if not cur.left:
                    cur.left = TreeNode(key, val)
                    return
                cur = cur.left
            else:
                cur.val = val
                return


    def get(self, key: int) -> int:
        cur = self.root

        while cur:
            if key > cur.key:
                cur = cur.right
            elif key < cur.key:
                cur = cur.left
            else:
                return cur.val

        return -1

    def getMin(self) -> int:
        cur = self.root

        while cur and cur.left:
            cur = cur.left

        return cur.val if cur else -1

    def getMax(self) -> int:
        cur = self.root

        while cur and cur.right:
            cur = cur.right

        return cur.val if cur else -1

    def remove(self, key: int) -> None:
        self.root = self.removeHelper(self.root, key)

    def removeHelper(self, cur: TreeNode, key: int) -> TreeNode:
        if not cur:
            return None

        if key > cur.key:
            cur.right = self.removeHelper(cur.right, key)
        elif key < cur.key:
            cur.left = self.removeHelper(cur.left, key)
        else:
            if not cur.left:
                return cur.right
            
            if not cur.right:
                return cur.left

            minNode = cur.right
            while minNode and minNode.left:
                minNode = minNode.left

            cur.key = minNode.key
            cur.val = minNode.val
            cur.right = self.removeHelper(cur.right, minNode.key)
            
            return cur

    def getInorderKeys(self) -> List[int]:
        result = []

        self.inorderTraversal(self.root, result)

        return result

    def inorderTraversal(self, root: TreeNode, result: List[int]) -> None:
        if root:
            self.inorderTraversal(root.left, result)
            result.append(root.key)
            self.inorderTraversal(root.right, result)


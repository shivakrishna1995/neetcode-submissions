class Node:
    def __init__(self, val):
        self.value = val
        self.next = None
        self.back = None

class Deque:
    
    def __init__(self):
        self.head = None
        self.tail = None

    def isEmpty(self) -> bool:
        return self.head is None

    def append(self, value: int) -> None:
        node = Node(value)
        if self.head is None:
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            node.back = self.tail
            self.tail = node

    def appendleft(self, value: int) -> None:
        node = Node(value)
        if self.head is None:
            self.head = node
            self.tail = node
        else:
            node.next = self.head
            self.head.back = node
            self.head = node

    def pop(self) -> int:
        if self.tail is None:
            return -1
        if self.tail.back is None:
            value = self.tail.value
            self.head = None
            self.tail = None
            return value
        value = self.tail.value
        self.tail = self.tail.back
        self.tail.next = None
        return value

    def popleft(self) -> int:
        if self.head is None:
            return -1
        if self.head.next is None:
            value = self.tail.value
            self.head = None
            self.tail = None
            return value
        value = self.head.value
        self.head = self.head.next
        self.head.back = None
        return value
        

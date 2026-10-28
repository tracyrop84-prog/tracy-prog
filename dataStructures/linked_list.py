# Array.[]
#Object.
#Linked List
#Tree ,Graph etc
#Single Linked List.

#
#Dictionary <python>
#list
#
# -> linear
# [(p:0,v:23),(p:1,v:49),(p:2,v:50),,, n<1m ,100 >]
# [(p:0,v:49),(p:1,v:50) ,,, n<1m ,100 >] linear time

# -> linked list
# constant time
# [(v:23,n=>),(v:34,n=>)] start =>(v:34,n=>)

class Node:
    def __init__(self,value,next=None):
        self.value=value
        self.next=next

class SingleLinkedList:
    def __init__(self):
        self.start=None
        self.last=None

    def append(self,value):
        newNode=Node(value)#new node to add
        if not self.start:
            self.start=newNode
            self.last=newNode
            return newNode
        lastNode=self.last #getting last node
        lastNode.next=newNode #next none->
        self.last=newNode
        return self.last

    def print_all_nodes(self):
        #list all items from the start
        currentNode=self.start #st None
        if not currentNode:
            print("Our list is empty")
            return
        while True:
            print("Current node is")
            print(currentNode.__dict__)
            if not currentNode.next:
                print("Found the last node")
                return
            currentNode=currentNode.next # current to next item in list

myList=SingleLinkedList()
#myList.print_all_nodes()
myList.append(45)
myList.append(99)
myList.append(134)
myList.print_all_nodes()

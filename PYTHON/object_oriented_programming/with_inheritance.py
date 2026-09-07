"""
Shape class.
properties and methods common to all shapes.
"""

class Shape:
    def __init__(self,shape_name):
        self.shape_name=shape_name
        
    def describe(self):
        print(f"This is a {self.shape_name}")
        
    def display_info(self):
        print("-------------------------------")
        print(f"Shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("-------------------------------")
        

#inheritance class Name (<class inheriting from>)
class Rectangle(Shape):
    
    def __init__(self,length,width):
        #name shape shape
        #super <class we are inheriting from>
        #self <specific object created the class>
        super().__init__(shape_name="Rectangle")
        
        self.length=length
        self.width=width
        
    def area(self):
        return self.length*self.width
        
    def perimeter(self):
        return 2*(self.length+self.width)
        

r1=Rectangle(length=20,width=12)

print("Shape name",r1.shape_name) #shape name
print("Area is",r1.area()) #Recange.area <>
r1.describe() #Shape
r1.display_info() #shape

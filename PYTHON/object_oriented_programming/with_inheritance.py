# Shape class.
# properties and methods common to all shapes.
# 
# ----> private, public <----
# ---> getters and setters <hide the properties <private >>

class Shape:
    def __init__(self, shape_name):
        self.shape_name = shape_name

    def describe(self):
        print(f"This is a {self.shape_name}")

    def display_info(self):
        print("-------------------------------")
        print(f"Shape: {self.shape_name}")
        print(f"Area: {self.area()}")
        print(f"Perimeter: {self.perimeter()}")
        print("-------------------------------")

    # Method area
    def area(self):
        print(f"For Shape ${self.shape_name} area calculation missing")

    def perimeter(self):
        print(f"For Shape ${self.shape_name} perimeter calculation missing")


# Inheritance class Name (<class inheriting from>)
class Rectangle(Shape):

    def __init__(self, length, width):
        # Name shape shape
        # super <class we are inheriting from>
        # self <specific object created the class>
        super().__init__(shape_name="Rectangle")

        self.length = length
        self.width = width

    # Method calculating area
    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)


class Triangle(Shape):

    def __init__(self, base, height):
        super().__init__(shape_name="Triangle")


# code for the square class
class Square(Rectangle):
    def __init__(self, side):
        # super -> its not shape its Rectangle
        super().__init__(length=side, width=side)
        self.shape_name = "Square"


s1 = Square(side=35)
print("Shape name", s1.shape_name)  # shape name
print("Area is", s1.area())  # Square -> Rectangle -> Shape
s1.describe()  # Shape
s1.display_info()  # shape
# r1 = Rectangle(length=20, width=12)

# print("Shape name", r1.shape_name) # shape name
# print("Area is", r1.area()) # Rectangle.area <>
# r1.describe() # Shape
# r1.display_info() # shape
t1 = Triangle(20, 30)
t1.area()  # Triangle -> Shape

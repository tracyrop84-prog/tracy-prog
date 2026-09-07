class rectangle:
    def __init__(self,length,width):
        self.length=length
        self.width=width
        self.shape_name="rectangle"

        
    def area(self):
        area=self.length*self.width
        print(f"for area of  {self.shape_name} with length{self.length} and width {self.width} area: {area}")

class square:
    def __init__(self,side):
        self.length=side
        self.width=side
        self.shape_name="square"
    def area(self):
        area=self.length*self.width
        print(f"for {self.shape_name} of length {self.length} and width {self.width} area: {area}")


r1=rectangle(length=20,width=10)
r1.area()
print(r1.shape_name)

s1=square(side=12)
s1.area()
print(s1.shape_name)
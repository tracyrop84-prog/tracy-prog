def my_kwargs(**kwargs):
    print("kwargs is",type(kwargs))
    print(kwargs)

my_kwargs(a=3,b=5,name="monkey")
my_kwargs(email="tracy.com",dict={"a":"b"},ar=[1,2,3,4])

def area_rectangle(width,length):
    area=length*width
    print(f"for rectangle with length {length} and width {width} area is {area}")
area_rectangle(5,2)
area_rectangle(length=3,width=4)
width=6
length=10
area_rectangle(width,length)
area_rectangle(width=width,length=length)
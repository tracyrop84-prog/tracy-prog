def my_args(*args):
    print(f"args type of args {type(args)}")
    print(args)
    print(f"first arg {args[0]}")
    print("___________________________________")

my_args(4,5,6,2,4)
my_args("hello",True,56)

def area_rectangle(length,width):
    area=length*width
    print("_________________________________")
    print(f"for rectangle with length{length} and width {width} area is {area}")
    print("_________________________________________________________________________")

area_rectangle(20,10)


def sum(a,b):
    ans=a+b
sum(10,4)

def sum2(*args):
    ans=0
    for n in args:
        print(f"n is{n}")
        ans=ans+n
    print(f"sum is {ans}")
sum2(29,3,5,76,30)
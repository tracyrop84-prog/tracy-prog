"""
Are powerfull tool for
modifying or extending the behaviour of functions
or methods without changing their code.

"""

"""
A decorator function should take
another function as an argument/parameter.
it should have a wrapper function .
this function should be able to call the passed function

to use a decorator you use
@<decorator funciton> before function defination
"""


def my_deco(func):
    def wrapper():
        print("Before we call the function")  # change this bit out
        func()  # try when comments are on and off
        print("After we call the function")  # change this bit out

    return wrapper


def hello():
    print("Hello world function executes")
    print("Hello World")


@my_deco
def french_hello():
    print("french hello funciton")
    print("Bonjour World")


# -> french_hello-> my_deco(french_hello)->wrapper()-> french_hello
# -> hello() -> hello
french_hello()
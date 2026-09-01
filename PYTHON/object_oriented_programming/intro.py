"""
Object oriented programming.
<JS ,Python ,C++ ,JAVA , etc>

Concept in programming to make
work easy. by using principles.
1.Encapsulation
    -keeping data and methods<functions> inside a class
    while restricting direct access to internal data.
2.Abstraction
    -Hiding uncessary complexity or implrtation of details.
3.Inheritance
    -one class to reuse or extend propertie
    and methods of another class
4.Polymorphisim
    -appering in different forms. Method can
    have different behaviours.

JS and python are object oriented.
-> number.toString() ,string.toLowerCase()
"""

"""
-> Class ->
    -blueprint for an object.

-> Class could an architectural drawing of a house.
    object -> implentaiton of the drawing.
"""

#is to have the name Capitalized
#fields <properties>
class House:
    bedrooms=5
    bathrooms=3
    floors =2
    area=306
    owner=""
    location=""
    architect="KIPROP"
    def config(self,owner,location):
        self.owner=owner
        self.location=location

    def print_self(self):
        #this <the object itself>: self<object >
        print(self)
        print(self.__dict__) #dictionary <print all properties>
#When access object properties use dot notation
#Bracket notation is for dictionary
print("______________________________________________________")

ashleys_house=House()
# ashleys_house.owner="Ashley"
# ashleys_house.location="Nakuru"
ashleys_house.config(owner="ashley",location="Nakuru")
print(f"Ashleys House Owner {ashleys_house.owner}")
print(f"Ashleys  Location {ashleys_house.location}")
print(f"Ashleys  House Bedrooms {ashleys_house.bedrooms}")
print(f"Ashleys  House Bathrooms {ashleys_house.bathrooms}")
print(f"Ashleys  House Floors {ashleys_house.floors}")
print(f"Ashleys  House Area {ashleys_house.area}")
print(f"Ashleys  House Designer {ashleys_house.architect}")
ashleys_house.print_self()
print("End of print ashley")
print("______________________________________________________")
lionel_house=House()
lionel_house.owner="lionel"
lionel_house.location="Eldama"
lionel_house.config(owner="lionel",location="Eldama")

print(f"Lionel House Owner {lionel_house.owner}")
print(f"Lionel Location {lionel_house.location}")
print(f"Lionel House Bedrooms {lionel_house.bedrooms}")
print(f"Lionel House Bathroom {lionel_house.bathrooms}")
print(f"Lionel House Floors {lionel_house.floors}")
print(f"Lionel House area {lionel_house.area}")
print(f"Lionel House Designer {lionel_house.architect}")
lionel_house.print_self()
print("End of print lionel")
print("______________________________________________________")

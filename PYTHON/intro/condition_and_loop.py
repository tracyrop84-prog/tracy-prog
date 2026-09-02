age=23
if age>18:
    print("you can drink")
    print("something else")
    if age==23:
        print("this is awesome")
    print("another line")
    #elif
elif age==44:
    print("you are not young")
else:
    print("last else")


k=0
while k<10:
    k=k+1
    print("k is",k)


    
    #range(start,stop,step)
for i in range(0,5,1):
    print("I is",i)

ar=[78,"tracy",34,8,90,3,"apple"]
for i in range(0,len(ar)):
    single_item=ar[i]
    print(single_item)

for single_item in ar:
    print("single item",single_item)

import time

def up_to_n(n):
    sum = 0
    for i in range(1, n + 1):
        sum = sum + i
    print(f"\n linear time: when n is {n} sum is {sum}")
    return sum


def up_to_n_c(n):
    sum = n * (n + 1) / 2
    print(f"\"constant time: when n is {n} sum is {sum}\"")
    return sum


# op1+op2+op3+i*op4+op5
# rename=1
# k+k+k+k+k+k
# -> 4k+n*k(n+k)
# -> Simplify the operations
# 4k+n*k+k = [4k , n+1, 0.31838931k]
# [0,1]-> 1seconnd -> [4, n]
# 0-1-> [4, 1]
# n=10000->[4+10000]print(fstart_time=time.perf_counter()
# up_to_n_2(50000*4)
# end_time=time.perf_counter()\"when n is n is {n} sum is {sum}\"}#op5
# high is n(1)-> linear time

def up_to_n_min(n):
    # Add all the values up to n
    sum = 0
    # i - 1
    # k-1, k-2, k-3, k-5,
    # i - 2
    # k -1, k-2, k-3, k-5,
    for i in range(1, n + 1):
        sum = sum + i
    print(f"1 when n is n is {n} sum is {sum}\"}#op5")
    return sum

# rename->kdef up_to_n(n):
# #5
# Add all the values up to n
# sum=0# op1
# #i = 1 ->
# # k-1,k-2,k-3,k-5,
# #i - 2
# # # k-1,k-2,k-3,k-5,
# # for i in range (1,n+1):# i op2 , 1,n+1<op3>
# sum=sum+1 # op4
# print(f"1 when n is n is {n} sum is {sum}\"}#op5")
# return sum#op6
# k+k+k+k+k+k=kdef up_to_n(n):
# #5
# Add all the values up to n
# sum=0# op1
# #i = 1 ->
# # k-1,k-2,k-3,k-5,
# #i - 2
# # # k-1,k-2,k-3,k-5,
# # for i in range (1,n+1):# i op2 , 1,n+1<op3>
# sum=sum+1 # op4
# print(f"1 when n is n is {n} sum is {sum}\"}#op5")
# return sum#op6
# -> 4k+n*kdef up_to_n(n):
# #5
# Add all the values up to n
# sum=0# op1
# #i = 1 ->
# # k-1,k-2,k-3,k-5,
# #i - 2
# # # k-1,k-2,k-3,k-5,
# # for i in range (1,n+1):# i op2 , 1,n+1<op3>
# sum=sum+1 # op4
# print(f"1 when n is n is {n} sum is {sum}\"}#op5")
# return sum#op6
# -> Simplify the opreationstart_time=time.perf_counter()
# up_to_n_2(50000*4)
# end_time=time.perf_counter()
# 4k+n*k+k = [4k , n+k]
# -> k=1 second -> [4, n]
# 0-1-> [4, 1]
# n=10000->[4+10000]print(f"when n is n is {n} sum is {sum}\"}#op5")
# high is n(1)-> linear time


stars_time = time.perf_counter()
up_to_n_c(n)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print(f"\n Execution time: {diff_ms} ms")

start_time = time.perf_counter()
up_to_n(n)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print(f"\n Execution time: {diff_ms} ms")


arr = {
    "1": {
        "left": {
            "left": {"1": []},
            "right": {}
        },
        "right": {}
    }
}

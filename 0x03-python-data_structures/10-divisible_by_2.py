#!/usr/bin/python3

def divisible_by_2(my_list=[]):
    res = []
    for i in my_list:
        res.append(True if not i % 2 else False)
    return res

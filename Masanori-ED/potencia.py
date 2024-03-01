def pot(x , e):
    if e == 0: return 1
    return x * pot(x, e - 1)
print (pot(2 , 3))

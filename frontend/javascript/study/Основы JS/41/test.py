
def func(x, n):
    if n == 1:
        return x
    else:
        return x * func(x, n-1)


print(func(3, 3))


function pow(x, n) {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
pow(3, 3)

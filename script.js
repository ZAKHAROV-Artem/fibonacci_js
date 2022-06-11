const fibonacci = (x = 0, y = 1, end = 10) => {
    arr = [x, y]
    for (let i = 0; i < end; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    return arr
}
console.log(fibonacci());
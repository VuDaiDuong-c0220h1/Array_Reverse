let x  = [1, 3, 5, 6, 8, 10, 11];
let first = 0;
let last = x.length - 1;
while (first < last) {
    let b = x[first];
    x[first] = x[last];
    x[last] = b;
    first++ ;
    last-- ;
}
document.write(x);
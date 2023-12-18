<!-- ## Counter without setInterval -->

<!-- Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->

let counter = 0
let timeout = 0
for (let i = 0; i < 10; i++) {
    timeout +=1000
    setTimeout(() => {
        console.log(counter < 10 ? '0' + counter : counter);
        counter++
    }, timeout)
    clearTimeout()
}
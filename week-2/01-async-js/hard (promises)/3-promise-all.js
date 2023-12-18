/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t * 1000)
    })

}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t * 1000)
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, t * 1000)
    })
}

function humanDiff(t1, t2) {
    const diff = Math.max(t1, t2) - Math.min(t1, t2)
    const SEC = 1000, MIN = 60 * SEC, HRS = 60 * MIN

    const hrs = Math.floor(diff / HRS)
    const min = Math.floor((diff % HRS) / MIN).toLocaleString('en-US', { minimumIntegerDigits: 2 })
    const sec = Math.floor((diff % MIN) / SEC).toLocaleString('en-US', { minimumIntegerDigits: 2 })
    const ms = Math.floor(diff % SEC).toLocaleString('en-US', { minimumIntegerDigits: 4, useGrouping: false })

    return `${hrs}:${min}:${sec}.${ms}`
}

async function calculateTime(t1, t2, t3) {
    startTime = new Date()
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)])
    endTime = new Date()

    console.log("Time difference = " + humanDiff(startTime, endTime))
}

module.exports = calculateTime;

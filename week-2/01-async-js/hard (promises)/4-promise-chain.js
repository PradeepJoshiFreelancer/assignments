/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    endTime = new Date()
    promiseAllDifference =  Math.max(startTime, endTime) - Math.min(startTime, endTime)
    console.log("Promise All Time difference = " + humanDiff(promiseAllDifference))

    startTime = new Date()
    await wait1(t1)
    await wait2(t2)
    await wait3(t3)
    endTime = new Date()
    sequenceDifference =  Math.max(startTime, endTime) - Math.min(startTime, endTime)
    console.log("Sequence Time difference = " + humanDiff(sequenceDifference))

    overalAllDifference = Math.max(sequenceDifference, promiseAllDifference) - Math.min(sequenceDifference, promiseAllDifference)
    console.log("Over All Time difference = " + humanDiff(overalAllDifference))
}

module.exports = calculateTime;

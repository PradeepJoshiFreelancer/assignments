<!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a -->
<!-- clock that shows you the current machine time? -->

<!-- Can you make it so that it updates every second, and shows time in the following formats -  -->

 <!-- - HH:MM::SS (Eg. 13:45:23) -->

 <!-- - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->
const displaytime = () => {
    let date = new Date()

    let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let ampm = hour > 12 ? "PM" : "AM"
    let hour2 = hour % 12 < 10 ? "0" + hour % 12 : hour % 12;

    console.log("Clock 1: " + hour + ":" + minutes + ":" + seconds)
    console.log("Clock 2: " + hour2 + ":" + minutes + ":" + seconds + " " + ampm)
}

setInterval(displaytime, 1000);
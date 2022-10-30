



let birthday= new Date("2023-05-20")
let today= new Date()
let remainingDays=((birthday.getTime()-today.getTime())/(1000 * 3600 * 24))
console.log(Math.round(remainingDays) +" Days to my birthday yaaay ^-^ ")

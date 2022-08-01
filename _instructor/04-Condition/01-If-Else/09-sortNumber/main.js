let x = +prompt("Enter Number 1")
let y = +prompt("Enter Number 2")
let z = +prompt("Enter Number 3")


// CASE 1 : x Max
// CASE 2 : y Max
// CASE 3 : z Max


if (x > y && x > z) {
    // alert("X maximum")
    if(y > z){
        console.log(`${x}:${y}:${z}`)
    } else if (z > y) {
        console.log(`${x}:${z}:${y}`)
    }

} else if (y > x && y > z) {
    // alert("Y maximum")
    if (x > z) {
        console.log(`${y}:${x}:${z}`)
    } else {
        // z >= x
        console.log(`${y}:${z}:${x}`)
    }

} else {
    // alert("Z maximum")
    if(x > y) {
        console.log(`${z}:${x}:${y}`)
    } else {
       // y >= x
       console.log(`${z}:${y}:${x}`)

    }

}
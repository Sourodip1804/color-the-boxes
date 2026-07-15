console.log("Script.js initializing...")
// let boxes = document.getElementsByClassName("box") //to get all the boxes in an array and this is a html collection have no for each method

// this can also be written as 



console.log(boxes)

Array.from(boxes).forEach((e) => {
    console.log(e)
})
let changeColor = () => {
    // let squareColor = document.getElementById('input').value
    // console.log(squareColor)

    // let square = document.getElementById('square')

    // square.style.backgroundColor = squareColor

    let square = document.getElementById("square");
    if (square.classList.contains("ok")) {
        square.classList.remove("ok")
        square.classList.add("bad")
    } else {
        square.classList.remove("bad")
        square.classList.add("ok")
    }
}
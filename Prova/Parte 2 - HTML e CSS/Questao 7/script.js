const recieveValue = () => {
    let inputValue1 =  Number(document.getElementById("valor1").value)
    let inputValue2 =  Number(document.getElementById("valor2").value)
    let inputValue3 = Number(document.getElementById("valor3").value)

    let maxNumber = 0
    let minNumber = 0
    let averageNumber = 0

    let results = document.getElementById("results");
    let newDiv = document.createElement("div");

    let MaxNumberTitle = document.createElement("h3")
    let MaxNumberh3 = document.createElement("h3")

    let MinNumberTitle = document.createElement("h3")
    let MinNumberh3 = document.createElement("h3")

    let AverageNumberTitle = document.createElement("h3")
    let AverageNumberh3 = document.createElement("h3")
    
    
    if(inputValue1 > inputValue2 && inputValue1 > inputValue3){
        maxNumber = inputValue1
    } else if (inputValue2 > inputValue1 && inputValue2 > inputValue3) {
        maxNumber = inputValue2
    } else {
        maxNumber = inputValue3
    }
    
    if(inputValue1 < inputValue2 && inputValue1 < inputValue3){
        minNumber = inputValue1
    } else if (inputValue2 < inputValue1 && inputValue2 < inputValue3) {
        minNumber = inputValue2
    } else if (inputValue3 < inputValue1 && inputValue3 < inputValue2) {
        minNumber = inputValue3
    }
    
    averageNumber = (inputValue1 + inputValue2 + inputValue3) / 3

    MaxNumberTitle.textContent = "Maior Número"
    MinNumberTitle.textContent = "Menor Número"
    AverageNumberTitle.textContent = "Média dos Números"

    MaxNumberh3.textContent = maxNumber;
    MinNumberh3.textContent = minNumber;
    AverageNumberh3.textContent = averageNumber;

    results.appendChild(newDiv)
    newDiv.appendChild(MaxNumberTitle)
    newDiv.appendChild(MaxNumberh3)

    newDiv.appendChild(MinNumberTitle)
    newDiv.appendChild(MinNumberh3)

    newDiv.appendChild(AverageNumberTitle)
    newDiv.appendChild(AverageNumberh3)

    newDiv.classList.add("newDiv")
}
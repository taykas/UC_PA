let new_task = () => {
    let task = document.getElementById("task");
    let input_value = document.getElementById("input-to_do").value;

    let new_div = document.createElement("div");

    let new_task_input = document.createElement("h3");
    new_task_input.textContent = input_value;

    let new_button = document.createElement("button");
    new_button.textContent = "X";

    new_button.addEventListener("click", () => {
        new_button.parentElement.remove();
    })

    task.appendChild(new_div)
    new_div.appendChild(new_task_input)
    new_div.appendChild(new_button)

    new_div.classList.add("new_div")
    new_button.classList.add("del-button")
} 

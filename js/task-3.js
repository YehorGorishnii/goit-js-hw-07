const imputItem = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")
imputItem.addEventListener("input", (e) => {
    const inputValue = e.target.value
    console.log(inputValue)

    const displayName = inputValue === '' ? 'Anonymous' : inputValue;

    nameOutput.textContent = displayName
    
})




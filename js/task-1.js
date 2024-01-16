const categoriesList = document.querySelectorAll(".item")

console.log(`Namber of categories: ${categoriesList.length} `)


categoriesList.forEach( item => {
    let categoryName = item.querySelector("h2").textContent 
    let categoryItems = item.querySelectorAll("li").length
    console.log(`Caregory: ${categoryName}`)
    console.log(`Caregory: ${categoryItems}`)
})
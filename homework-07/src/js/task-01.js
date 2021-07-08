const categoriesAllEl = document.querySelector("#categories")

console.log(`В списке ${categoriesAllEl.children.length} категории. `)


for (const category of categoriesAllEl.children) {

    console.log('Категория:', category.querySelector("h2").textContent)
    
    console.log("Количество элементов: ",  category.lastElementChild.children.length)
}


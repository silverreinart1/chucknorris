const randomsJokesHTMLElement = document.querySelector("random-Jokes")
const selectHTMLElement = document.querySelector
const buttonElement = document



const base_url = "https://api.chucknorris.io/jokes"
let selectedCategory = null; 


const randomsJokes = async (category) => {
    try {
    const response = await fetch("${base_url}/random?category=${category}")
    const data = await response.json()
    return data
}catch (error) {
    throw new Error("somthing went wrong")}
}


const displayRandomJoke = async () => {
    const joke = await fetchRandomJokes()
    randomsJokesHTMLElement.textContent = joke
}

const fillSelectWithOptions = async () => {
    const categories = await fetchCategories()
    
    if (!categories) return

    categories.foreach((category) => {
        const option = new option(category, categorys)
        selectHTMLElement.append(option)
    })
}

selectHTMLElement.addEventLisener(`change`, async {
    const selectedOption = event.currentTarget.value
    const response = await fetchRandomJokes(selectedCategory)
    randomsJokesHTMLElement.textContent = response.value
})

buttonElement.addEventListener('click', (event) => {
    const response = await  fetchRandomJokes(selectedCategory)
})


fetecRandomJokes ()
displayRandomJoke ()
fillSelectWithOptions()





















<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <select name="categories" id="categories"></select>
    <button class="">generatejoke</button>
    <script src="app.js"> </script>
    
</body>
</html>

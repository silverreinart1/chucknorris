
const RandomJokeHTMLElement = document.querySelector('.random-jokes')
const CategoriesHTMLElement = document.querySelector('#categories')
const buttonElement = document.querySelector('.generate-joke-button')
 
const base_url = "https://api.chucknorris.io/jokes"
let selectedCategory = null;
 
const fetchRandomJokes = async (category = '') => {
    try {
        const response = await fetch(`${base_url}/random?catecory=${category}`)
        const data = await response.json()
   
        return data
    } catch (error) {
        throw new Error('Something went terribly wrong!')
    }
}
 
const OptionCategory = async () => {
    try {
        const response = await fetch(`${base_url}/categories`)
        const data = await response.json()
   
        return data
    } catch (error) {
        throw new Error('Something went terrible wrong!')
    }
}
 
const displayRandomJoke = async () => {
    const joke = await fetchRandomJokes()
    RandomJokeHTMLElement.textContent = joke.value
}
 
const fillSelectWithOptions = async () => {
    const categories = await OptionCategory()
 
    if (!categories) return
 
    categories.forEach((category) => {
        const option = new Option(category, category)
        CategoriesHTMLElement.append(option)
    })
}
 
CategoriesHTMLElement.addEventListener('change', async (event) => {
    selectedCategory = event.currentTarget.value
    const response = await fetchRandomJokes(selectedCategory)
    RandomJokeHTMLElement.textContent = response.value
})

buttonElement.addEventListener('click', async (event) => {
    const response = await fetchRandomJokes(selectedCategory)
    RandomJokeHTMLElement.textContent = response.value
})
 
 
fetchRandomJokes()
displayRandomJoke()
fillSelectWithOptions()

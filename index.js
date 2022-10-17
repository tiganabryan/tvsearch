const log = console.log
const form = document.getElementById("search-form")
const searchBar = document.getElementById("searchBar")
const searchResultsText = document.getElementById("search-results")
let search

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const previousResultsArray = Array.from(document.querySelectorAll("li"))
    const previousImgsArray = Array.from(document.querySelectorAll("img"))

    previousResultsArray.map((result) => searchResultsText.removeChild(result))
    previousImgsArray.map((result) => searchResultsText.removeChild(result))
    
    search = form.elements.searchBar.value

    const config = { params: { q: search } }
    const shows = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    const data = shows.data

    const showsArray = Array.from(data)

    showsArray.map((show) => {
        const listItem = document.createElement("li")
        listItem.textContent = show.show.name
        searchResultsText.appendChild(listItem)

        if (show.show.image) {
            const listItemImg = document.createElement("img")
            listItemImg.src = show.show.image.medium
            searchResultsText.appendChild(listItemImg)
        }


    // log(showsArray)
    return data
})
})

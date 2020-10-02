// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const append = document.querySelector(".cards-container")

function cardMaker ({ articleObject }) {
    const card = document.createElement("div")
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imgContainer = document.createElement("div")
    const authorImg = document.createElement("img")
    const by = document.createElement("span")

    card.classList.add("card")
    headline.classList.add("headline")
    author.classList.add("author")
    imgContainer.classList.add("img-container")
    authorImg.src = articleObject.authorPhoto
    by.textContent = `By ${articleObject.authorName}`

    headline.addEventListener("click", () => {
        console.log(headline)
    })
}


axios.get("https://lambda-times-api.herokuapp.com/articles").then(futureData => {
    //console.log(futureData.data.articles) //Object with each topic that lists its articles as an array of objects
    for (const [key,value] of Object.entries(futureData.data.articles)) {
        console.log(key)
        console.log(value)
        // value.forEach(element => {
        //     const newArticle = cardMaker({ element })
        //     append.appendChild(newArticle)
        // })
    }

}).catch(drama => {
    console.log(drama)
})
// Going to need a seperate append statement for each section/topic. data.articles returns the sections/topics. so articleObject in the function should refer to a specific topic?

// The object thats placed inside the function is the one nested inside the array 

// Code didnt work 
// const jsArticles = futureData.data.articles.javascript
// jsArticles.forEach(element => {
//     const newArticle = cardMaker({ articleObject: element})
//     jsAppend.appendChild(newArticle)
// })
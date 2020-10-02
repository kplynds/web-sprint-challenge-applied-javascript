// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element 
const appendHere = document.querySelector(".topics")

// axios.get("https://lambda-times-api.herokuapp.com/topics").then(futureData => {
//      console.log(futureData.data.topics)
//  }).catch(drama => {
//      console.log(drama)
//      debugger
//  })



function topicMaker ({ topicText} ) {
    const tab = document.createElement("div")
    tab.classList.add("tab")
    tab.textContent = topicText
    return tab
}



 axios.get("https://lambda-times-api.herokuapp.com/topics").then(futureData => {
     const tabs = futureData.data.topics
     tabs.forEach(element => {
         const newTab = topicMaker({ topicText: element})
         appendHere.appendChild(newTab)
     })
 }).catch(drama => {
     console.log(drama)
 })

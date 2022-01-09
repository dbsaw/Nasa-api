function handler(e){
  // making the request then puting the data to Tdata function
  // You need api token from https://api.nasa.gov/
  console.log(e.target.value);
  fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${e.target.value}`)
  .then(response => response.json())
  .then(data => Tdata(data));
}


function Tdata(data){
// json data description
const title = data.title
const explanation = data.explanation
const url = data.url

// display data to html
const container = document.getElementById('data')
container.innerHTML = " "
// creating elements
const TitleD = document.createElement('h1')
TitleD.innerHTML = `Tilte: ${title}`

const ExplanationD = document.createElement('p')
ExplanationD.innerHTML = `description: ${explanation}`

const ImgU = document.createElement('img')
ImgU.src = `${url}`

// appending the elements to container
container.appendChild(TitleD)
container.appendChild(ExplanationD)
container.appendChild(ImgU)
}

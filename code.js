function handler(e){
    console.log(e.target.value);
    // making the request then puting the data to 
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
  
  // creating elements
  const TitleD = document.createElement('h1')
  TitleD.innerHTML = `Tilte: ${title}`
  
  const ExplanationD = document.createElement('p')
  ExplanationD.innerHTML = `description: ${explanation}`

  const ImgU = document.createElement('img')
  ImgU.src = `${url}`
  
  // appending the elements to container
  container.prepend(ImgU)
  container.prepend(ExplanationD)
  container.prepend(TitleD)

}


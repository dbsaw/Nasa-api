let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();

if (dd < 10) {
   dd = '0' + dd;
}

if (mm < 10) {
   mm = '0' + mm;
} 
    
today = yyyy + '-' + mm + '-' + dd;
document.getElementById('dite').setAttribute("max", today);

function handler(e){
  // making the request then puting the data to 
  // console.log(e.target.value);
  fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${e.target.value}`)
  .then(response => response.json())
  .then(data => Tdata(data))
}


function Tdata(data){
// json data description
const title = data.title
const explanation = data.explanation
const url = data.url
const copyright = data.copyright

// display data to html
const container = document.getElementById('data')
container.innerHTML = " "


// creating elements


// Title Element
const TitleD = document.createElement('div')
TitleD.className = 'p-3 text-primary border-bottom'

const TitleE = document.createElement('h1')
TitleE.innerHTML = `<strong >${title}</strong>`
TitleD.appendChild(TitleE)

// Description Element
const ExplanationD = document.createElement('div')
ExplanationD.className = 'bd-callout bd-callout-info'

const ExplanationE = document.createElement('p')


const noChr = 150
if (explanation.length > noChr){
  const displayText = explanation.slice(0,noChr)
  const moreText = explanation.slice(noChr)
  ExplanationE.innerHTML = `<strong class="text-warning">Description:</strong> ${displayText} <span class="dots">...</span> <span class="hidemore"> ${moreText} </span>`
  const rmore = document.createElement('button')
  rmore.innerHTML = 'Read More'
  rmore.className = 'btn btn-warning'
  rmore.addEventListener("click",function (){
    ExplanationE.innerHTML = `<strong class="text-warning">Description:</strong> ${explanation}`
    rmore.className = 'hidemore'
  })
  ExplanationD.appendChild(ExplanationE)
  ExplanationD.appendChild(rmore)

}
else{
  ExplanationE.innerHTML = `<strong class="text-warning">Description:</strong> ${explanation}`
  ExplanationD.appendChild(ExplanationE)
}
// Image Element
const ImgD = document.createElement('div')
ImgD.className = 'p-3 border border border-secondery '

const ImgU = document.createElement('img')
ImgU.className = 'img-fluid'
ImgU.src = `${url}`
ImgD.appendChild(ImgU)


// appending the elements to container
container.appendChild(TitleD)
container.appendChild(ExplanationD)
container.appendChild(ImgD)
}

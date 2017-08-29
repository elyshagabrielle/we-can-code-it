function sendApiRequest() {
   var userInput = document.getElementById("input1").value
   console.log(userInput)
   var giphyApiKey = "b88520c728184ddea08074d5cfaefa2d"
   
   var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`
//grab element using a DOM function/method


   fetch(giphyApiUrl)
   .then(function(data) {
       return data.json()
   })
   .then(function(json) {
       // here we'll code out what we want to do with the data
       console.log(json.data[0].images.fixed_height.url)
       //[0].images.fixed_height.url
       var imgPath= json.data["0"].images.fixed_height.url
       var img = document.createElement("img")
       img.setAttribute("src",imgPath) //src attribute for an image source (attribute,what setting attribute to)
       img.setAttribute("class","imggif")
       document.getElementById("content").appendChild(img)
      // document.body.appendChild(img)
   })
}


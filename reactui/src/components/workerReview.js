export default () => {
    self.addEventListener("message", e => {
      var movieTitle = e.data;
      fetch('https://api.popcorntales.com/moviereview?movie='+movieTitle,{
        headers : {
          'Accept': 'application/json'
         }})
      .then(response => response.json())
      .then(result => {
        postMessage(result);
      })
      .catch(error =>{
        postMessage("Redirect");
      });

    })

  };
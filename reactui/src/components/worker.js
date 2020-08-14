export default () => {
    self.addEventListener("message", e => {
        fetch('https://api.popcorntales.com/movie')
        .then(response => response.json())
        .then(result => {
            postMessage(result);
        })
        .catch(error => {
          console.error(error);
        })

    });


  };
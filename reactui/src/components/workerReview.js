export default () => {
    self.addEventListener("message", e => {
      var movieTitle = e.data;
      fetch('https://api.popcorntales.com/moviereview?movie='+movieTitle,{
        headers : {
          'Accept': 'application/json'
         }})
      .then(response => response.json())
      .then(result => {
        result.review=JSON.parse(result.review);
        var schema = getSchema(result);
        var data={
          schema:schema,
          movie:result
        }
        postMessage(data);
      })
      .catch(error =>{
        postMessage("Redirect");
      });

    })

    function getSchema(movie){
      var ticketDetails = JSON.parse(movie.ticketDetails);
     var jsonbody= {
        "@context" : "http://schema.org",
        "@type" : "Movie",
        "name" : movie.title,
        "image" : movie.titleImage,
        "author": {
          "@type": "Person",
          "name": "Vinay Prabhu"
        },
        "director": {
          "@type": "Person",
          "name": movie.cast[0].split("-")[0].trim()
        },
        "dateCreated": ticketDetails.watchDate,
        "review" : {
          "@type" : "Review",
          "author" : {
            "@type" : "Person",
            "name" : "Vinay Prabhu"
          },
          "reviewRating" : {
            "@type" : "Rating",
            "ratingValue" : movie.rating
          },
          "reviewBody" : movie.review.synopsis
        }
      }
      return JSON.stringify(jsonbody)
    }
  };
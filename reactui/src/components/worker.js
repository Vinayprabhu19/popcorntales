export default () => {
    self.addEventListener("message", e => {
      fetch('https://api.popcorntales.com/movie')
      .then(response => response.json())
      .then(result => {
        //  result = processImageData(result);
         var filterData = getFilteredData(result);
         var schema = getSchema(result);
         const rvs = result.map(item => {
          return item;
          });
          var currentPages = [];
          var len = (rvs.length > 8) ? 8 : rvs.length;
          for (var i = 0; i < len; i++) {
            currentPages.push(rvs[i]);
          }
          var data = {
            filterData:filterData,
            movies:result,
            schema:schema,
            rvs:rvs,
            currentPages:currentPages
          }
        postMessage(data);
      });

    });

    function getSchema(movieList) {
      var jsonbody = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": []
      };

      for (var i = 0; i < movieList.length; i++) {
        var movie = movieList[i];
        var item = {
          "@type": "ListItem",
          "position": i + 1,
          "url": "https://popcorntales.com/" + movie.title
        }
        jsonbody.itemListElement.push(item);
      }
      return JSON.stringify(jsonbody)
    }
    function getFilteredData(result) {
      var filterData={
        languages:["All"],
        years:["All"]
      }
      for (var i = 0; i < result.length; i++) {
        if (filterData.languages.includes(result[i].language)) continue;
        filterData.languages.push(result[i].language);
      }
      for (var i = 0; i < result.length; i++) {
        if (filterData.years.includes(result[i].year)) continue;
        filterData.years.push(result[i].year);
      }
      filterData.years.sort();
      return filterData;
    }
  };
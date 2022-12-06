// function processData () {
//     var data = fetchData ();
//     data += 1;
//     return data;
//   }
function fetchdata(){
    var n= readfile().count
}
    function processData (callback) {
      fetchData(function (err, data) {
        if (err) {
          console.log("An error has occurred. Abort everything!");
          return callback(err);
        }
        data += 1;
        callback(data);
      });
    }
module.exports = {

  all: function(req,res) {

    // THIS IS WHERE WE WILL GET DATA...
    const data = [{
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRP1Zc_dUgTpksQPszIa2vbRLau0UQZgoPqrz7Qu4aqXTTtu9_Om0HVuzBvAftnSXmGXDiX5wNfUybi59IPy7pkUbZ1OJ3hVrHEeXRjfLE&usqp=CAc",
      price: 45.99,
      age: 5
    }, {
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRP1Zc_dUgTpksQPszIa2vbRLau0UQZgoPqrz7Qu4aqXTTtu9_Om0HVuzBvAftnSXmGXDiX5wNfUybi59IPy7pkUbZ1OJ3hVrHEeXRjfLE&usqp=CAc",
      price: 48.99,
      age: 8
    }, {
      src: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRP1Zc_dUgTpksQPszIa2vbRLau0UQZgoPqrz7Qu4aqXTTtu9_Om0HVuzBvAftnSXmGXDiX5wNfUybi59IPy7pkUbZ1OJ3hVrHEeXRjfLE&usqp=CAc",
      price: 42.99,
      age: 58
    }];

    return res.view('pages/bourbon', {
      myKey: data
    });
  }
}

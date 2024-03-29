//4. Your `apiRoutes.js` file should contain two routes:

  // * A GET route with the url `/api/friends`. 
  //This will be used to display a JSON of all possible friends.
 //  * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
 //This route will also be used to handle the compatibility logic.

var friendData = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
       res.json(friendData);
     });

    app.post("/api/friends", function(req, res) {
        // search for best match here? 5 is from restaunt exercise
        if (friendData.length < 5) {
            friendData.push(req.body);
            res.json(true);
        }
    
     
     });
}



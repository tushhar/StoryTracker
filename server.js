let ex = require("express") ;

let bodyParser = require("body-parser");

// create application/json parser
var jsonParser = bodyParser.json() ; 

let ws = ex();

ws.use ( ex.static("dist") ) ;

// handling http requests with different URLs 
// on newly created socket by listen() function
ws.get ( "/", (req, res) => { 
    res.sendFile ( __dirname + "/dist/index.html" ) ;
}); 

// send info to browser to accept Cross Domain Data
// by intercepting all requests
ws.use (  ( req, res, next ) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-METHODS", "GET,POST,DELETE");
    next() ; // let the request go to get / post / delete/ put
});

 defects =[
    {idn:1,story:"asd",developer:"dev" 	,tester:"test", 	analysis:true ,	coding:false 	,testing:false ,	done:false,block:false},
    {idn:2,story:"asd",developer:"dev2" 	,tester:"test", 	analysis:true ,	coding:true 	,testing:false ,	done:false,block:false},
    {idn:3,story:"asd",developer:"dev3" 	,tester:"test", 	analysis:true ,	coding:false 	,testing:false ,	done:false,block:false},
    {idn:4,story:"asd",developer:"dev4" 	,tester:"test", 	analysis:true ,	coding:true 	,testing:true ,	done:true,block:false}  
  ];

// read
ws.get ( "/defects", (req, res) => {
    res.json (defects) ;
}) ;

ws.put('/defect/:idn',jsonParser, (req, res) => {
    
        console.log("PUT defect: " + req.params.idn);
    
        // read the ID from the query string
        let id = req.params.idn;
    
        // find the requested defect in the array
        let f = defects.find(x => x.idn == id);
        let bi = defects.indexOf(f);
        // write the new name to the data storage
        f.story = req.body.story;
        f.developer = req.body.developer;
        f.tester = req.body.tester;
        f.analysis = req.body.analysis;
        f.coding = req.body.coding;
        f.testing = req.body.testing;
        f.done = req.body.done;
        f.block = req.body.block;
        defects[bi]=f;
        // send a copy of the modified object back to the caller
        res.send(f);
    
    });
    
    // DELETE endpoint for deleting defect
    ws.delete('/defect/:idn',jsonParser, (req, res)=> {
    
        console.log("DELETE defect: " + req.params.idn);
    
        // read the ID from the query string
        // (DELETE requests don't have a body)
        let id = req.params.idn;
    
        // read the object from the data (so we have it later)
        let f = defects.find(x => x.idn == id);
    
        // remove it from the data
        defects = defects.filter(x => x.idn != id);
    
        // send back the object we deleted, in case the caller wants to look at what was there
        res.send(f);
    });
    
    ws.post('/defect',jsonParser, (req, res)=> {
        // NOTE: This is a sample ws to show the Angular Http client functionality.
        // This API endpoint keeps the submitted data in memory. It does not save to a database.
    
        // This example uses Express because it is easy to install and run.
        // You could write a different back-end ws in PHP, Python, Ruby, .NET, etc.
    
        
    
        // calculate the next ID
        let id = defects.length+1;

        console.log("POST defect: " + id);

        // build the new defect object
        let new_defect = {"idn": id, "story": req.body.story, "developer": req.body.developer, "tester": req.body.tester, "analysis": req.body.analysis, "coding": req.body.coding, "testing": req.body.testing, "done": req.body.done, "block": req.body.block};
    
        // "save" the data by adding it to the "defects" array in memory
        defects.push(new_defect);
    
        // In the real world, you would put code here to save the data to a
        // database or another type of storage.
    
        // When we're done, it's nice to return the newly created object to the caller.
        res.send(new_defect);
    
    });

ws.listen ( process.env.PORT || 5000, () => {
    console.log ( "web api runnin on 5000") ;
} ) ;
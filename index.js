const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path')
//fetching json data from a placeholder
const getApi =fetch('https://jsonplaceholder.typicode.com/posts')
.then(function(response){
    return response.json()
})
.then(function (data){
    let DataToString = '';


    //Stringify the fetched data
    DataToString += JSON.stringify(data, null, "\t");
    
fs.mkdir(path.join(__dirname, 'Result'),{ recursive: true }, (err) => { 
        if (err) { 
           return console.error(err); 
}
});

    //writing to a file post.json
    fs.writeFile('Result/Posts.json', DataToString, err=>{
        if(err){
        console.log("Invalid file update", err)
    } else{
    console.log('Successful file update');
 }
});


}).catch(function(err){
    console.log(err)
})
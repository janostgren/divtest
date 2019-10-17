var request = require("request");

//var userDetails = "";


function initRequest(options) {
    
    // Return new promise 
    return new Promise(function (resolve, reject) {
        // Do async job
        request.get(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })

}



async function doRequest(maxTime) {

    // Setting URL and headers for request
    var options = {
        url: 'https://api.github.com/users/narenaryan',
        headers: {
            'User-Agent': 'request'
        }
    };
    

    try {
        let response = await initRequest(options);
        
        //console.log(response.body);
        return response;
        
    } catch (err) {
        console.error(err);
        return err;
    }

}




//const delay = ms => new Promise(res => setTimeout(res, ms));

async function x() {

    let maxTime = 2000;
    let userDetails=await doRequest(maxTime)

    console.log(userDetails)
    console.log("--end--")
}
x();
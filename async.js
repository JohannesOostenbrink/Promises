const myPromise = newPromise((resolve, reject) =>{ //This promise will eventually have 
                                                   // a value. Either a resolved one or a rejected one.
                                                // We use the resolved value if for example our API call is successful 
                                                // Promise will pending until resolve or reject is called                                                                       
    if(true){
           setTimeout(() =>{                   // setTimeout is a function that takes the callback and a time as its second argument
                                               
        resolve('I have succeeded' // this can be any value
        );
    }, 1000);
    }else {
        reject('I have failed');
    }


 
})

myPromise
.then(value // this will be the value passed in resolve / or just 'value' Im not sure 
 => console.log(value))
.catch(rejectValue => console.log(rejectValue)); 

// With promise we can seperate successful from unsuccessful API calls 
//promise is used because we never know if server delivered material successfully
// When you use fetch, it returns a promise value while it makes a API request to the URL you requested
// If error then fetch will reject promise 
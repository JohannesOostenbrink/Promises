const myPromise = newPromise((resolve, reject) =>{
    if(true){
           setTimeout(() =>{
        resolve('I have succeeded');
    }, 1000);
    }else {
        reject('I have failed');
    }


 
})

myPromise
.then(value => console.log(value))
.catch(rejectValue => console.log(rejectValue)); 

// Promise is what is essentially says. It is a promise that the object will return a vale. 
//It will either be resolved or rejected 
// The resolved value we use when our API for ex is successfull 
//The promise will be in a state that is pending when
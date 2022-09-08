async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
}

async function run1000(): Promise<void> {
const promises: Promise<number>[] = [];
  for(let i=0; i< 1000;i++) {
       promises.push(getNumberFromServer());
  }

for(const p of promises){
     await p
}
}

//---------------the problem in run1000 function:
//When activating the function, a synchronization problem may arise between the creation of the array
// and the activation of the functions from it,
// due to the reason that the two functions are not synchronized with each other


//To fix the function, synchronization will be performed on filling
// the synchronous functions array from the server.
//So the improve function it will look like:

async function improveRun1000(): Promise<void> {
  const promises: Promise<number>[] = [];
    for(let i=0; i< 1000;i++) {
        await promises.push(getNumberFromServer());
    }
  
  for(const p of promises){
      p
    }
}




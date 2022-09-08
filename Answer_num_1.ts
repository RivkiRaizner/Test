//T1
// In order to improve the function, we will perform the two readings 
//when they are not synchronous with each other so that they can be performed
// at the same time and the result will be synchronized until the two readings return.
async function getNumberFromServer(): Promise<number> {
    //some api call to return a number from a remote server
} 

async function improveMyFunc()
{
  let x1 = getNumberFromServer();
  let x2 = getNumberFromServer();
  return await x1 + await x2;
}

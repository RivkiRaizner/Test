interface INode {
    name: string;
    children: INode[];
  }

  let rootInode : INode;

  function findIndexOfInode(indexOfInode: number): void {
    let arrInodes:Array<INode> = [];
    while(arrInodes.length < indexOfInode) {
    //saving the current Inode index
    let index  = 0;
        arrInodes.push(rootInode);
       //Go over the children of the inode while checking that we haven't passed the desired index
        for(let i = 0; i<rootInode.children.length; i++){
            arrInodes.push(rootInode.children[i]);
        }
        index ++;
        rootInode = arrInodes[index]
    }
    //send to print from the desired index
    PrintNamesOfDescendants_recursive(arrInodes[indexOfInode-1])
}

//print names of descendants recursively
const PrintNamesOfDescendants_recursive =(parentInode : INode) =>{
    if (parentInode === null) 
        return;
    for (let i = 0; i < parentInode.children.length; i++){
        PrintNamesOfDescendants_recursive(parentInode.children[i]);
        console.log(parentInode.children[i].name);
    } 
    
}
//print names of descendants not recursively
const PrintNamesOfDescendants_notRecursive =(parentInode : INode) => {
    if (parentInode === null) 
        return;
    let arrayChildren : Array<INode> = [];
    let indexOfInode = 0;
    arrayChildren.push(parentInode);
    console.log(parentInode.name);
    while(parentInode)
    {
        for (let i = 0; i < parentInode.children.length; i++){
                console.log(parentInode.children[i].name);
            } 
        //index of parent that has children printed out
        indexOfInode ++;
        //advancing the root to the next child
        parentInode = arrayChildren[indexOfInode];
    }
}


/*
Advantages of Recursion:
+ Recursive functions make the code look clean and elegant.
+ A complex task can be broken down into simpler sub-problems using recursion.
+ Sequence generation is easier with recursion than using some nested iteration.
but-
- Sometimes the logic behind recursion is hard to follow through.
- Recursive calls are expensive (inefficient) as they take up a lot of memory and time.
- Recursive functions are hard to debug.
*/


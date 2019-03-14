/*
    Difficulty: Easy    

    Write method for binary tree that traverses the tree in order, running a closure on each node.

    Tip: traversing a node in order means visiting its left node, then visiting its own value, then visiting its right value.

    Samples:
    let tree = new BinarySearchTree([2, 1, 3]);
    1) tree.root.traverse(n => console.log(n.key));
       should print out 
       1
       2 
       3
    2) let values = [];
       tree.root.traverse(n => values.push(n.key));
       values.length == 3
    3) let sum = 0;
       tree.root.traverse(n => sum += n.key);
       sum == 6
*/

class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(array){
        this.root=null;
        this.output=null;

        for(let item of array){
            let placed=false;
            //console.log(item);
            
            if(this.root!=null){
               //we already have a root make it a tracker
               let tracker=this.root;
               while(!placed){
                  if(item<=tracker.data){
                      if(tracker.left==null){
                          tracker.left=new Node(item);
                          placed=true;
                      }
                      tracker=tracker.left;
                  }
                  else{
                      if(tracker.right==null){
                          tracker.right=new Node(item);
                          placed=true;
                      }
                      tracker=tracker.right;
                  }
               }
            }
            else{
                this.root=new Node(item);
            }
        }
    }
    
    /*
    printTree(node){
      //Pre Order Traversal
      console.log(node.key);
      if(node.left!=null){
         this.printTree(node.left);
      }
      
      if(node.right!=null){
        this.printTree(node.right);
      }
    
    }
    */
    traverseTree(node){
        if(node==null) return null;
        //Traverse Left
        this.traverseTree(node.left);
        //Print Node value
        console.log(node.data);
        //Traverse Right
        this.traverseTree(node.right);
    }
    
}

//let arr=[10,9,7,5,4,1,2,3,100,1];
let arr=[10,9,8,7,6,5,4,3,2,1];
let tree=new Tree(arr);
console.log(tree);
tree.traverseTree(tree.root);
function replaceCallExpression(node) {
  
	let newNode = { ...node };	

  if (newNode.arguments && newNode.arguments.some((el) => el.type === 'ArrowFunctionExpression')) {
    newNode.arguments.forEach((arg, i) => {    
      if (arg.body && arg.body.type !== 'BlockStatement') {
        let oldBody = { ...newNode.arguments[i].body };
        let newBody = { 
          type: 'BlockStatement',
          body: [
            {
              type: 'ReturnStatement',
              argument: { ...oldBody }
            } 
          ]
        };
        newNode.arguments[i].expression = false;
        newNode.arguments[i].body = newBody;
      } 
						//else if(arg) {
    //    newNode.arguments[i].body.type = 'BlockStatement';
   //   }  
     // newNode.arguments[i].type = 'FunctionExpression';
      arg.type = 'FunctionExpression';
    });
  } 
  newNode.arguments.forEach((arg, i) => {
    if (arg.type === 'ThisExpression') {
      newNode.arguments[i].type = 'Identifier';
      newNode.arguments[i].name = 'self';
    } else if (arg.type === 'BinaryExpression') {
      newNode.arguments[i].operator = '==';
    }
  }); 
  return newNode;
}
module.exports = { replaceCallExpression };


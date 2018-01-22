let lib={
  toStr : function(obj){JSON.stringify(obj,null,2)},

  parseTitlesToHtml:function(todoTitles){
    let content='';
    let id=0;
    todoTitles.forEach((title)=>{
      content+=`<input type='checkbox' id='${id}' onclick=check() >
      <button id=${id} onclick=viewTodo(id)>${title}</button>`;
      content+=`<p><button id=${id}>Edit</button>`;
      content+=`<button id=${id} onclick=deleteTodo(id)>Delete</button><br></p>`;
      id++;
    });
    return content;
  },

  parseTodoToHTML:function(todoId,todo){
    let id=0;
    let content=`<h2>${todo.title}</h2><br><h3>${todo.description}</h3>`;
    todo.todoItems.forEach(function (item) {
      content+=`<br><br><input type="checkbox" id=${todoId}_${id}>${item.text}`;
      content+=`&nbsp <button id=${todoId}_${id} onclick="editItem(id)">Edit</button>`;
      content+=`<button id=${todoId}_${id} onclick="deleteItem(id)">Delete</button>`;
      id++;
    });
    return content;
  },

  addItems:function(user,id,items){
    if (typeof items == 'string') {
      user.addTodoItem(id,items);
    }if (typeof items =='object') {
      items.forEach(function (item) {
        user.addTodoItem(id,item);
      });
    }
  },

  getUserData:function(req,regUsers=reg_users){
    return regUsers.find(u=>u.userName==req.body.userName&&u.password==req.body.pwd);
  },

  getDummyUser:function(){
    let dummyUser=`[
    {
      "userName": "sudhin",
      "password": "123",
      "todoList": [
        {
          "title": "Sample todo",
          "description": "for testing",
          "todoItems": [ { "item": "Tesing item 1","checked": false } ]
        }
      ]
    }]`;
    return dummyuser;
  },

  removeItem:function (todoId,itemId,user) {
    user.deleteTodoItemOf(todoId,itemId);
    let todo=user.getTodoOf(todoId);
    return lib.parseTodoToHTML(todoId,todo);
  },

}
module.exports=lib;
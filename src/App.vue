<template>
  <body>
    <div class="container">
      <div class="input_container">
        <h1>My To Do List</h1>
        <input id="inputBox" type="text" placeholder="Add a new to do.." v-model="task" @keyup.enter="addtask($event)" ref="inputbox"/>
        <button id="addButton" @click="addtask()">Add</button>
      </div>
      <ul class="todolist" id="todoList">
        <li class="todostask" v-for="(todo, taskindex) in todos" :key="taskindex">
          <p class="para" :id="taskindex" :class="{active: todo.iscompleted}">{{ todo.taskname }}</p>
            <Edit-button @click="editTask(todo.taskname, taskindex)"></Edit-button>
            <Remove-button  @click="removeTask(taskindex)"></Remove-button>
            <Completed-button @click="completedTask(todo.taskname)" ref="clickvalue">{{ todo.iscompleted ? 'Incompleted' : 'Completed'}}</Completed-button>
        </li>
      </ul>
  </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      todos: [],
      isempty: false,

    }
  },
  methods: {
    addtask() {
      if (this.task === '') {
        this.isempty = true;
        alert('Please add some task')
        return
      }
      else{
        this.isempty = false;
      const details = {
        taskid: this.task,
        taskname: this.task,
        iscompleted: false  
      }  
      this.todos.push(details)
      console.log(this.todos.iscompleted, 'this is iscompleted')
      console.log(this.todos)
      console.log(this.task)
      this.task = ''
      }
    },
    editTask(edittask, index) {
      if(this.todos.length != 0){
        this.task = edittask
        this.todos.splice(index, 1)
        this.$refs.inputbox.focus()
        this.currentbtn = 'edit'   
      }else{
        alert('Please add some tasks')
      }  
    },
    removeTask(index) {
      if(this.todos.length != 0){
        this.todos.splice(index, 1)
        this.currentbtn = 'remove'      
      }else{
        alert('Please add some tasks')
      }  
    },
    completedTask(todo) {
      const completedtask = this.todos.find((Todo) => Todo.taskname === todo)
      completedtask.iscompleted = !completedtask.iscompleted
      this.currentbtn = 'completed'
    }
  }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: rgb(138, 255, 246);
  background: linear-gradient(
    90deg,
    rgba(138, 255, 246, 1) 2%,
    rgba(165, 242, 244, 1) 47%,
    rgba(232, 232, 232, 1) 100%
  
  );
  height: 710px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.input_container {
  width: 100%;
  max-width: 500px;
  text-align: center;
  padding: 20px;
}

.input_container input {
  border: none;
  outline: none;
  padding: 12px;
  margin-block: 12px;
  border-radius: 4px;
  font-size: 16px;
}

.input_container input[type="text"] {
  width: 70%;
}

.input_container input[type="button"] {
  background-color: #ff9100;
  font-weight: 700;
  margin-left: 15px;
  padding: 12px 25px;
}

#addButton:hover {
  background-color: #ac6200;
}

#addButton{
  background-color: #ff9100;
  font-weight: 700;
  margin-left: 15px;
  padding: 12px 25px;
}

.todolist {
  width: 100%;
  max-width: 450px;
  /* display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; */
}

.todostask {
  list-style-type: none;
  cursor: pointer;
  border-radius: 8px;
  border: 0.125px solid #a19f9f;
  margin-block-end: 12px;
  padding: 6px 12px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 10px 8px 5px 0px black;
  border: none;
}

.para {
  flex-grow: 1;
  padding: 2px;
}

.active {
  text-decoration: line-through;
}
</style>
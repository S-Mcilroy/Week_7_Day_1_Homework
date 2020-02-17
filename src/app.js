import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {task: "Buy shopping",priority: "High"},
        {task: "Clean bathroom",priority: "Low"},
        {task: "Car's MOT",priority: "High"}
      ],
      newTodo: "",
      newPriority: ""
    },
    methods: {
      saveNewTodo: function() {
        this.todos.push({
          task: this.newTodo,
          priority: this.newPriority});
          this.newTodo = "";
          this.newPriority = "";
        }
      }
    });
  });

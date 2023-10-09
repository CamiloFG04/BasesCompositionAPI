import { createStore } from 'vuex'
import { v4 as uuidv4 } from "uuid";
export default createStore({
  state: {
    todos: [
      {id: '1', text: 'Recolectar las piedras del infinito', completed: false},
      {id: '2', text: 'Piedra del alma', completed: true},
      {id: '3', text: 'Piedra de poder', completed: true},
      {id: '4', text: 'Piedra de realidad', completed: false},
      {id: '5', text: 'Conseguir nuevos secuaces competentes', completed: false},
    ]
  },
  getters: {
    pendingTodos(state, getters,rootState){
      return state.todos.filter(t => !t.completed)
    },

    allTodos(state,getters,rootState){
      return state.todos
    },

    completedTodos(state,getters,rootState){
      return state.todos.filter( t => t.completed)
    },

    getTodosByTab: (_,getters) => (tab) => {
      if (tab === 'all') return getters.allTodos
      if (tab === 'pending') return getters.pendingTodos
      if (tab === 'completed') return getters.completedTodos
    }

  },
  mutations: {
    toggleTodo(state,id){
      const todo = state.todos.find( t => t.id === id)
      todo.completed = !todo.completed
    },
    createTodo(state, text = ''){
      console.log(text,state);
      if(text.length <=1) return
      state.todos.push({
        id: uuidv4(),
        completed: false,
        text
      })
    }
  },
  actions: {
  },
  modules: {
  }
})

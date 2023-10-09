<template>
  <h1>Lista de tareas de Thanos</h1>
  <h4>Pendientes: {{pending.length}}</h4>
  <hr>
  <button @click="currentTab = 'all'" :class="{'active': currentTab === 'all'}">Todos</button>
  <button @click="currentTab = 'pending'" :class="{'active': currentTab === 'pending'}">Pendientes</button>
  <button @click="currentTab = 'completed'" :class="{'active': currentTab === 'completed'}">Completados</button>

  <div>
    <ul>
      <li :class="{'completed' : todo.completed}" v-for="todo in todosByTab" :key="todo.id" @dblclick="toggleTodo(todo.id)" >{{todo.text}}</li>
    </ul>
  </div>

</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(){
    const store = useStore()

    const currentTab = ref('all')

    return {
      currentTab,
      
      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      pending: computed(() => store.getters['pendingTodos']),
      todosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),

      // Methods
      toggleTodo: (id) => store.commit('toggleTodo',id)
    }
  }
}
</script>

<style scoped>
  div{
    display: flex;
    justify-content: center;
    text-align: center;
  }
  ul{
    widows: 300px;
    text-align: left;
  }
  li{
    cursor: pointer;
    margin-bottom: 5px;
  }
  .active{
    background-color: #2c3e50;
    color: white;
  }
  .completed{
    text-decoration: line-through;
  }

</style>
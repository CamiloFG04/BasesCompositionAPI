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

  <button @click="openModal">Crear Tarea</button>
  <modal v-show="isOpen" title="Hola Mundo" @on:close="closeModal">
    <template v-slot:header>
      <h3>Crear nueva Todo</h3>
    </template>
    <template v-slot:body>
    <form @submit.prevent="createTodo(newTodo)">
      <input type="text" v-model="newTodo">
      <button type="submit">Guardar</button>
    </form>

    </template>
  </modal>

</template>

<script>
import useTodo from "@/composables/useTodo";
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal,
  },
  setup(){

    const {
      createTodo,
      currentTab, 
      pending,
      newTodo,
      todosByTab, 
      toggleTodo,
      isOpen,
      closeModal,
      openModal,
    } = useTodo()

    return {
      createTodo,
      currentTab, 
      pending, 
      todosByTab, 
      toggleTodo,
      isOpen,
      newTodo,
      closeModal,
      openModal,
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
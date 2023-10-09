import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const useTodo = () => {
    const store = useStore()

    const currentTab = ref('all')
    const isOpen = ref(false)
    const newTodo = ref('')

    const createTodo = (text) => {
      store.commit('createTodo',text)
      isOpen.value = false
    }

    return {
      currentTab,
      isOpen,
      newTodo,

      all: computed(() => store.getters['allTodos']),
      completed: computed(() => store.getters['completedTodos']),
      pending: computed(() => store.getters['pendingTodos']),
      todosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
      
      // Methods
      closeModal: () => isOpen.value = false,
      openModal: () => isOpen.value = true,
      toggleTodo: (id) => store.commit('toggleTodo',id),
      createTodo
    }
}

export default useTodo
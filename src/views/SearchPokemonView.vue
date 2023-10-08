<template>
  <h1>Buscar Pokemon: {{pokemonId}}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" placeholder="Número del pokemon" v-model="pokemonId" ref="inputId">
  </form>
  <br>
  <span>Presione enter para buscar</span>
  <h3 v-if="pokemonUndefind">{{pokemonUndefind}}</h3>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter} from 'vue-router'
export default {
  setup(){
    const router = useRouter()

    const pokemonId = ref(1)
    const pokemonUndefind = ref('')
    const inputId = ref()

    onActivated(() =>{
      inputId.value.select()
    })

    return { 
      pokemonId,
      pokemonUndefind,
      inputId,
      onSubmit: () => {
        if (pokemonId.value >= 0) {
          router.push({name:'pokemon-view',params:{id:pokemonId.value}})
        }else{
          pokemonUndefind.value = `El pokemon ${pokemonId.value} no es un valor correcto`
        }
      }
    }
  }
}
</script>
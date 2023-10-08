<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{name}}</h3>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<script>
import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onErrorCaptured,onRenderTriggered,onRenderTracked,onActivated,onDeactivated, ref} from 'vue'

export default {
  setup() {

    const name = ref('Camilo Fernandez')
    
    console.log('Setup se llamo');

    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    })
    onRenderTracked(() => {
      console.log('onRenderTracked');
    })
    onActivated(() => {
      console.log('onActivated');
    })
    onDeactivated(() => {
      console.log('onDeactivated');
    })

    return {
      name,
      changeName: () => name.value = 'Nadia Vega'
    }

    // onServerPrefetch()

  },
}
</script>

<template>
    <h1>Slots</h1>
    <button @click="openModal">Abrir modal</button>

    <modal v-show="isOpen" title="Hola Mundo" @on:close="closeModal">
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolores ab ipsum molestiae!</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Cerrar</button>
        </template>
        <template v-slot:header>
            <h2>Titulo del modal</h2>
        </template>
        <template v-slot:exposed="{newTitle}">
            <h2>{{newTitle}}</h2>
        </template>
    </modal>

</template>

<script>
import { ref } from 'vue';
import Modal from "@/components/Modal.vue";
export default {
    components: {
        Modal,
    },
    setup(){
        
        const isOpen = ref(false)

        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false,

        }

    }
}
</script>

<style>

</style>
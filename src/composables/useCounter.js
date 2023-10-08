import { ref } from "vue"

const useCounter = (initialValue = 5) => {
    const counter = ref(initialValue)
    
    // const increase = () => {
    //     counter.value++
    // }

    // const decrease = () => {
    //     counter.value--
    // }

    return{
        counter,
        increase: () => counter.value++,
        decrease: () => counter.value--
    }
}

export default useCounter
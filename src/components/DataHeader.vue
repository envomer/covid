<template>
    <div class="row mb-3 mt-3">
        <div class="input-group mb-3">
            <span class="input-group-text"> <i class="bi bi-search"></i> </span>
            <input type="text" class="form-control" placeholder="Filter...">
            <button @click="changeView('list')" :class="{active: view === 'list'}" class="btn btn-outline-secondary" type="button">LIST</button>
            <button @click="changeView('chart')" :class="{active: view === 'chart'}" class="btn btn-outline-secondary" type="button">CHART</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['view'],
    setup(props) {
        
        return {
            
        }
    },

    methods: {
        changeView(value) {
            console.log('change-view', value);
            this.$emit('change-view', value);
        }
    }
}
</script>

<style>

</style>
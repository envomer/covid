<template>
    <div class="row mb-3 mt-3" id="search-bar">
        <div class="input-group mb-3">
            <span class="input-group-text"><i class="bi bi-search"></i></span>
            <slot></slot>
            <button @click="changeView('list')" :class="{active: view === 'list'}" class="btn btn-outline-secondary" type="button">LIST</button>
            <button @click="changeView('chart')" :class="{active: view === 'chart'}" class="btn btn-outline-secondary" type="button">CHART</button>
        </div>
        
    </div>
</template>

<script>
export default {
    /**
     * Props
     */
    props: {
        view: {
            type: String,
            required: true
        }
    },
    
    /**
     * Methods
     */
    methods: {
        changeView(value) {
            this.$emit('change-view', value);
        },
    }
}
</script>

<style scoped>

</style>
<template>
    <div class="row mb-3 mt-3">
        <div class="input-group mb-3">
            <span class="input-group-text"><i class="bi bi-search"></i></span>
            <vue-select
                v-model="country"
                :options="summary.Countries"
                label-by="Country"
                value-by="Country"
                searchable
                clear-on-select
                close-on-select
                @selected="onChangeSelect"
            ></vue-select>
            <button @click="changeView('list')" :class="{active: view === 'list'}" class="btn btn-outline-secondary" type="button">LIST</button>
            <button @click="changeView('chart')" :class="{active: view === 'chart'}" class="btn btn-outline-secondary" type="button">CHART</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['view', 'summary'],
    
    data() {
        return {
            country: null,
            countryList: [{ country: 'United States', code: 'USA' }, { country: 'Taiwan', code: 'TWN' }],
        }
    },

    mounted() {
        
    },

    methods: {
        changeView(value) {
            this.$emit('change-view', value);
        },

        onChangeSelect(event) {
            console.log('onChangeSelect', event.Country);
        }
    }
}
</script>

<style>

</style>
<template>
    <div class="container">
        <navigation-bar />

        <data-header :view="view" @change-view="onChangeView"  />

        <covid-table v-if="view === 'list'" />
        <covid-chart v-if="view === 'chart'" />

        
    </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import CovidTable from './components/CovidTable.vue';
import CovidChart from './components/CovidChart.vue';
import DataHeader from './components/DataHeader.vue';

import { ref } from "vue";

// let view = ref('list');
let view = ref('chart');

export default {
    components: {NavigationBar, CovidTable, DataHeader, CovidChart},
    setup() {
        return {
            view
        }
    },

    methods: {
        onChangeView(value) {
            this.view = value;
        }
    }
}

</script>

<style>
</style>
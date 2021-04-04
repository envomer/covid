<template>
    <div class="container">
        <navigation-bar />

        <div v-if="summary">
            <data-header
                :view="view"
                :summary="summary"
                @change-input="onChangeInput"
                @change-view="onChangeView" />
            <covid-table :summary="summary" v-if="view === 'list'" />
            <covid-chart :summary="summary" v-if="view === 'chart'" />
        </div>
    </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import CovidTable from './components/CovidTable.vue';
import CovidChart from './components/CovidChart.vue';
import DataHeader from './components/DataHeader.vue';

import { ref, onMounted } from "vue";
import { fetchSummary } from "./api/covid19api.js";

// let view = ref('list');
let view = ref('chart');
let search = ref('');

export default {
    components: { NavigationBar, CovidTable, DataHeader, CovidChart },

    setup() {

        const summary = ref()
        const getSummary = async () => {
            const value = await fetchSummary();

            if (value && typeof value.Countries !== 'undefined') {
                summary.value = value
            }
        }

        onMounted(getSummary) // on `mounted` call `getSummary`

        return {
            summary,
            search,
            view
        }
    },

    computed: {
        summaryFiltered() {
            if (!this.search) {
                return this.summary;
            }
        }
    },

    methods: {
        onChangeView(value) {
            this.view = value;
        },

        onChangeInput(value) {
            console.log('onChangeInput', value);
            this.search = value;
        }
    }
}

</script>

<style>
</style>
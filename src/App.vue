<template>
    <div class="container">
        <navigation-bar />

        <div v-if="summary">
            <data-header :view="view" @change-view="onChangeView">
                <search-bar
                    :summary="summary"
                    @change-input="onChangeInput"
                />
            </data-header>
            <covid-table :summary="summaryFiltered" :search="search" v-if="view === 'list'" />
            <covid-chart :summary="summaryFiltered" :search="search" v-if="view === 'chart'" />
        </div>
    </div>
</template>

<script lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import CovidTable from './components/CovidTable.vue';
import CovidChart from './components/CovidChart.vue';
import DataHeader from './components/DataHeader.vue';
import SearchBar from './components/SearchBar.vue';
import { Summary } from "./api/covid19api";

import { ref, onMounted } from "vue";
import { fetchSummary } from "./api/covid19api";

let view = ref('chart');
let search = ref('');

export default {
    /**
     * Computed
     */
    components: { NavigationBar, CovidTable, DataHeader, CovidChart, SearchBar },

    /**
     * Setup
     */
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

    /**
     * Computed
     */
    computed: {
        summaryFiltered() {
            if (!this.search) {
                return this.summary;
            }

            let summary = this.summary;
            let search = this.search;
            
            if (search && search.trim() !== '') {
                return {
                    Global: summary.Global,
                    Countries: summary.Countries.filter(country => country.Country.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1)
                } as Summary
            }

            return summary;
        }
    },

    /**
     * Methods
     */
    methods: {
        onChangeView(value) {
            this.view = value;
        },

        onChangeInput(value) {
            this.search = value;
        }
    }
}
</script>

<style>
</style>
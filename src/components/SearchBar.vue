<template>
    <div id="search-input">
        <input
            @focus="onFocusInput"
            @blur="onBlurInput"
            @input="onInputInput"
            @keyup.enter="onEnterInput"
            ref="input"
            type="text"
            class="form-control"
            v-model="searchInput"
            placeholder="Filter..." />
        
        <div id="search-results" v-show="resultsShow">
            <div class="list-group">
                <a
                    href="#"
                    class="list-group-item list-group-item-action"
                    v-for="country in countriesFiltered"
                    @click.prevent.stop="onClickCountry(country)"
                    :key="country.ID">
                    {{ country.Country }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    /**
     * Props
     */
    props: {
        summary: {
            type: Object,
            required: true
        }
    },


    /**
     * Data
     */
    data() {
        return {
            searchInput: null,
            searchValue: null,
            countryList: null,
            resultsShow: false,
        }
    },


    /**
     * Mounted hook
     */
    mounted() {
        this.countryList = this.summary.Countries.slice();
    },


    /**
     * Computed properties
     */
    computed: {
        countriesFiltered() {
            let countries = this.countryList;
            let search = this.searchValue;
            
            if (search && search.trim() !== '') {
                return countries.filter(country => country.Country.toLowerCase().indexOf(search.toLowerCase().trim()) !== -1);
            }

            return countries;
        }
    },


    /**
     * Methods
     */
    methods: {
        onInputInput(event) {
            this.searchValue = event.target.value;
        },

        onEnterInput(event) {
            this.$emit('change-input', event.target.value);
            this.resultsShow = false;
            event.target.blur();
        },

        onFocusInput() {
            let self = this;
            setTimeout(() => {
                self.$refs.input.select();
                self.resultsShow = true;
            }, 25);
        },

        onBlurInput() {
            let self = this;
            self.$nextTick(() => {
                setTimeout(() => {
                    self.resultsShow = false;
                }, 200);
            })
        },

        onChangeSelect(event) {
            console.log('onChangeSelect', event.Country);
        },

        onClickCountry(country) {
            this.searchInput = country.Country;
            this.searchValue = null;
            this.resultsShow = false;

            this.$emit('change-input', country.Country);
        }
    }
}
</script>

<style scoped>
    #search-bar { position: relative }
    #search-input { width: 1%; flex: 1 1 auto; position: relative }
    #search-input input { border-radius: 0; }
    #search-results {
        position: absolute;
        top: 40px;
        width: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px #ddd;
        height: 220px;
        overflow-y: auto;
    }
</style>
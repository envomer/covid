<template>
<div>
    <table class="table table-hover table-borderless">
        <thead>
            <tr class="bg-light">
            <th>Code</th>
            <th>Country</th>
            <th class="text-end">Active Cases</th>
            <th class="text-end">Deaths</th>
            <th class="text-end">Recoveries</th>
            </tr>
        </thead>
        <tbody v-if="summary">
            <tr class="entry" v-for="country in summary.Countries" :key="country.ID">
                <th>{{ country.CountryCode }}</th>
                <td>{{ country.Country }}</td>
                <td class="text-end">{{ country.TotalConfirmed }}</td>
                <td class="text-end">{{ country.TotalDeaths }}</td>
                <td class="text-end">{{ country.TotalRecovered }}</td>
            </tr>

            <tr class="sum bg-light" v-if="summary.Global">
                <th>TOTALS</th>
                <th></th>
                <th class="text-end">{{ summary.Global.TotalConfirmed }}</th>
                <th class="text-end">{{ summary.Global.TotalDeaths }}</th>
                <th class="text-end">{{ summary.Global.TotalRecovered }}</th>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    props: ['summary'],
}
</script>

<style>

</style>
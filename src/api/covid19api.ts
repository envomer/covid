import axios from "axios";

export interface Country {
    ID: string
    Country: string
    TotalConfirmed: number
    TotalDeaths: number
    TotalRecovered: number
}

export interface Summary {
    Global: Object
    Countries: Array<Country>
}

export async function fetchSummary(): Promise<Summary> {
    let url = 'https://api.covid19api.com/summary';
    // let url = 'http://localhost:3000/mock/api.json';

    let data = await axios.get(url);

    if (typeof data === 'undefined' || typeof data.data === 'undefined') {
        return null;
    }

    return data.data;
}

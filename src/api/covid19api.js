export async function fetchSummary() {
    // let url = 'https://api.covid19api.com/summary';
    let url = 'http://localhost:3000/mock/api.json';

    let data = await axios.get(url);

    if (typeof data === 'undefined' || typeof data.data === 'undefined') {
        return null;
    }

    return data.data;
}
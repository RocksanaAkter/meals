const url = 'https://restcountries.com/v3.1/all';

const loadCountries = () => {
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    //for(const country of countries)
    const countriesContainer = document.getElementById('countries-container')
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;

        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) => {
    //https://restcountries.com/v3.1/alpha/{code}
    //country code er link from 'https://restcountries.com/#api-endpoints-v2-all'
    const urlCode = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log('get country detail', code)
    fetch(urlCode)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))// array er first element object collect korchi.

}

const displayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src=${country.flags.png}>
    `

}

loadCountries();
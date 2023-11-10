const main_api = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_H2GpmwEfucrvth8yFJw9ZmZPysxJIHS1dz9dBmdg"


let date = new Date().toLocaleDateString();
document.querySelector('#date-container').innerHTML= date
console.log(date);

async function logCountry() {
    const response = await fetch(main_api);
    const countryObj = await response.json();
    const countrylst = Object.keys(countryObj.data);
    return countrylst;

}
// logCountry()
logCountry().then((res) => {
    res.forEach(element => {
        countryOption1(element)
        countryOption2(element)
    });

})
function countryOption1(countryList) {
    const options = document.createElement('option')
    options.value = countryList;
    options.appendChild(document.createTextNode(countryList));
    const country_exchange = document.querySelector('#country_exchange');
    country_exchange.appendChild(options)
}

function countryOption2(countryList) {
    const options = document.createElement('option')
    options.value = countryList;
    options.appendChild(document.createTextNode(countryList));
    const country_exchange = document.querySelector('#country_conversion');
    country_exchange.appendChild(options)
}

async function clicked() {
    const val = document.querySelector('#currency').value
    const base_currency = document.querySelector('#country_exchange').value;
    const currencies = document.querySelector('#country_conversion').value;
    const response = await fetch(`${main_api}&currencies=${currencies}&base_currency=${base_currency}`);
    const countryObj = await response.json();
    const conversion = val * (Object.values(countryObj.data))
    console.log(conversion);
    document.querySelector('#conversion').value = conversion
}

document.querySelector('.btnconvert').addEventListener('click', clicked)

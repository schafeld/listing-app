// extract the unique country names

const rawCountryList = universityJson.map(item => item.country);
const countryList = rawCountryList.filter((item, index, self) => self.indexOf(item) === index);
countryList.sort();

// console.log(rawCountryList);
// console.log(countryList);

Vue.component("v-select", VueSelect.VueSelect);

const app = new Vue ({
    el: '#vue-app',
    data: {
        countries: countryList,
        countrySelected: "",
        universities: [],
        universitySelected: null
    },

    methods: {
      fetchUniversities: function() {
        console.log("fetchUniversities: " + this.countrySelected);

        let matches = universityJson.filter(item => item.country === this.countrySelected);
        matches.sort((a, b) => (a.name > b.name) ? 1 : -1);

        console.log(matches);

        this.universities = matches;
      }
    }
})
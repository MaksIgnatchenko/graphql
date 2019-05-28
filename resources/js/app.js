// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('profile-component', require('./components/ProfileComponent.vue').default);
import Profile from './components/ProfileComponent.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: {
        profile: Profile,
    },
    data: {
        // me : {
        //     avatar: 'https://tagit.appus.work/storage/avatars/BzCaqqkccmIVZX57RA3auMLUbwDccrkCNG3sf9jY.jpeg',
        //     name: 'Max',
        //     email: 'post@gmail.com',
        //     phone: '+380501231231',
        //     birthday: '1989-06-27',
        //     country: 'Ukraine',
        //     friendsCount: 10,
        //     postsCount: 3,
        // }
    },

    methods: {
        getMe() {

            async getChampionByName () {
                const res = await axios.post(
                    'http://localhost:4000/graphql', {
                        query: `
                            query GetChampionByName($championName: String!) {
                            getChampionByName(name: $championName) {
                            name
                            attackDamage
                        }
                    }`,
                        variables: {
                            championName: 'Ashe'
                        }
                    })
                this.champion = res.data.data.getChampionByName
            }

        }
    }
});


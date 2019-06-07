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
    data() {
        return {
            baseApi : 'http://localhost/graphql',
            me : {},
            posts : [],
            selectedMeTab : 'info',
        };
    },

    created: function() {
        this.getMe();
    },

    methods: {
        getMe: function() {
            var vm = this;
            axios.post(vm.baseApi, {
                query: `
                    query {
                        userById(id: 1) {
                            name,
                            email,
                            phone,
                            avatar,
                            birthday,
                            country,
                            friends_count,
                            posts_count    
                        }
                    }`
            }).then(function (response) {
                vm.me = response.data.data.userById;
            })
            .catch(function (error) {
                vm.me = 'error';
            })
        },

        // getPosts: function () {
        //     var vm = this;
        //     axios.post(vm.baseApi, {
        //         query: `
        //             query {
        //                 posts(user_id: "1") {
        //                     id,
        //                     picture,
        //                     title,
        //                     body
        //                   }
        //                 }
        //             }`
        //     }).then(function (response) {
        //         return response.data.data.posts;
        //     })
        //     .catch(function (error) {
        //         return 'error';
        //     })
        // }
    }
});


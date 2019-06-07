<template>
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-body">

                    <div class="card m-b-20 card-inverse text-white" style="background-color: #333; border-color: #333;">
                        <div class="card-block">
                            <div class="media">
                                <img class="d-flex mr-3 rounded-circle img-thumbnail thumb-lg" v-bind:src="avatar"
                                     alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="mt-0 font-18 mb-1">{{ user.name }}</h5>
                                    <h6 class="font-14"><i class="ion-email"></i> {{ user.email }}</h6>
                                    <h6 class="font-14"><i class="ion-iphone"></i> {{ user.phone }}</h6>
                                </div>
                            </div>
                        </div>
                        <div>
                            <b-tabs content-class="mt-3">
                                <b-tab title="Info">
                                    <div class="card-block">
                                        <div class="tab-content">
                                            <div>
                                                <div class="row">
                                                    <div class="col-md-4">Date of Birth</div>
                                                    <div class="col-md-8">{{ user.birthday }}</div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">Country</div>
                                                    <div class="col-md-8">{{ user.country }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab :title="'Friends (' + user.friends_count + ')'"><p>I'm the second tab</p></b-tab>
                                <b-tab :title="'Posts (' + user.posts_count + ')'">
                                    <div v-for="post in posts">
                                        <post-thumbnail v-bind:post="post"></post-thumbnail>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PostThumbnail from '../components/PostThumbnail.vue';
    export default {
        components: {
            postThumbnail: PostThumbnail
        },
        props: [
            'user',
        ],
        data: function() {
            return {
                defaultAvatar: 'http://localhost/images/user.png',
                posts: this.getPosts(),
            }
        },
        methods: {
            getPosts: function () {
                var profile = this;
                var vm = this.$root;
                axios.post(vm.baseApi, {
                    query: `
                    query {
                        posts(user_id: "1") {
                            id,
                            picture,
                            title,
                            body
                        }
                    }`
                }).then(function (response) {
                    profile.posts = response.data.data.posts;
                })
                .catch(function (error) {
                    profile.posts = 'error';
                })
            }
        },
        // mounted: function() {
        //     this.posts = this.getPosts();
        // },
        computed: {
            avatar: function() {
                return this.user.avatar ? this.user.avatar : this.defaultAvatar;
            },
            selectedMeTab: function() {
                return this.$root.$data.selectedMeTab;
            },
            // posts: function() {
            //     return this.getPosts();
            // }
        }
    }
</script>

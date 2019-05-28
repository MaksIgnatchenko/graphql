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
                                    <h5 class="mt-0 font-18 mb-1">{{ name }}</h5>
                                    <h6 class="font-14"><i class="ion-email"></i> {{ email }}</h6>
                                    <h6 class="font-14"><i class="ion-iphone"></i> {{ phone }}</h6>
                                </div>
                            </div>
                        </div>
                        <div class="card-block">
                            <div class="row">
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#">Info</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Friends ({{ friendsCount }})</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Posts ({{ postsCount }})</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="card-block">
                            <div class="row">
                                <div class="col-md-4">Date of Birth</div>
                                <div class="col-md-8">{{ birthday }}</div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">Country</div>
                                <div class="col-md-8">{{ country }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'user',
        ],

        data() {
            return {
                avatar: this.user.avatar,
                name: this.user.name,
                email: this.user.email,
                phone: this.user.phone,
                birthday: this.user.birthday,
                country: this.user.country,
                friendsCount: this.user.friendsCount,
                postsCount: this.user.postsCount,
            }
        },

    }
</script>

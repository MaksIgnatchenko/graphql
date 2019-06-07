<template>
    <div class="row">
        <div class="col-md-12">
            <div class="box">
                <div class="box-body">

                    <div class="card m-b-20 card-inverse text-white" style="background-color: #333; border-color: #333;">
                        <div class="card-block">
                            <div class="media">
                                <img class="d-flex mr-3 rounded-circle img-thumbnail thumb-lg" v-bind:src="picture"
                                     alt="Generic placeholder image">
                                <div class="media-body">
                                    <h5 class="mt-0 font-18 mb-1">{{ post.title}}</h5>
                                </div>
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
            'post'
        ],
        data: function() {
            return {
                defaultPicture: 'http://localhost/images/pencil.png',
            }
        },
        computed: {
            picture: function() {
                return this.post.picture ? this.post.picture : this.defaultPicture;
            }
        }
    }
</script>

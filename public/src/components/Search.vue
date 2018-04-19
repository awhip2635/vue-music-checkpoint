<template>
    <div class="container-fluid">
        <div class="search">
            <form class="form-inline" @submit.prevent="getMusic()">
                <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
                <h1 class="search-for-music">Search for Music!</h1>
                <div class="form-group">
                    <input type="text" class="form-control" v-model="artist" placeholder="Artist Name">
                    <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
                </div>
            </form>
            <br>
            <div v-for="song in results" class="panel">

                <div class="row">

                    <div class="col-xs-4 col-sm-4 col-md-4">
                        <center>
                            <img class="albumArt" :src="song.albumArt">
                        </center>
                    </div>
                    <div class="col-xs-8 col-sm-8 col-md-8">
                    <center>
                        <h3 class="song-title-text">{{song.title}}</h3>
                        <h4>{{song.artist}}</h4>
                        <p>{{song.collection}}</p>
                    </center>

                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <audio controls class="sound-bar">
                            <source :src="song.preview" class="preview-bar" type="audio/mpeg">
                        </audio>

                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                        <button type="button" class="btn btn-primary" @click="addToPlaylist(song)">Add To Playlist</button>

                    </div>
                </div>
                
                   














            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'search',
        data() {
            return {
                artist: ''
            }

        },
        computed: {
            results() {
                return this.$store.state.results
            }
        },


        // Lifecycle Hooks
        methods: {
            getMusic() {

                this.$store.dispatch("getMusicByArtist", this.artist)
            },

            addToPlaylist(song) {
                var newSong = {
                    title: song.title,
                    albumArt: song.albumArt,
                    artist: song.artist,
                    preview: song.preview
                }
                this.$store.dispatch("addToMyPlaylist", newSong)
            }
        },

        components: {
            // trumbowyg,

        }

    }

</script>


<style scoped>
    .albumArt {
        margin-top: 5px;
        margin-left:4px;
        width: 90px;
    }

    .display-search {
        margin-left: -100px;
    }

    .panel {
        min-width: 100px;
        max-width: 400px;
    }

    .preview-bar {
        width: 50%
    }
</style>
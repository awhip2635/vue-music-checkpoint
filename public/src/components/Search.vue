<template>
    <div class="search">
        <form class="form-inline" @submit.prevent="getMusic()">
            <!--DO NOT MODIFY THE ID OR ONCLICK ATTRIBUTES IN THIS FORM-->
            <h1 class="search-for-music">Search for Music!</h1>
            <div class="form-group">
                <input type="text" class="form-control" v-model="artist" placeholder="Artist Name">
                <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
            </div>
        </form>
        <div v-for="song in results" class="row panel display-search">
            <div class="col-xs-4 col-sm-4 col-md-sm-4">
                
                <h3 class="song-title-text">{{song.title}}</h3>
                <img class="albumArt" :src="song.albumArt">
                <h4>Artist: {{song.artist}}</h4>
                <p>Collection: {{song.collection}}</p>
                <p> Price: {{song.price}}</p>
                <audio controls class="sound-bar">
                    <source :src="song.preview" class="preview-bar" type="audio/mpeg">
                </audio>

                

            </div>
            <div class="col-xs-4 col-sm-4 col-md-4">
                <br>
                <button type="button" class="btn btn-primary" @click="addToPlaylist(song)">Add To Playlist</button>
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


<style>

</style>
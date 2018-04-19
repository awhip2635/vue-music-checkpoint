<template>
  <div class="container">
    <div class="row playlist-baby">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">

          <center>
            <h1 class="tasty-jams">Your Tasty Jams</h1>
          </center>
          
        </div>
      </div>
      <div v-for="song in myPlaylist" class="row panel">
        <div class="col-xs-7 col-sm-7 col-md-7">
        <center>
          <h3>{{song.title}}</h3>
          <h4>{{song.artist}}</h4>
        </center>
          <audio controls class="sound-bar">
            <source :src="song.preview" class="preview-bar" type="audio/mpeg">
          </audio>
        </div>
        
        <div class="col-xs-5 col-sm-5 col-md-5">
          <button @click="removeTrackFromPlaylist(song._id)" type="button" class="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Playlists',
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getMyPlaylist')
    },
    methods: {

      getMyPlaylist() {
        state.$store.dispatch("getMyPlaylist")
      },
      addToMyPlaylist(song) {
        state.$store.dispatch("addToMyPlaylist")
      },

      removeTrackFromPlaylist(songId) {

        this.$store.dispatch("removeTrackFromPlaylist", songId)
      },

      promoteTrack(songId) {
        this.$store.dispatch("promoteTrack", songId)
      },

      demoteTrack(songId) {
        this.$store.dispatch("demoteTrack", songId)
      }
    },
    computed: {
      myPlaylist() {
        return this.$store.state.myPlaylist
      }
    }

  }

</script>


<style>
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }

  .playlist-baby {
    position: fixed;
    max-height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .tasty-jams {
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
</style>
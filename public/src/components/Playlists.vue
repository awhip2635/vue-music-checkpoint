<template>
  <div class="container-fluid">
    <div class="row playlist-baby">
      <center>
        <h1 class="tasty-jams">Your Tasty Jams</h1>
      </center>
      <div v-for="song in myPlaylist" class="row panel">
        <div class="col-xs-7 col-sm-7 col-md-7">
        <h3>{{song.title}}</h3>
        <h4>{{song.artist}}</h4>
        <audio controls class="sound-bar">
                    <source :src="song.preview" class="preview-bar" type="audio/mpeg">
                </audio>
        </div>
      <div class="col-xs-2 col-sm-2 col-md-2">
        <button @click="promoteTrack(song._id)" type="button" class="btn btn-primary btn-block">+</button>
        <button @click="demoteTrack(song._id)" type="button" class="btn btn-danger btn-block">-</button>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3">
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
    max-height: 400px;
    overflow-y: auto;
  }

  .tasty-jams {
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
</style>
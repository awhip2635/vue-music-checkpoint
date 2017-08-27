<template>
  <div class="container-fluid">
    <div class="row">
      <center>
        <h1>Your Tasty Jams</h1>
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
        <button type="button" class="btn btn-primary btn-block">+</button>
        <button type="button" class="btn btn-danger btn-block">-</button>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3">
        <button @click="removeTrackFromPlaylist(song._id)" type="button" class="btn btn-danger">Remove Song</button>
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
</style>
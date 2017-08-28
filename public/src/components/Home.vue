<template>
  <div class="container-fluid home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <div class="row">
      <div class="col-xs-8">
       <center>
            <search></search>
        </center>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4">
      
          <playlists></playlists>
          
      </div>
            
    </div>
    
  </div>
</template>

<script>
import Playlists from './playlists'
import Search from './search'
export default {
  name: 'home',
  data () {
    return {
      
    }
  },
    computed: {
         
            },
        


        // Lifecycle Hooks
        mounted() {
            this.$store.dispatch("getMyPlaylist")
        },

        components: {
            // trumbowyg,
            Playlists,
            Search
        }
}
</script>


<style>


</style>

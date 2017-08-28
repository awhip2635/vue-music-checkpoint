import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var ip = '//localhost:3000'

var store = new vuex.Store({
  state: {
    myPlaylist: [],
    results: [],
    songTitle: []
  },
  mutations: {
    setResults(state, results){
      state.results = results
    },
    setMyPlaylist(state, myPlaylist){
      state.myPlaylist = myPlaylist
    },
    addToMyPlaylist(state, myPlaylist){
      state.myPlaylist.push({user: payload.user})
      console.log(myPlaylist)
    },

    removeTrackFromPlaylist(state, myPlaylist){
      state.myPlaylist.pop({user: payload.user})
    },
    promoteTrack(state, myPlaylist){
      
    }
    

  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      console.log('working')
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.getJSON(apiUrl).then(data=>{
        var songList = data.results.map(function (song) {
                  return {
                      title: song.trackName,
                      albumArt: song.artworkUrl60,
                      artist: song.artistName,
                      collection: song.collectionName,
                      price: song.collectionPrice,
                      preview: song.previewUrl,
                      id: song.trackId
                    };
                })
        commit('setResults', songList)
      })
    },
    
    
    getMyPlaylist({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
     
      $.get('//localhost:3000/api/playlist').then(data=>{
        commit('setMyPlaylist', data )
      })
    },
    addToMyPlaylist({commit, dispatch}, track){
      console.log(track)
      //this will post to your server adding a new track to your tunes
      $.post('//localhost:3000/api/playlist', track).then(data=>{
        dispatch('getMyPlaylist')
      })
    },
    removeTrackFromPlaylist({commit, dispatch}, trackId){
      //Removes track from the database with deletef
      console.log("made it this far")
          $.ajax({
                contentType: 'application/json',
                method: 'DELETE',
                url: `//localhost:3000/api/playlist/${trackId}` 
              })
                .then(res=>{
                  dispatch('getMyPlaylist')
                })
                .fail(err =>{
                    console.error(err)
                })
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
      $.get('//localhost:3000/api/playlist').then(myPlaylist=> {
        for (var i = 0; i < myPlaylist.length; i++) {
          var song = myPlaylist[i];
          var previousSong = myPlaylist[i - 1];
    
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store

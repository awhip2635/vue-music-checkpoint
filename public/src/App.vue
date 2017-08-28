<template>
  <div class="container-fluid" id="app">
  <div class="row">
  <div class="col-xs-12 col-sm-12 col-md-12">
    <home></home>
  </div>
  </div>
  </div>
</template>

<script>
import Home from './components/Home'
import Search from './components/Search'

export default {
  name: 'app',
  components: {
    Home,
    Search
  }
  
}
document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);
</script>

<style>
.search-for-music {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: white;
}

body {
  background-image: url('https://other98-agitpopcommunica.netdna-ssl.com/wp-content/uploads/sites/3/2015/06/neil-young-young.jpg');
  background-repeat: no-repeat;
}

.display-search {
  max-width: 70%;
  padding-left: 150px;
}

</style>

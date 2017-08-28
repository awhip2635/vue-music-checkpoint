webpackJsonp([0],[,,function(t,s,e){"use strict";var a=e(1),i=e(26),o=e(15),r=e.n(o);a.a.use(i.a);var n=new i.a.Store({state:{myPlaylist:[],results:[],songTitle:[]},mutations:{setResults:function(t,s){t.results=s},setMyPlaylist:function(t,s){t.myPlaylist=s},addToMyPlaylist:function(t,s){t.myPlaylist.push({user:payload.user}),console.log(s)},removeTrackFromPlaylist:function(t,s){t.myPlaylist.pop({user:payload.user})},promoteTrack:function(t,s){}},actions:{getMusicByArtist:function(t,s){var e=t.commit;t.dispatch;console.log("working");var a="https://itunes.apple.com/search?term="+s,i="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(a);r.a.getJSON(i).then(function(t){var s=t.results.map(function(t){return{title:t.trackName,albumArt:t.artworkUrl60,artist:t.artistName,collection:t.collectionName,price:t.collectionPrice,preview:t.previewUrl,id:t.trackId}});e("setResults",s)})},getMyPlaylist:function(t){var s=t.commit;t.dispatch;r.a.get("https://vue-music-checkpoint.herokuapp.com/api/playlist").then(function(t){s("setMyPlaylist",t)})},addToMyPlaylist:function(t,s){var e=(t.commit,t.dispatch);console.log(s),r.a.post("https://vue-music-checkpoint.herokuapp.com/api/playlist",s).then(function(t){e("getMyPlaylist")})},removeTrackFromPlaylist:function(t,s){var e=(t.commit,t.dispatch);console.log("made it this far"),r.a.ajax({contentType:"application/json",method:"DELETE",url:"https://vue-music-checkpoint.herokuapp.com/api/playlist/"+s}).then(function(t){e("getMyPlaylist")}).fail(function(t){console.error(t)})},promoteTrack:function(t,s){t.commit,t.dispatch},demoteTrack:function(t,s){t.commit,t.dispatch}}});s.a=n},function(t,s,e){e(10);var a=e(0)(e(4),e(20),null,null);t.exports=a.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(16),i=e.n(a),o=e(17),r=e.n(o);s.default={name:"app",components:{Home:i.a,Search:r.a}},document.addEventListener("play",function(t){for(var s=document.getElementsByTagName("audio"),e=0,a=s.length;e<a;e++)s[e]!=t.target&&s[e].pause()},!0)},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(18),i=e.n(a),o=e(19),r=e.n(o);s.default={name:"home",data:function(){return{}},computed:{},mounted:function(){this.$store.dispatch("getMyPlaylist")},components:{Playlists:i.a,Search:r.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"search",data:function(){return{artist:""}},computed:{results:function(){return this.$store.state.results}},methods:{getMusic:function(){this.$store.dispatch("getMusicByArtist",this.artist)},addToPlaylist:function(t){var s={title:t.title,albumArt:t.albumArt,artist:t.artist,preview:t.preview};this.$store.dispatch("addToMyPlaylist",s)}},components:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"Playlists",data:function(){return{}},mounted:function(){this.$store.dispatch("getMyPlaylist")},methods:{getMyPlaylist:function(){state.$store.dispatch("getMyPlaylist")},addToMyPlaylist:function(t){state.$store.dispatch("addToMyPlaylist")},removeTrackFromPlaylist:function(t){this.$store.dispatch("removeTrackFromPlaylist",t)},promoteTrack:function(t){this.$store.dispatch("promoteTrack",t)},demoteTrack:function(t){this.$store.dispatch("demoteTrack",t)}},computed:{myPlaylist:function(){return this.$store.state.myPlaylist}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"search",data:function(){return{artist:""}},computed:{results:function(){return this.$store.state.results}},methods:{getMusic:function(){this.$store.dispatch("getMusicByArtist",this.artist)},addToPlaylist:function(t){var s={title:t.title,albumArt:t.albumArt,artist:t.artist,preview:t.preview};this.$store.dispatch("addToMyPlaylist",s)}},components:{}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(1),i=e(3),o=e.n(i),r=e(2);new a.a({el:"#app",template:"<App/>",store:r.a,components:{App:o.a}})},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){e(14);var a=e(0)(e(5),e(24),null,null);t.exports=a.exports},function(t,s,e){e(11);var a=e(0)(e(6),e(21),null,null);t.exports=a.exports},function(t,s,e){e(12);var a=e(0)(e(7),e(22),null,null);t.exports=a.exports},function(t,s,e){e(13);var a=e(0)(e(8),e(23),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 col-sm-12 col-md-12"},[e("home")],1)])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search"},[e("form",{staticClass:"form-inline",on:{submit:function(s){s.preventDefault(),t.getMusic()}}},[e("h1",{staticClass:"search-for-music"},[t._v("Search for Music!")]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Artist Name"},domProps:{value:t.artist},on:{input:function(s){s.target.composing||(t.artist=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])]),t._v(" "),t._l(t.results,function(s){return e("div",{staticClass:"row panel display-search"},[e("div",{staticClass:"col-xs-4 col-sm-4 col-md-sm-4"},[e("h3",{staticClass:"song-title-text"},[t._v(t._s(s.title))]),t._v(" "),e("img",{staticClass:"albumArt",attrs:{src:s.albumArt}}),t._v(" "),e("h4",[t._v("Artist: "+t._s(s.artist))]),t._v(" "),e("p",[t._v("Collection: "+t._s(s.collection))]),t._v(" "),e("p",[t._v(" Price: "+t._s(s.price))]),t._v(" "),e("audio",{staticClass:"sound-bar",attrs:{controls:""}},[e("source",{staticClass:"preview-bar",attrs:{src:s.preview,type:"audio/mpeg"}})])]),t._v(" "),e("div",{staticClass:"col-xs-4 col-sm-4 col-md-4"},[e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.addToPlaylist(s)}}},[t._v("Add To Playlist")])])])})],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row playlist-baby"},[e("center",[e("h1",{staticClass:"tasty-jams"},[t._v("Your Tasty Jams")])]),t._v(" "),t._l(t.myPlaylist,function(s){return e("div",{staticClass:"row panel"},[e("div",{staticClass:"col-xs-7 col-sm-7 col-md-7"},[e("h3",[t._v(t._s(s.title))]),t._v(" "),e("h4",[t._v(t._s(s.artist))]),t._v(" "),e("audio",{staticClass:"sound-bar",attrs:{controls:""}},[e("source",{staticClass:"preview-bar",attrs:{src:s.preview,type:"audio/mpeg"}})])]),t._v(" "),e("div",{staticClass:"col-xs-2 col-sm-2 col-md-2"},[e("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:function(e){t.promoteTrack(s._id)}}},[t._v("+")]),t._v(" "),e("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:function(e){t.demoteTrack(s._id)}}},[t._v("-")])]),t._v(" "),e("div",{staticClass:"col-xs-3 col-sm-3 col-md-3"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){t.removeTrackFromPlaylist(s._id)}}},[t._v("Remove")])])])})],2)])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search"},[e("form",{staticClass:"form-inline",on:{submit:function(s){s.preventDefault(),t.getMusic()}}},[e("h1",{staticClass:"search-for-music"},[t._v("Search for Music!")]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Artist Name"},domProps:{value:t.artist},on:{input:function(s){s.target.composing||(t.artist=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])]),t._v(" "),t._l(t.results,function(s){return e("div",{staticClass:"row panel display-search"},[e("div",{staticClass:"col-xs-4 col-sm-4 col-md-sm-4"},[e("h3",{staticClass:"song-title-text"},[t._v(t._s(s.title))]),t._v(" "),e("img",{staticClass:"albumArt",attrs:{src:s.albumArt}}),t._v(" "),e("h4",[t._v("Artist: "+t._s(s.artist))]),t._v(" "),e("p",[t._v("Collection: "+t._s(s.collection))]),t._v(" "),e("p",[t._v(" Price: "+t._s(s.price))]),t._v(" "),e("audio",{staticClass:"sound-bar",attrs:{controls:""}},[e("source",{staticClass:"preview-bar",attrs:{src:s.preview,type:"audio/mpeg"}})])]),t._v(" "),e("div",{staticClass:"col-xs-4 col-sm-4 col-md-4"},[e("br"),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.addToPlaylist(s)}}},[t._v("Add To Playlist")])])])})],2)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid home"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-8"},[e("center",[e("search")],1)],1),t._v(" "),e("div",{staticClass:"col-xs-4 col-sm-4 col-md-4 panel"},[e("playlists")],1)])])},staticRenderFns:[]}}],[9]);
//# sourceMappingURL=app.042f372717049cc34a21.js.map
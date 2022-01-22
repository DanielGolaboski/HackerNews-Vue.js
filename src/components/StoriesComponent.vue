<template>
  <div class="hello">
    <div v-if="loader == true" class="d-flex justify-content-center loader"  >
        <div class="spinner-border spinner" role="status">
      <span class="sr-only"></span>
    </div>
</div>
    <ul class="list">
       <li v-for="(post, array) in posts" :key="array" class="border-bottom links">
         <a v-if="post.url != undefined" :href="post.url" target="_blank">
            <p v-if="post.title != null" class="title">{{post.title}}</p>
            <p v-else  class="title"> {{post.story_title}}</p>
            <div class="post-details">
              <span class="story-details" v-if="post.points != null">{{"♡    " + post.points}}</span>
              <span class="story-details" v-else-if="post.points == null">♡    0</span>
              <span class="story-details">{{"⚇    " + post.author}}</span>
              <span class="story-details">{{"◷    " + new Date(post.created_at_i * 1000).toLocaleString()}}</span>
            </div>
         </a>
         <a v-else :href="`https://news.ycombinator.com/item?id=` + post.objectID" target="_blank"  class="border-bottom">
            <p v-if="post.title != null" class="title">{{post.title}}</p>
            <p v-else  class="title"> {{post.story_title}}</p>
            <div class="post-details">
              <span class="story-details" v-if="post.points != null">{{"♡    " + post.points}}</span>
              <span class="story-details" v-else-if="post.points == null">♡    0</span>
              <span class="story-details">{{"⚇    " + post.author}}</span>
              <span class="story-details">{{"◷    " + new Date(post.created_at_i * 1000).toLocaleString()}}</span>
            </div>
         </a>
         
      </li>
    </ul>
   
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Stories',
  data () {
    return {

    } 
  },
  computed: {
    ...mapState(['posts', 'loader'])
  }
}
</script>

<style scoped>
  .hello{
    min-height: 100vh;
  }
  .spinner {
    height: 100px;
    width: 100px;
    color: #ff7315;
  }
  .loader {
    margin-top: 30vh;
  }
  .list{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .list li {
    padding-top: 20px;
    padding-left: 40px;
  }
  .links{
    transition: 0.5s ease;
  }
  .links:hover{
    background-color: #ffab73;
  }
  .links a{
    text-decoration: none;
  }
  .title{
    color: #2c3e50;
  }
  .post-details{
    margin-bottom: 20px;
  }
  .post-details span{
    color: #797979;
    margin-right: 20px;
  }
  @media only screen and (max-width: 767px) {
    .story-details{
      font-size: 15px;
    }
  }
  @media only screen and (max-width: 425px) {
    .story-details{
      font-size: 10px;
    }
    .title{
      font-size: 18px;
    }
  }
</style>

<template>


  <div class="input-group mt-3 mb-3">
    <input
      type="search"
      class="form-control shadow-none"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="search-addon"
      v-model="search"
      @change="passEvent(search)"
    />
    <button  @click="passEvent(search)" type="button" id="search-addon" class="btn search-btn">&#x2315;</button>
  </div>
</template>


<script>
  export default {
    name: 'search',
    data() {
      return {
         search: '',
      }
    },
    methods:{
    passEvent(event){
      this.$store.commit('setSearch', event)
      this.$store.dispatch('postsApi')
      }
    },
  }
</script>


<style scoped>
  .search-btn{
    border: 1px solid #ff7315;
    color: #ff7315;
    font-size: 19px;
  }
</style>
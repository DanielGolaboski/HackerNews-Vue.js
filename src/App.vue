<template>
  <div class="row m-0" id="app">
    <div class="col-md-12 ">
      <div class="nav_bar row border-bottom">
        <div class="logo   col-sm-3 col-6 p-3">
          <img src="./assets/logo.png" alt="" />
        </div>
        <div class="col-sm-9 col-md-4 col-6">

          <SearchComponent />
        </div>
        <div class="col-md-5 p-3 d-md-block d-none sort-component">
          
          <SortComponent />
        </div>
      </div>
      <div class="row main">
        <div class="col-md-3 col-lg-2 border-end bg-light d-sm-none d-none d-md-block">
          <CategoriesComponent />
        </div>
        <div class="col-md-9 col-lg-10 p-0">
          <div class="">
            <div class="col-sm-12 pt-3 pb-3 m-0 border-bottom">
              <div class="col-md-12">
                <FilterComponent class="d-none d-md-block"/>
              </div>
              <div class="dropdowns d-md-none">
                  <b-dropdown size="sm" id="dropdown-left" text="Filter" variant="none" class="dropdown">
                    <FilterComponent />
                  </b-dropdown>
                  <b-dropdown size="sm" id="dropdown-left" text="Category" variant="none" class="dropdown">
                    <CategoriesComponent />
                  </b-dropdown>
                  <b-dropdown size="sm" id="dropdown-right" right text="Sort" variant="none" class="dropdown">
                    <SortComponent />
                  </b-dropdown>
                
                
                
              </div>
            </div>
            <div class="col-sm-12">
              <StoriesComponent/>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 justify-content-center mt-5 mb-5 d-flex">
          <button @click="pagination(`prev`)" class="previous_page ">prev</button>
          <div class="current_page"><p v-bind="{page}"  class="text-center m-0 p-0">{{page + 1}}</p></div>
          <button  @click="pagination(`next`)" class="next_page ">next</button>
          
      </div>
    </div>
  </div>
</template>

<script>
import CategoriesComponent from "./components/CategoriesComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
import SortComponent from "./components/SortComponent.vue";
import FilterComponent from "./components/FilterComponent.vue";
import StoriesComponent from "./components/StoriesComponent.vue";

export default {
  name: "App",
  components: {
    SortComponent,
    SearchComponent,
    CategoriesComponent,
    FilterComponent,
    StoriesComponent,
  },

  data() {
    return {
      page: null,
      numberOfPages: null,
    };
  },

  methods: {

    pagination(direction){
      this.page = this.$store.state.page
      this.numberOfPages = this.$store.state.numberOfPages

      if(direction ==`prev` && this.page != 0){
        this.page--
        this.$store.commit('setPage', this.page)
        this.$store.dispatch('postsApi')
      }
      else if(direction == `next` && this.page  < this.numberOfPages - 1){
        this.page++
        this.$store.commit('setPage', this.page)
        this.$store.dispatch('postsApi')
      }
    },

  },
  mounted() {
    this.$store.dispatch('postsApi') 
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.sort-component {
  text-align: right;
}
.main{
  min-height: 90vh;
}

.previous_page,
.next_page {
  background-color: #ff7315;
  color: #f1f1f1;
  border: none;
  padding: 10px 25px;
  border-radius: 6px;
  transition: 0.5s;
}
.previous_page:hover,
.next_page:hover {
background-color: #ffab73;
}

.current_page{
  width: 50px;
  font-size: 28px;
}

</style>

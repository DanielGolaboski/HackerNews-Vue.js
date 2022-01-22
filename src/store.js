import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      loader: true,
      posts: null,
      page: 0,
      numberOfPages: null,
      search: 'a',
      sort: 'search?',
      category: 'story',
      filterTime: [ new Date() / 1000 - new Date() / 1000, new Date() / 1000],
  },
  mutations: {
      setPosts(state, payload) {
          state.posts = payload
      },
      setPage(state, payload) {
          state.page = payload
      },
      setNumberOfPages(state, payload) {
          state.numberOfPages = payload
      },
      setSearch(state, payload) {
          state.search = payload
      },
      setSort(state, payload) {
          state.sort = payload
      },
      setCategory(state, payload) {
          state.category = payload
      },
      setFilterTime(state, payload) {
          state.filterTime = payload
      },
  },
  actions: {
    async postsApi({commit}){
        this.state.loader = true
        this.state.posts = ''
        commit('setPosts', this.state.posts)
        commit('setPage', '')

        await axios.get(`https://hn.algolia.com/api/v1/${this.state.sort}query=${this.state.search}&tags=${this.state.category}&page=${this.state.page}&numericFilters=created_at_i>${this.state.filterTime[0]},created_at_i<${this.state.filterTime[1]}`)
         .then(response => {
             commit('setPosts', response.data.hits)
             commit('setPage', response.data.page)
             commit('setNumberOfPages', response.data.nbPages)
         })   
        this.state.loader = false
     }
  },
  getters: {

  }
  
});
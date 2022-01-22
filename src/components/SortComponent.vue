<template>
  <div class="sort-options">
    <span class="d-none d-md-inline">Sort by:</span>
    <div
      class="btn-group category-radio"
      role="group"
      aria-label="Basic radio toggle button group"
    >
      <input
        type="radio"
        class="btn-check"
        id="sort-date"
        autocomplete="off"
        v-model="sort"
        @change="passEvent(sort)"
        value="search_by_date?"

      />
      <label class="btn shadow-none" for="sort-date">Date</label>

      <input
        type="radio"
        class="btn-check"
        id="sort-popularity"
        autocomplete="off"
        v-model="sort"
        @change='passEvent(sort)'
        value="search?"
      />
      <label class="btn shadow-none" for="sort-popularity">Popularity</label>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sort',
    data() {
      return {
        sort: '',
      }
    },
    methods: {
      passEvent(event){
        this.$store.commit('setSort', event)
        this.$store.dispatch('postsApi')
      }
    },
  }
</script>

<style scoped>
@media only screen and (min-width: 767px) {
.category-radio{
  width: 190px;
  margin-left: 20px;
}
  .category-radio label{

    width: 50%;
    border: 1px solid #ffab73;
    color: #ffab73;
    font-size: 14px;
    padding: 10px;

  }
  .category-radio label:hover{
    background-color: #ffab73;
    color: #f1f1f1;
  }

  .category-radio input[type="radio"]:checked + label:hover {
    background-color: #ffab73;
    color: #f1f1f1;
  }
  .category-radio input[type="radio"]:checked + label {
    background-color: #ff7315;
    color: #f1f1f1;
  }
}
  @media only screen and (max-width: 767px) {
    .category-radio{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0!important;

      width: auto;
    }
    .category-radio label {
      border: none;
      color: #000;
      font-size: 18px;
      padding: 0!important;
    }
  }
</style>
<template>
    <div
      class="btn-group-vertical d-flex  category-radio mt-5"
    >
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="category1"
        v-model="selected"
        @change='passEvent(selected)'
        value="story"
      />
      <label class="btn shadow-none" for="category1">Hot</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="category2"
        v-model="selected"
        @change='passEvent(selected)'
        value="show_hn"
      />
      <label class="btn shadow-none" for="category2">Show HN</label>
      
      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="category3"
        autocomplete="off"
        v-model="selected"
        @change='passEvent(selected)'
        value="ask_hn"
      />
      <label class="btn shadow-none" for="category3">Ask HN</label>

      <input
        type="radio"
        class="btn-check"
        name="btnradio"
        id="category4"
        autocomplete="off"
        v-model="selected"
        @change='passEvent(selected)'
        value="poll"
      />
      <label class="btn shadow-none" for="category4">Poll</label>
    </div>
</template>

<script>
  export default {
    name:'categories',
    data() {
      return {
        selected: 'top',
      }
    },
    methods:{
      passEvent(event){
        this.$store.commit('setCategory', event)
        this.$store.dispatch('postsApi')
      }
    }
  }
</script>

<style scoped>
@media only screen and (min-width: 767px) {
  .category-radio label{
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 0;
  }
  .category-radio label:hover{
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
      margin-top: 0!important;
    }
    .category-radio label{
      padding: 0;
    }
    .category-radio input[type="radio"]:checked + label {
      background-color: #ff7315!important;
      color: #f1f1f1;
    }
  }
</style>
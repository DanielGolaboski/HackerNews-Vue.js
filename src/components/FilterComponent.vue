<template>
  <div class="filters">
    <div class="form-check form-check-inline form-responsive">
      <input
        class="form-check-input radio"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio1"
        value="option1"
        v-model="filter"
        @change='passEvent(pastDay)'
      />
      <label class="form-check-label" for="inlineRadio1">Last 24h</label>
    </div>
    <div class="form-check form-check-inline form-responsive">
      <input
        class="form-check-input radio"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio2"
        value="option2"
        v-model="filter"
        @change='passEvent(lastWeek)'
      />
      <label class="form-check-label" for="inlineRadio2">Last Week</label>
    </div>
    <div class="form-check form-check-inline form-responsive">
      <input
        class="form-check-input radio"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio3"
        value="option3"
        v-model="filter"
        @change='passEvent(lastMonth)'
      />
      <label class="form-check-label" for="inlineRadio3">Last Month</label>
    </div>
    <div class="form-check form-check-inline form-responsive">
      <input
        class="form-check-input radio"
        type="radio"
        name="inlineRadioOptions"
        id="inlineRadio4"
        value="option4"
        v-model="filter"
        @change='passEvent(forever)'
        
      />
      <label class="form-check-label" for="inlineRadio4">Forever</label>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'filterComponent',
    data() {
      return {
        filter: Array,
        lastWeek:[new Date(), new Date()],
        lastMonth:[new Date(), new Date()],
        forever:[ new Date() / 1000 - new Date() / 1000,  new Date() / 1000],
        pastDay:[new Date() / 1000 - 86400, new Date() / 1000]
      }
    },
    methods: {
      passEvent(event){
        this.$store.commit('setFilterTime', event)
        this.$store.dispatch('postsApi')
      }
    },
    mounted(){
      this.lastWeek = [
        new Date(this.lastWeek[0].getFullYear(), this.lastWeek[0].getMonth(), this.lastWeek[0].getDate() - this.lastWeek[0].getDay() - 6) / 1000,
        new Date(this.lastWeek[1].getFullYear(), this.lastWeek[1].getMonth(), this.lastWeek[1].getDate() - this.lastWeek[1].getDay()) / 1000
      ],
      
      this.lastMonth = [
        new Date( this.lastMonth[0].setMonth(this.lastMonth[0].getMonth() - 1)).setDate(0) / 1000,
        new Date(this.lastMonth[1].setDate(0)) / 1000
      ]
    }
  }
</script>

<style scoped>
.filters {
  text-align: right;
}
.radio{
    background-color: #f1f1f1;

}
.radio:checked{
    background-color: #ff7315;
    border: 1px solid #f1f1f1;
    box-shadow: none;
}

@media only screen and (max-width: 767px) {
  .radio{
      background-color: #f1f1f1;
      display: none;
  }
  .form-responsive {
    display: flex!important;
    justify-content: center!important;
  }
      .radio  label:active {
      background-color: #ff7315!important;
      color: #f1f1f1;
    }
}

</style>
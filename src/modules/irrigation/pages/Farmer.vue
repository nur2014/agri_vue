<template>
<div>
    This is farmer  home page.
    <h1>Add Farmer</h1>
    <div>
      <p>
        Name &nbsp; <input type="text" v-model="farmers.name"/>
      </p>
      <p>
        Address &nbsp; <input type="text" v-model="farmers.address"/>
      </p>
      <p>
        Phone &nbsp; <input type="text" v-model="farmers.phone"/>
      </p>

      <p>
        <button @click="saveFarmer">Save</button>
      </p>
    </div>
  <table>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Phone</th>
    </tr>
    <ListComponent v-for="(val, indx) in list" :key="indx" :farmer="val"/>
  </table>
  </div>
</template>
<script>
import ListComponent from '../components/list'
export default {
  components: {
    ListComponent
  },
  data () {
    return {
      farmers: {
        name: '',
        address: '',
        phone: ''
      },
      list: [
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' }
      ]
    }
  },
  methods: {
    saveFarmer () {
      console.log(`farmer=${this.farmers}`)
      this.$store.dispatch('IrrigationStore/addFarmer', this.farmers)
    }
  }
}

</script>

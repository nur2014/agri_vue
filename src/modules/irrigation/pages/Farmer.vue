<template>
<div>
    This is farmer  home page.
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
      list: [
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' },
        { name: 'nur', address: 'dhaka', phone: '019225555' }
      ]
    }
  }
}

</script>

<template>
<tr>
  <td> {{ farmer.name }}</td>
  <td> {{ farmer.address }}</td>
  <td> {{ farmer.phone }}</td>
</tr>
</template>
<script>
export default {
  props: ['farmer']
}
</script>

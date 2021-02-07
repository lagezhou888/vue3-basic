<template>
  <img :src="result && result.message" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
export default defineComponent({
  name: "DogShow",
  async setup() {
    const rawData = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(rawData.data.message)
    return {
      result: rawData.data
    }
  }
})
</script>

<style scoped>

</style>

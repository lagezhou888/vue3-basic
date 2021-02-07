<template>
  <teleport to="#modal">
    <div id="center" v-if="isOpen">
      <h2>this is a modal</h2>
      <button @click="buttonClick">关闭</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    'close-modal': null
  },
  setup(props, content){
    const buttonClick = () => {
      content.emit('close-modal')
    }
    return {
      buttonClick
    }
  }
})
</script>

<style lang="less" scoped>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
  }
</style>

<template>
  <validate-form action="" @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入邮箱地址"></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-label">密码</label>
      <validate-input ref="inputRef" type="password" :rules="passwordRules" placeholder="请输入密码" v-model="passwordVal"></validate-input>
    </div>
    <template #submit>
      <span class="btn btn-danger">提交</span>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup(){
    const router = useRouter()
    const emailVal = ref('')
    const emailRules: RulesProp = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱地址'},
    ]
    const passwordVal = ref('')
    const passwordRules: RulesProp = [
      {type: 'required', message: '密码不能为空'}
    ]

    const onFormSubmit = (result: boolean) => {
      console.log('result',result)
      if (result) {
        router.push({ name: 'column', params: { id: 1}})
      }
    }

    return {
      onFormSubmit,
      emailVal,
      emailRules,
      passwordVal,
      passwordRules
    }
  }
})
</script>

<style scoped>

</style>

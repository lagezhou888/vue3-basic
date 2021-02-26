<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2021 热带雨林</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
<!--    <validate-form action="" @form-submit="onFormSubmit">-->
<!--      <div class="mb-3">-->
<!--        <label class="form-label">邮箱地址</label>-->
<!--        <validate-input :rules="emailRules" v-model="emailVal" placeholder="输入"></validate-input>-->
<!--      </div>-->
<!--      <div class="mb-3">-->
<!--        <label class="form-label">密码</label>-->
<!--        <validate-input ref="inputRef" type="password" :rules="passwordRules" v-model="passwordVal"></validate-input>-->
<!--      </div>-->
<!--      <template #submit>-->
<!--        <span class="btn btn-danger">提交</span>-->
<!--      </template>-->
<!--    </validate-form>-->
<!--    <ColumnList :list="list"></ColumnList>-->
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, ref } from 'vue'
import {ColumnProps} from "@/components/ColumnList.vue";
// import ColumnList, {ColumnProps} from "@/components/ColumnList.vue"
import GlobalHeader, {UserProps} from "@/components/GlobalHeader.vue"
// import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue'
// import ValidateForm from '@/components/ValidateForm.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'lage'
}
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  },{
    id: 2,
    title: 'test2的专栏',
    // avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  },
  {
    id: 1,
    title: 'test1的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  },{
    id: 2,
    title: 'test2的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  },
  {
    id: 1,
    title: 'test1的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  },{
    id: 2,
    title: 'test2的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  },
  {
    id: 1,
    title: 'test1的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  },{
    id: 2,
    title: 'test2的专栏',
    avatar: require('@/assets/logo.png'),
    description: '这是一个test专栏，非常的有意思哦'
  }
]
export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GlobalHeader,
    // ValidateInput,
    // ValidateForm
  },
  setup() {
    // const inputRef = ref<any>()
    // const emailVal = ref('123@qq.com')
    // const emailRules: RulesProp = [
    //   {type: 'required', message: '电子邮箱地址不能为空'},
    //   {type: 'email', message: '请输入正确的电子邮箱地址'},
    // ]
    // const passwordVal = ref('123')
    // const passwordRules: RulesProp = [
    //   {type: 'required', message: '密码不能为空'}
    // ]
    // const onFormSubmit = (result: boolean) => {
    //   console.log('result',result)
    // }
    return {
      currentUser,
      // list: testData,
      // emailRules,
      // emailVal,
      // passwordRules,
      // passwordVal,
      // onFormSubmit,
      // inputRef
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

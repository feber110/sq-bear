<template>
  <Row style="max-width: 680px;">
    <img src=".././assets/logo.png">
    <Col span="24">{{ desc }}</Col>
    <Col span="24"><span>推广员中心</span></Col>
    <Form ref="formInline"   :rules="ruleValidate">
      <Col span="18" offset="3">
        <FormItem prop="account" >
          <Input type="text" v-model="formItem.account" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Col>
      <Col span="18" offset="3">
        <FormItem prop="password">
          <Input type="password" v-model="formItem.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </Col>
      <Col span="24" right>忘记密码?</Col>
      <Col span="24">
        <FormItem>
          <Button type="success" shape="circle" size='large'   @click="handleLogin">登录</Button>
        </FormItem>
      </Col>
      <Col span="24">
        <Col span="24" style="color:red">{{ alertMessage }}</Col>
        <FormItem>
          <Button type="ghost" shape="circle"  size='large'  @click="handleLoginWithWechat">微信账号登录</Button>
        </FormItem>
      </Col>
      <Col span="24">
        <FormItem>
          <Button type="ghost" shape="circle" size='large' @click="handleLoginWithWeibo">微博账号登录</Button>
        </FormItem>
      </Col>
    </Form>
  </Row>
</template>
<script>
export default {
  name: 'loginComponent',
  data () {
    return {
      formItem: {
        account: this.$cookie.get('account') ? this.$cookie.get('account') : '' ,
        password: this.$cookie.get('account') ? this.$cookie.get('account') : ''
      },
      desc: '开启社交电商时代',
      ruleValidate: {
        account: [
          { required: true, message: 'The account cannot be empty', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'The password cannot be empty', trigger: 'blur' }
        ]
      },
      alertMessage: ''
    }
  },
  methods: {

    handleLogin () {
      // this.axios.get('', {
      //   person: {
      //     account: this.formItem.account,
      //     password: this.formItem.password
      //   }
      // })
      //   .then(function (response) {

      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      this.$cookie.set('account', this.formItem.account, 1)
      this.$cookie.set('password', this.formItem.password, 1)
    },
    handleLoginWithWeibo () {
      // 微信接口
      this.alertMessage = '微博登录正在测试'

    },
    handleLoginWithWechat () {
      // 微博接口
      this.alertMessage = '微信登录正在测试'
    }
  }
}
</script>

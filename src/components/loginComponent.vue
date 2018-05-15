<template>
  <Form ref="formInline"   :rules="ruleValidate">
    <h1>{{ formItem.dsc }}</h1>
    <FormItem prop="account" >
      <Input type="text" v-model="formItem.account" placeholder="Username">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem prop="password">
      <Input type="password" v-model="formItem.password" placeholder="Password">
        <Icon type="ios-locked-outline" slot="prepend"></Icon>
      </Input>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit">Signin</Button>
    </FormItem>
  </Form>
</template>
<script>
export default {
  name: 'loginComponent',
  data () {
    return {
      formItem: {
        account: '',
        password: '',
        dsc: '开启社交电商时代'
      },
      ruleValidate: {
        account: [
          { required: true, message: 'The account cannot be empty', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'The password cannot be empty', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      // axios.get('////')
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

    }
  }
}
</script>

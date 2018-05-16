<template>
  <Row>
    <Col>首页</Col>
    <Row>
      <Col span="4"><img src=".././assets/logo.png" width="70px"></Col>
      <Col span="20">
        <span>推广员{{  user.name }}</span><br>
        <span>{{ user.lastLoginTime }}</span>
      </Col>
    </Row>
    <Row>
      <Col span="16">
        <Col span="12">
          <span>一共收益:{{ user.income.sum }}</span><br>  
          <span>今日收益:{{ user.income.today }}</span>
        </Col>
        <Col span="12">
          <span> 本月收入:{{ user.income.month }}</span><br>
          <span>昨日收益:{{ user.income.lastDay }}</span>
        </Col>
      </Col>
      <Col span="8">
        <Button type="success" size="large">全部</Button>
      </Col>
    </Row>
    <Row>
      <Col span="4" offset="1">审批详情</Col>
    </Row>
    <Row :gutter="16">
      <Col span="8" v-for="(item,index) in data">
        <Button type="success" size="large">{{ item.name }} <br>{{ item.id }}</Button>
      </Col>
    </Row>
  </Row>
</template>
<script>
export default {
  name: 'indexComponent',
  data () {
    return {
      dsc: 'Hi',
      user: {
        name: '张三',
        lastLoginTime: '2018-5-13 13:05',
        income: {
          sum: 234242,
          today: 123,
          month: 23424,
          lastDay: 232
        }
      },
      data: [{name:'待办事项',id: 1},{name:'同城企业',id: 2},{name:'种子商户',id: 3},{name:'待办事项',id: 1},{name:'同城企业',id: 2}]
    }
  },
  methods: {
    
  }
}
</script>

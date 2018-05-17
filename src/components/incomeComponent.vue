<template>
  <row>
    <Col>收益详情</Col>
    <Row>
      <Col span="6"><img src=".././assets/logo.png" width="70px"></Col>
      <Col span="18">
        <span>推广员 张三</span>
        <br>
        <span>目前收益</span>
      </Col>
    </Row>
    <Col span="24">
      <Button type="success" size="large" style="width:49%">7日</Button>
      <Button tyoe="success" size="large" style="width:49%">30日</Button>
    </Col>
    <Col span="24">
      <Button type="success" size="large" style="width:100%" class="buttonstyle" @click="toSeedOrder">种子商户订单</Button>
      <Button tyoe="success" size="large" style="width:100%" class="buttonstyle" @click="toCityOrder">同城企业订单</Button>
      <Button type="success" size="large" style="width:100%" class="buttonstyle" @click="toSpecialOrder">特色分享商户订单</Button>
      <Button tyoe="success" size="large" style="width:100%" class="buttonstyle" @click="toCustomerOrder">消费者订单</Button>
    </Col>

  </row>
</template>

<script>
    export default {
        name: "incomeComponent",
      methods:{
        toSeedOrder(){
          this.$router.push('/SeedOrder');
        },
        toCityOrder(){
          this.$router.push('/CityOrder');
        },
        toSpecialOrder(){
          this.$router.push('/SpecialOrder');
        },
        toCustomerOrder(){
          this.$router.push('/CustomerOrder');
        },
      }
    }
</script>

<style scoped>
  .buttonstyle{
    color: black;
    background-color: white;
    border-color: gray;
    text-align: left;
    border-radius: 0px;
  }
</style>

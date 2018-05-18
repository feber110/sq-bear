<template>
  <row style="max-width: 680px;">
    <Col>收益详情</Col>
    <Row>
      <Col span="6"><img src=".././assets/logo.png" width="70px"></Col>
      <Col span="18">
        <span>推广员 张三</span>
        <br>
        <span>目前收益</span>
      </Col>
    </Row>
    <!--<Col span="24">-->
      <!--<Button type="success" size="large" style="width:49%">7日</Button>-->
      <!--<Button tyoe="success" size="large" style="width:49%">30日</Button>-->
    <!--</Col>-->
    <!--<Col span="24">-->
      <!--<Button type="success" size="large" style="width:100%" class="buttonstyle" @click="toSeedOrder">种子商户订单</Button>-->
      <!--<Button tyoe="success" size="large" style="width:100%" class="buttonstyle" @click="toCityOrder">同城企业订单</Button>-->
      <!--<Button type="success" size="large" style="width:100%" class="buttonstyle" @click="toSpecialOrder">特色分享商户订单</Button>-->
      <!--<Button tyoe="success" size="large" style="width:100%" class="buttonstyle" @click="toCustomerOrder">消费者订单</Button>-->
    <!--</Col>-->
    <Tabs type="card">
      <TabPane label="7日">
        <Button type="dashed" size="large" long class="buttonstyle" @click="toSeedOrder">
          <Col span="24">
            <Col span="4">
              种子商户订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="dashed" size="large" long class="buttonstyle" @click="toCityOrder">
          <Col span="24">
            <Col span="4">
              同城企业订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button type="dashed" size="large" long class="buttonstyle" @click="toSpecialOrder">
          <Col span="24">
            <Col span="4">
              特色分享商户订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="dashed" size="large" long class="buttonstyle" @click="toCustomerOrder">
          <Col span="24">
            <Col span="4">
              消费者订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
      </TabPane>
      <TabPane label="30日">
        <Button type="dashed" size="large" long class="buttonstyle" @click="toSeedOrder">
          <Col span="24">
            <Col span="4">
              种子商户订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="dashed" size="large" long class="buttonstyle" @click="toCityOrder">
          <Col span="24">
            <Col span="4">
              同城企业订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button type="dashed" size="large" long class="buttonstyle" @click="toSpecialOrder">
          <Col span="24">
            <Col span="4">
              特色分享商户订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="dashed" size="large" long class="buttonstyle" @click="toCustomerOrder">
          <Col span="24">
            <Col span="4">
              消费者订单
            </Col>
            <Col span="2" offset="16">
              20
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
      </TabPane>
    </Tabs>
  </row>
</template>

<script>
    import CityList from "./cityList";
    export default {
        name: "incomeComponent",
      components: {CityList},
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
    /*border-color: green;*/
    -webkit-border-radius: 0px;
  }
</style>

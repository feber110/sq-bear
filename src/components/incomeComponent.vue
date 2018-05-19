<template>
  <row style="max-width: 680px;">
    <Col class="title">收益详情</Col>
    <Row>
      <Col span="6"><img src=".././assets/logo.png" width="70px"></Col>
      <Col span="18">
        <span>推广员: {{user.name}}</span>
        <br>
        <span>目前收益: {{user.income}}</span>
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
    <Col class="demo-tabs-style1">
      <Tabs type="card">
      <TabPane label="7日">
        <Button type="success" size="large" long class="buttonstyle" @click="toSeedOrder">
          <Col span="24">
            <Col span="4">
              种子商户订单
            </Col>
            <Col span="2" offset="16">
              {{week.seedorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="success" size="large" long class="buttonstyle" @click="toCityOrder">
          <Col span="24">
            <Col span="4">
              同城企业订单
            </Col>
            <Col span="2" offset="16">
              {{week.cityorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button type="success" size="large" long class="buttonstyle" @click="toSpecialOrder">
          <Col span="24">
            <Col span="4">
              特色分享商户订单
            </Col>
            <Col span="2" offset="16">
              {{week.specialorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="success" size="large" long class="buttonstyle" @click="toCustomerOrder">
          <Col span="24">
            <Col span="4">
              消费者订单
            </Col>
            <Col span="2" offset="16">
              {{week.customerorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
      </TabPane>
      <TabPane label="30日">
        <Button type="success" size="large" long class="buttonstyle" @click="toSeedOrder">
          <Col span="24">
            <Col span="4">
              种子商户订单
            </Col>
            <Col span="2" offset="16">
              {{month.seedorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="success" size="large" long class="buttonstyle" @click="toCityOrder">
          <Col span="24">
            <Col span="4">
              同城企业订单
            </Col>
            <Col span="2" offset="16">
              {{month.cityorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button type="success" size="large" long class="buttonstyle" @click="toSpecialOrder">
          <Col span="24">
            <Col span="4">
              特色分享商户订单
            </Col>
            <Col span="2" offset="16">
              {{month.specialorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        <Button tyoe="success" size="large" long class="buttonstyle" @click="toCustomerOrder">
          <Col span="24">
            <Col span="4">
              消费者订单
            </Col>
            <Col span="2" offset="16">
              {{month.customerorder}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
      </TabPane>
    </Tabs>
    </Col>
  </row>
</template>

<script>
    import CityList from "./cityList";
    export  default {
      name: "incomeComponent",
      components: {CityList},
      data () {
        return {
          user: {
            name: '张三',
            income: '$12000'
          },
          week: {
            seedorder: 15,
            cityorder: 20,
            specialorder: 25,
            customerorder: 30,
          },
          month: {
            seedorder: 15,
            cityorder: 20,
            specialorder: 25,
            customerorder: 30,
          }
        }
      }

      ,
      methods:{
        toSeedOrder(){
          this.$router.push('/seedOrder');
        },
        toCityOrder(){
          this.$router.push('/cityOrder');
        },
        toSpecialOrder(){
          this.$router.push('/specialOrder');
        },
        toCustomerOrder(){
          this.$router.push('/customerOrder');
        },
      }
    }
</script>

<style>
  .buttonstyle{
    color: black;
    background-color: white;
    border-color: black;
    -webkit-border-radius: 0px;
  }

  .title{
    font-size: 25px;
  }

  .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    width:250%;
  }
</style>


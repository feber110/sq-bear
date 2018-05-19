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
        <Col v-for="(item,index) in data">
          <Button type="success" size="large" long class="buttonstyle" >
          <Col span="24">
            <Col span="4">
              {{item.name}}
            </Col>
            <Col span="2" offset="16">
              {{item.number}}
            </Col>
            <Col span="2">
              <img src=".././assets/logo.png" width="20px" />
            </Col>
          </Col>
        </Button>
        </Col>
      </TabPane>
      <TabPane label="30日">
        <Col v-for="(item,index) in data">
          <Button type="success" size="large" long class="buttonstyle">
            <Col span="24">
              <Col span="4">
                {{item.name}}
              </Col>
              <Col span="2" offset="16">
                {{item.number}}
              </Col>
              <Col span="2">
                <img src=".././assets/logo.png" width="20px" />
              </Col>
            </Col>
          </Button>
        </Col>
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
          data:[
            {name:'种子商户订单',number:30},
            {name:'同城企业订单',number:14},
            {name:'特色分享商户订单',number:32},
            {name:'消费者订单',number:76},
          ]
        }
      }
      ,
      methods:{

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


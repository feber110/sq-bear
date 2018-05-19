<template>
    <row  style="max-width: 680px;">
      <col>
        订单中心
      </col>
      <Col span="24" style="text-align: left;">
        <span>尊敬的推广员：{{user.name}}</span>
        <br>
        <span>您一共有{{citynumber}}家同城企业，一共产生{{ordernumber}}次订单</span>
      </Col>
      <Col span="24" v-for="(item,index) in orderdata">
        <Button type="success" size="large" style="width:100%" class="buttonstyle">
          <Col span="24">
            <Col span="4">
              <img src=".././assets/logo.png" width="40px"> </img>

            </Col>
            <Col span="4">
              <Col span="24">
                {{item.name}}
              </Col>
              <Col span="24">
                下单时间：{{item.time}}
              </Col>
              <Col span="24" >
                总价：{{item.price}}
              </Col>
            </Col>

          </Col>
        </Button>
      </Col>
    </row>
</template>

<script>
    export default {
        name: "CityOrder",
      data(){
        return {
          user: {name: '张三',},
          citynumber: 20,
          ordernumber: 255,
          orderdata:[
            {name:'男士夹克',time:'2018-5-20',price:'$200'},
            {name:'女士夹克',time:'2018-5-18',price:'$100'},
          ]
        }
      }
    }
</script>

<style scoped>
  .buttonstyle{
    color: black;
    background-color: white;
    border-color: gray;
    -webkit-text-align: left;
    -webkit-border-radius: 0px;
  }
</style>

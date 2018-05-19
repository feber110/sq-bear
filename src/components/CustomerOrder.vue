<template>
  <row style="max-width: 680px;">
    <col>
    订单中心
    </col>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员：{{user.name}}</span>
      <br>
      <span>您一共有{{customernumber}}个消费者，一共产生{{ordernumber}}次订单</span>
    </Col>
    <Col span="24" v-for="(item,index) in itemdata">
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
              总价:{{item.price}}
            </Col>
          </Col>

        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "CustomerOrder",
    data(){
      return {
        user:{
          name:'Tom',
        },
        customernumber:100,
          ordernumber:200,
        itemdata: [
          {name:'男士夹克衫',time:'2018-5-4',price:'$240'}
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

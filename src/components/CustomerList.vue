<template>
  <row style="max-width: 680px;">
    <col>
    消费者列表
    </col>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员：{{user.name}}</span>
      <br>
      <span>您一共发展了{{customernumber}}位消费者，一共产生了{{ordernumber}}次订单</span>
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
              日期:{{item.time}}
            </Col>
          </Col>
          <Col span="4" offset="12">
            <Col span="24" >
              订单{{item.order}}
            </Col>
          </Col>


        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "CustomerList",
    data(){
      return{
        user:{
          name:'Tom',
        },
        customernumber:200,
        ordernumber:700,
        itemdata:[
          {name:'哈扯',time:'2018-5-19',order:20},
          {name:'哈扯',time:'2018-5-19',order:20},
          {name:'哈扯',time:'2018-5-19',order:20},
          {name:'哈扯',time:'2018-5-19',order:20},
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

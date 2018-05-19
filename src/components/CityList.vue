<template>
  <row style="max-width: 680px;">
    <col>
    同城企业列表
    </col>
    <Col span="24" style="text-align: left;">
      <span>尊敬的推广员：{{user.name}}</span>
      <br>
      <span>您一共发展了{{companynumber}}家同城企业</span>
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
          </Col>
          <Col span="4" offset="12">
            <Col span="24">
              订单:{{item.price}}
            </Col>
            <Col span="24" >
              收益:{{item.income}}
            </Col>
          </Col>


        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "CityList",
    data(){
      return {
        user:{
          name:'Tom',
        },
        companynumber:100,
        itemdata:[
          {name:'韩都衣舍',price:200,income:100}
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

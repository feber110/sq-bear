<template>
  <row style="max-width: 680px;">
    <col>
    代办事项
    </col>
    <Col span="24" style="text-align: left;">
      <span>您有{{todonumber}}}个代办事项</span>
    </Col>
    <Col span="24" v-for="(item,index) in tododata">
      <Button type="success" size="large" style="width:100%" class="buttonstyle">
        <Col span="24">

          <Col span="4">
            <Col span="24">
              {{item.name}}
            </Col>
            <Col span="24">
              {{item.subtitle}}
            </Col>
          </Col>
          <Col span="4" offset="16">
            <Col span="24" >
              {{item.content}}
            </Col>
          </Col>


        </Col>
      </Button>
    </Col>
  </row>
</template>

<script>
  export default {
    name: "TodoList",
    data(){
      return {
        todonumber:20,
        tododata:[
          {name:'主标题',subtitle:'副标题',content:'内容'}
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

<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <button @click="es_6">运行 es_6 函数</button>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'Es6Practise',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{

  },
  methods:{
    es_6(){
      //数值
      /**
       * Number.isFinite()用来检查一个数值是否为有限的
       * Number.isNaN()用来检查一个值是否为NaN
       * Number.parseInt()
       * Number.parseFloat()
       * Number.isInteger()用来判断一个数值是否为整数
       * Number.EPSILON-极小的常量
       * 安全整数范围在-2^53到2^53之间（不含两个端点）
       * Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内
       */
      console.log(0b111110111 === 503)
      console.log(`Number(0b111111):${Number(0b111111)}`) //模板字符串-`${numb}`
      /**
       * Math对象的扩展
       * 
       * Math.trunc()方法用于去除一个数的小数部分，返回整数部分
       * Math.sign()方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
       * Math.cbrt()方法用于计算一个数的立方根
       * Math.clz32()方法将参数转为 32 位无符号整数的形式，然后返回这个 32 位值里面有多少个前导0
       * Math.imul()方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数
       * Math.fround()方法返回一个数的32位单精度浮点数形式
       * Math.hypot()
       * 
       * 对数方法
       * Math.expm1(x)返回 ex - 1，即Math.exp(x) - 1
       * Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN
       * Math.log10(x)返回以 10 为底的x的对数。如果x小于 0，则返回 NaN
       * Math.log2(x)返回以 2 为底的x的对数。如果x小于 0，则返回 NaN
       * 
       * 双曲函数方法
       * Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
         Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
         Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
         Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
         Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
         Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）
       *
       * 指数运算符（**）
       *  
       */
    }
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

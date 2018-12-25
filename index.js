; (function (window) {




  var vm = new Vue({
    el: '#app',
    data: {
      name:'',
      password:'',
      list:[],
    },
    created() {
      axios.get(`http://localhost:3000/list`).then(res => 
        this.list = res.data || []
      )
    },
    methods: {
      add(name,password){
        axios.post(`http://localhost:3000/list`,{name,password }).then(res=>{
          this.list.push(res.data);
          this.name=''
          this.password=''
        })
      }
    },
    components: {
      login: {
        data() {
          return {
              //这里面也是可以又是数据的，可读可写，但是prop里面的数据只可读啊
          }
        },
        template: '<ul id="ul"><li v-for="item in list">{{item.name}}</li></ul>',
        props: ['list'],

      },
      password:{
        data(){
            return{

            }
        },
        template:'<ul id="ul"><li v-for="item in list">{{item.password}}</li></ul>',
        props:['list'],
      }
    }
  })



  var span=document.querySelector('span')
  var password=document.querySelector("input[type='password']")
  var i=0;

  span.onclick=function(){
    i++
   if(i%2!==0){
    password.type="text"
   }else{
    password.type="password"

   }
  }
  window.vm = vm
})(window)
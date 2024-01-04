<template>

    <div  id='container'>
        <h3>LogIn</h3>
     <div id='child'>
        <form id="form" @submit.prevent="login">
         <table>
        <tr>
       <td><label><strong>Email</strong></label></td>
       <td> <label><strong>:</strong></label></td>
       <td><input type="email" placeholder="Enter Email" class="input" v-model="email"/> </td>
      </tr> 
       
        <tr>
       <td> <label><strong>Password</strong> </label></td>
       <td> <label><strong>:</strong></label></td>
        <td><input type="password" placeholder="Enter Password" class="input" v-model="password" /> </td>
        </tr> 
        
        </table>
        <button type="submit">LogIn</button>
      
        </form> 
          
     </div>
     <p v-if="error" style="color:red;">{{loginError}}</p>
     <a @click.prevent="changes()">forget password?</a>
        </div>
     
        
</template>
<script>
import axios from 'axios'

export default{
    data(){
        return{

        
            email:"",
            password:"",
            loginError:"",
            error:false,
            
        }
       
        
    },
     methods:{
            login(){
                if(this.email!==""&&this.password!==""){
                axios.get('https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/users',
                {
                    headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
                }
                }).then((Response)=> {
                    this.getData(Response.data)
                    console.log(Response)})
                
            }else{
                alert("fill all the fields")
            }
            },
            getData(data){
               const check=data.find(e =>  this.email===e.email&&this.password===e.password)
               {
                if(check){
                    this.$store.commit('change',true)
                    this.$router.push('/mainpage')
                }
                else{
                    this.error=true
                    this.loginError="user details not valid"
                    alert("if you are a new user please sign up")
                }
            }
     },
     changes(){
        this.$router.push('/forget-password')
       this.$store.commit('change',true)
     }
     
     }
        
}
</script>
<style scoped>
#container{
   
    border-radius: 20px;
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    left:35%;
    width:400px;
    height: 350px;
    background-color:rgb(243, 240, 235);
    position: absolute;
}
#child{
   position: relative;
   top:10%;
}
button{
    position: relative;
    top: -10px;
    left: 30%;
    padding: 10px 20px;
    background-color: blue;
    color:aliceblue;
    border-radius: 10px;
    border: none;
}
#form{
    width: 100%;
    margin: 20px;
}
td{
    padding-bottom: 30px;
}
input{
    padding:7px 5px;
    border-radius: 10px;
    border: 1px solid black;
    outline: 0px;
    
}
.input:focus{
   background-color: azure;
}

h3{
 
 margin-left: 150px;
 font-size: 25px;
color: rgb(86, 86, 228);

}
 p{
    margin-bottom: 0px;
    margin-left: 30px;
 }
 .nav{
    margin-left:220px;
    
 }
 a{
    position: relative;
    top: 20px;
    margin-left: 120px;
    color: blue;
    cursor: pointer;
    text-decoration: underline;
 }

</style>
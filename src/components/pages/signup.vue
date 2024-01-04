<template>
   <div  id='container'>
        <h3>Sign Up</h3>
    <div id='child'>
            <form id="form" @submit.prevent="signUp">
            <table>
           <tr>
            <td> <label><strong>User Name</strong></label></td>
            <td> <label><strong>:</strong></label></td>
           <td><input type="text" placeholder="Enter User Name" class="input" v-model="userName" /> </td>
           </tr> 
           <tr>
           <td> <label><strong>Email</strong></label></td>
           <td> <label><strong>:</strong></label></td>
           <td><input type="email" placeholder="Enter Email" class="input" v-model="email"/> </td>
           </tr> 
        
          <tr>
          <td> <label> <strong>Password</strong> </label></td>
          <td> <label><strong>:</strong></label></td>
          <td><input type="password" placeholder="Enter Password" class="input" v-model="password"/> </td>
          </tr> 
           
           
          </table>
        <button type="submit">Register</button>
        </form>
     </div>
     
    </div>
     
</template>
<script>
import axios from 'axios'


export default{
    name:'PostPage',
    data(){
        return{

           
                email:"",
                password:"",
                userName:"",
            
            signupError:'',
            error:false,
        }
       
        
    },
     methods:{
         signUp(){
            if(this.email!==''&&this.password!==""&&this.userName!==""){
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
                const exists=data.find(e=>e.email===this.email)
                
                if(exists){
                    alert("user already exist")
                }
                else{
                    axios.post('https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/users',
                {
                    usename:this.userName,
                    email:this.email,
                    password:this.password

                },
                    {
                        headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
                }
                }).then((Response)=> {
                    console.log(Response)})
                   
                    this.$router.push('/mainpage')
                }
            
           
            },
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
   height: 400px;
   background-color:rgb(243, 240, 235);
}
#child{
   position: relative;
   top:10%;
}
button{
    position: relative;
    top: 10%;
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
.input{
    padding:7px 5px;
    border-radius: 10px;
    width:100%;
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
 

</style>
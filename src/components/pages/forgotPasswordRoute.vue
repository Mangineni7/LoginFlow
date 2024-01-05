<template>
    <div>
        <div class="container" v-if="isValid">
            <button @click.prevent="gotoLogin()" class="btn">Back</button>
            <form @submit.prevent="reset">
                <label >Password</label>
                <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}" title="enter atleat 1 digit amd 1 lower character and 1 upper character and l special character and be atleast 8 characters " v-model="password"/>
                <label>Confirm Password</label>
                <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}" title="enter atleat 1 digit amd 1 lower character and 1 upper character and l special character and be atleast 8 characters " v-model="conformPassword"/>
                <button type="submit" id="bb"> Reset Password</button>
                 <p v-if="passwordVerify" style="color:red;">Password did not match</p>
            </form>
        </div>
       
         <div class="container1" v-else-if="isVerify">
        <h3>Reset Password</h3>
           <img src="@/assets/success icon.png" alt="image" />
           <p style="color:black;font-size:14px;">Password Reset Successfully... <br/><span style="margin-left:30px;">Please Sign In</span></p>
          
          <button @click.prevent="gotoLogin()" id="btn">Sign In</button>
        </div>
        <p v-else style="color:red;">{{error}}</p>
    </div>
</template> 
<script>
import axios from 'axios';
export default{
    name:'forgotPasswordRoute',
    data(){
        return{
            password:'',
            conformPassword:'',
            check:false,
            email:decodeURIComponent(this.$route.query.email),
            code:this.$route.query.code,
             isValid:false,
            error:"", 
            isVerify:false,
            passwordVerify:false
        }
    },mounted(){
        
     
    axios.get('https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/forget_password',
    
                {
                    headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
                 }
         }).then((Response)=>
         this.checking(Response.data),
         console.log(Response))
    
    },
    methods:{
        checking(datas){

            const exist=datas.find(e=>this.email===e.email&&this.code===e.code)
            if(exist){
                this.isValid=true
                this.$router.push('/reset-password')
            }
            else{
                this.check=true
                this.error="invalid url link"
            }
        },
        reset(){
            if(this.password===this.conformPassword){
                 this.isVerify=true
                 this.isValid=false
                 this.passwordVerify=false
            axios.patch(`https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/users?email=eq.${this.email}`,{
                password:this.password
            },
            {
                    headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
                 }
         }).then((Response)=>
        console.log(Response))
        
        }else{
              this.passwordVerify=true
        }
        
        },
        gotoLogin(){
            this.$router.push("/")
            this.$store.commit('change',false)
        }
    }
}
</script>
<style scoped>
.container{
    width: 300px;
    border: 2px solid black;
    padding: 20px;
    position: absolute;
    top: 40%;
    left: 38%;
    border-radius: 10px;
    position: absolute;
}
form{
    display: flex;
    flex-direction: column;
}
input{
    padding: 5px;
    border-radius: 7px;
    border: 1px solid blue;
    margin-bottom: 5px;
    outline:none;
}
button{
    margin-top: 5px;
    padding: 5px;
    background-color: blue;
    border-radius: 7px;
    border: none;
    color: antiquewhite;
}
.btn{
    
    margin-left:250px;
    background-color:whitesmoke;
    width: 50px;
    color: black;
}
.container1{
    border: 2px solid black;
    width:300px;
    position: absolute;
    left: 35%;
    top: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius:20px ;
}
img{
    width:60px;
    height: 60px;
}
#btn{
    width: 200px;
}
</style>
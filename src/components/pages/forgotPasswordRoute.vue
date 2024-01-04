<template>
    <div>
        <div class="container" v-if="isValid">
            <button @click.prevent="gotoLogin()" class="btn"><img src="@/assets/icons8-remove-30.png"></button>
            <form @submit.prevent="reset">
                <label >Password</label>
                <input type="password" v-model="password"/>
                <label>Conform Password</label>
                <input type="password" v-model="conformPassword"/>
                <button type="submit" id="bb"> Reset Password</button>
            </form>
        </div>
        <p v-if="check" >Error: <span style="color:red;">{{error}}</span></p>
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
            isValid:false,
            error:"",
            check:false,
            email:decodeURIComponent(this.$route.query.email),
            code:this.$route.query.code
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
    border: 2px solid violet;
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
bb{
    margin-top: 5px;
    padding: 5px;
    background-color: blue;
    border-radius: 7px;
    border: none;
    color: antiquewhite;
}
img{
    
    margin-left: 500px;
}
</style>
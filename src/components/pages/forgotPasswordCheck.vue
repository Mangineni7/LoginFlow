<template>
    <div >
        <div class="container">
            <button @click.prevent="gotoLogin()" id="btn">Back</button>
            <form @submit.prevent="reset">
                <label>Email</label>
                <input type="email" placeholder="enter email" v-model="email" required/>
                <button type="submit">Reset Password</button>
                <p  v-if="isVerified" style="color:red;">{{error}}</p>

            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    name:'forgotPasswordCheck',
    data(){
        return{
            email:"",
            code:"",
            link:'',
            error:'',
           isVerified:false,
            weburl:process.env.VUE_APP_WEB_URL
        }
    },
    methods:{
        reset(){
            axios.get(`https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/users?email=eq.${this.email}&select=*`,
             {
                    headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
                 }
         }).then((Response)=>
         this.checkEmail(Response.data),
         console.log(Response))
            
        },
        checkEmail(data){
            const exist=data.find(e=>this.email===e.email)
            if(exist){
                this.isVerified=false
                this.$store.commit('change',true)
                this.code=Math.random().toString(26).slice(2,10)
            const route='/reset-password'
            const queryParms=new URLSearchParams();
            queryParms.set('email',this.email)
            queryParms.set('code',this.code)
            this.link=`${process.env.VUE_APP_WEB_URL}${route}?${queryParms.toString()}`;

            axios.post('https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/forget_password',
            {
              email:this.email,
              code:this.code,
              link:this.link
            },
                {
                    headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
                 }
         }).then((Response)=>
         console.log(Response)) 

            }
            else{
                this.isVerified=true
                this.error="email does not exists "
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
    border: 2px solid black;
    width:400px;
    position: absolute;
    left: 35%;
    top: 35%;
    padding: 20px;
    border-radius:20px ;
}
.container form{
    display: flex;
    flex-direction: column;
    margin: 20px;

}
input{
    margin: 10px 0px;
    margin-top:3px;
    padding: 7px;
    border-radius: 8px;
    outline: 0px;
    border: 1px solid blue;
    font-size: 15px;
    }
    button{
        padding: 5px;
        border-radius: 7px;
        border: none;
        background-color: blue;
        color: whitesmoke;
    }
    label{
        font-weight: bolder;
    }
    #btn{
    
        margin-left: 0px;
       
        
       
    }
</style>

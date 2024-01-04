<template>

    <div id="container">
         <button id="btn" @click.prevent=" goToMainpage()"><img src="@/assets/icons8-remove-30.png"></button>
        
        <form @submit.prevent="onPostDetails">
           
        <label>First Name</label>
        <input type="text" placeholder="Enter First Name" v-model="first_name" required/>
        <label>Last Name</label>
        <input type="text" placeholder="Enter Last Name" v-model="last_name"  required/>
        <label>Email</label>
        <input type="email" placeholder="Enter Email" v-model="email"  required/>
        <span v-if="msg.email" style="color:red">{{msg.email}}</span>
        <label>img</label>
        <input type="text" placeholder="Enter Image url" v-model="img" required/>
        <button id="b" type="submit">Post</button>
        </form>
       
    </div>
</template>
<script>
import axios from 'axios'
export default{
    data(){
        return{
            first_name:'',
            last_name:'',
            email:'',
            img:'',
            msg:[]
        }
    },
    methods:{
       onPostDetails(){
        axios.get('https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/posts',{
           headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
            }
        }).then(Response=>{
            this.checkPost(Response.data)
        })
       },
        checkPost(data){
            const exist=data.find(e=>this.email===e.email)
      if(exist)
       {
        alert("post already exist")
       }
       else{
       axios.post('https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/posts',
        {
        firstname:this.first_name,
        lastname:this.last_name,
        email:this.email,
        image:this.img
        },
        {
           headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
            }
        })
        .then(Response=>{
            console.log(Response)
            this.$router.push("/mainpage")
        })
       }
        },
        validate(value){
        if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(value))
    {
      this.msg['email'] = '';
    } else{
      this.msg['email'] = 'Please enter a valid email address';
    } 
      },
      goToMainpage(){
        this.$router.push('/mainpage')
       },
       },
       
       watch:{
        email(value){
            this.email=value
            this.validate(value)
        }
       }
       
}
    


</script>
<style scoped>
label{
    display:block;
    position: relative;
    left:0px;
    font-size: 18px;
    margin-top: 8px ;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: blueviolet;
}
#container{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    width: 360px;
    background-color: whitesmoke;
    border: 1px solid black;
   margin-top:10px ;
    height: 360px;
    border-radius:20px ;
}
input{
    width: 300px;
    padding: 10px;
    outline: 0px;
    border-radius: 10px;
    border:1px solid blue;
}
#b{
    display: block;
    position: relative;
    left:120px;
    top: 20px;
    padding:10px 40px;
    background-color: blue;
    border: none;
    border-radius: 10px;
    color: aliceblue;
}
form{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
#btn{
    margin-left: 330px;
    margin-top: 0px;
    background: none;
    border: none;
    width: 10px;
    height: 10px;
}
img{
    position: relative;
    top: 5px;
    width: 15px;
    height: 15px;
}
</style>
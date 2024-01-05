<template>

<div id="container">
        <div id="box-container">
           <h4>Proxima</h4>
             <ul>
                <router-link class="nav-bar" to="/" @click.prevent=" Signout()">Signout</router-link>
             </ul>
       </div>
     
    <div>
         
        <table>
            <button @click.prevent=" posts()"> <img src="@/assets/plusAdd.png" id="img"/></button> 
            <tbody>
                
                <tr v-for="post in  gettingDetails" :key="post.Id">
                    <td ><img :src="post.image" alt="dp"></td>
                    <td id="td">{{post.firstname}} {{post.lastname}}
                        <br/>
                        <span>{{post.email}}</span>
                    </td>
                </tr>
            </tbody> 
        </table>
    </div>
</div>
</template>
<script>
import axios from "axios"
export default{
    data(){
        return{
            gettingDetails:[]
        }
    },
    mounted(){
        this.getDetails()
    },
    methods:{
        Signout(){
            
            this.$router.push("/") 
        },
        getDetails(){
             axios.get('https://xpnlhnhruzfrcvuyospu.supabase.co/rest/v1/posts',
                {
                    headers:{
                'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ",
                'apikey':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwbmxobmhydXpmcmN2dXlvc3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2NjAzMjgsImV4cCI6MjAxOTIzNjMyOH0.XzHYdk8qsJdbceD5tmop2RnOqFraI_geoo6hEK9zyKQ"
                }
                }).then((Response)=> {
                        
                this.getResponse(Response.data)
                    console.log(Response)
                })
            },
        
        getResponse(posts){
           
                this.gettingDetails=posts

            },
        posts(){
            this.$store.state.check===true
            this.$router.push('/postpage')
        }
}
}



</script>
<style scoped>
table{
   
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 10px;
    min-width: 200px ;
}
#box-container{
    display: flex;
    justify-content: space-between;
    background-color: azure;
    margin-bottom: 20px; 
    width: 100%; 
    z-index: 1;
   
}
h4{
    margin-left: 30px;
    font-size: 20px;
}
.nav-bar{
    margin-right: 30px;
    margin-top: 35px;
    text-decoration: none;
   
}
img{
    width: 100px;
    height: 100px;
    border-radius: 100%;
}
#td{
    font-size: 20px;
    font-weight: bolder;
    width: 220px;
    padding: 20px;
}
span{
    font-size: 15px;
    font-weight: normal;
}
table{
    background-color: whitesmoke;
}
tr{
    margin-bottom: 50px;
}
button{
    width: 20px;
    height: 20px;
    position:absolute;
    left: 190px;
    background: none;
    border: none;
}
#img{
    width: 20px;
    height: 20px;
    position: relative;
    left:190px;
}
 </style>
<template>
    <div id="nav-bar">
     <h4>Proxima</h4>
     <ul>
        
        <router-link class="nav-bar" to="/">login</router-link>
        <router-link class="nav-bar" to="/signup">Signup</router-link>
       
        
        
     </ul>
    </div>
</template>
<script>


export default {
    
    
}
</script>
<style scoped>
#nav-bar{
    display: flex;
    justify-content: space-between;
    background-color: azure;

}

h4{
    margin-left: 20px;
    
    font-size: 20px;
    
}
.nav-bar{
    margin:0px 30px;
    text-decoration: none;
    font-weight: bo;
}

  
</style>

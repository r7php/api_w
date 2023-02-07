
<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">W API test</a>
      </div>
    </nav>
    
    <div class="container">

      

          <label><br>Nome</label>
          <input type="text" placeholder="name" v-model="addName">
          <label >CNPJ</label> 
          <input type="text" placeholder="CNPJ" v-model="addDoc">
          <label>Sobre</label>
          <input type="text" placeholder="Sobre" v-model="addabout">
          <label>Atividade</label>
          <input type="text" placeholder="Atividade" v-model="addActive">
          <label>Site</label>
          <input type="text" placeholder="Site" v-model="addSite">
          
          <button v-on:click="add" class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>CNPJ</th>
            <th>SOBRE</th>
            <th>ATIVIDADE</th>
            <th>SITE</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="post in posts" :key="post.id">
            
            <td>{{post.name}}</td>
            <td>{{post.doc}}</td>
            <td>{{post.about}}</td>
            <td>{{post.active}}</td>
            <td>{{post.site}}</td>
            
            <td>
              <!-- <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button> -->
            </td>

          </tr>

        </tbody>
      
  
      </table>

    </div>

  </div>
</template>

<script>

import axios from 'axios';

export default{

  data(){
    return{
        posts:[],
        addName:'',
        addDoc:'',
        addabout:'',
        addActive:'',
        addSite:''
    }
  },

  methods:{
    add:function(){      
        axios
        .post('http://localhost:4000/api/inserirData',{
            
            name:this.addName,
            doc:this.addDoc,
            about:this.addabout,
            active:this.addActive,
            site:this.addSite

            

        })
        .then(json=>{
            console.log(this.addName, this.addDoc,this.addabout,this.addActive,this.addSite  )
            console.log(json.data);
            alert('Cadastrado');
        })
        .catch(err => console.log(err));
    }
  },

  mounted(){
    axios
    .get('http://localhost:4000/api/buscaEmpresa')
    .then(json=>{
      console.log(this.posts = json.data.user);
    });
  }



  // method:{
  //    salvar(){
  //       alert(this.insert.name)
  //    }
  // }

}
</script>




<style>

</style>

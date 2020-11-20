<template>
  <div>
    <div>
      <header>
        <nav>
          <router-link to="/ordenes" class="menu-item">Ordenes</router-link>
          <router-link to="/productos" class="menu-item"
            >Lista de Productos</router-link
          >
          <router-link to="/ingresarproductos" class="menu-item"
            >Ingresar Productos</router-link
          >
          <router-link to="/clientes" class="menu-item">Clientes</router-link>
        </nav>
      </header>
      <router-view />
    </div>
    <div class="container">
        <div class="row pt-5">
          <div class="cold-md-5">
            <a href="/"
            ><img
              src="https://i.ibb.co/CPXLS7T/logo-The-Tropical-Magic2.png"
              alt="logo-The-Tropical-Magic2"
              border="0"
              width="500px"
              height="500px"
          /></a>
          </div>
            <div class="cold-md-7">
              <div class="card">
                <div class="card-body">
                <form @submit.prevent="addArticle">
                  <div class="form-group">
                    <label for="fname">Nombre del producto</label><br>
                    <input type="text" v-model="article.title" placeholder="titulo" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="fname">Imagen (url)</label><br>
                      <input type="text" v-model="article.imageURL" placeholder="Url de imagen" class="form-control">
                  </div>
                  <div class="form-group">
                    <label for="fname">Descripcion del producto</label><br>
                      <textarea v-model="article.description" cols="30" rows="10" class="form-control" placeholder="inserte una descripcion"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="fname">Precio</label><br>
                    <input type="text" v-model="article.price" placeholder="precio ($)" class="form-control">
                  </div>
                  <button class="btn btn-dark">Agregar</button>
                </form>
                </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
class Article {
  constructor(title, imageURL, description, price){
    this.title = title;
    this.imageURL = imageURL;
    this.description = description;
    this.price = price;
  }
}
export default {
  data() {
    return{
      baseURL: 'http://localhost:3000',
      article: new Article()
    }
  },
  methods: {
    
    addArticle() {
        fetch(`${this.baseURL}/add`, {
        method: 'POST',
        body: JSON.stringify(this.article),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))

      this.article = new Article();
    }
  }
}
</script>

<style>
</style>
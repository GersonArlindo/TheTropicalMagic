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
    <div>
      <div class="container p-4">
        <div class="row">
          <div>
            <div class="row mt-5">
              <div class="col-lg-12">
                <table class="table table-striped">
                  <thead>
                    <tr class="bg-secondary text-light">
                      <th>Id</th>
                      <th>Titulo</th>
                      <th>Descripcion</th>
                      <th>ImagenURL</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="article in articles" :key="article._id">
                      <td>{{ article._id }}</td>
                      <td>{{ article.title }}</td>
                      <td>{{ article.description }}</td>
                      <td>
                        <img
                          v-bind:src="article.imageURL"
                          width="80"
                          height="80"
                        />
                      </td>
                      <td>${{ article.price }}</td>
                      <td>
                        <button
                          @click="deleteArticle(article._id)"
                          class="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="logout">
      <div class="logout_hijo">
        <button class="btn btn-dark" @click="onLogout">Logout this view</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Productos",
      articles: [],
      baseURL: "http://localhost:3000",
    };
  },
  created() {
    this.getArticles();
  },
  methods: {
    async getArticles() {
      const res = await this.axios.get(`${this.baseURL}/articles`);
      this.articles = res.data.articles;
    },
    /*Sirve para salir de modo admin*/
    onLogout() {
      this.$store.dispatch("doLogout");
      this.$router.push("/");
    },

    /*Borrar Productos*/
    deleteArticle(id) {
      console.log("Deleting");
      fetch(`${this.baseURL}/delete/` + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
          this.getArticles();
        });
    },
  },
  /*
  computed: {
    displayedArticles: function () {
      return this.paginate(this.articles);
    },
  },*/
};
</script>

<style>
.logout {
  background-color: #fafafa;
  padding: 0 1rem;
  margin: 1rem;
}
.logout_hijo {
  /* IMPORTANTE */
  width: 200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
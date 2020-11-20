<template>
  <div class="productosPopulares">
    <div class="containerr p-4">
      <div
        class="cardd mb-3"
        v-for="article in articles.slice(0, 5)"
        :key="article._id"
      >
        <div class="row">
          <div class="col-md-4">
            <img v-bind:src="article.imageURL" class="card-img-top" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">
               <i>Descripcion: </i> <br>
                {{ article.description.slice(0, 120) }}...
              </p>
              <p class="card-text">${{ article.price }}</p>
              <div>
                <img src="https://image.flaticon.com/icons/png/512/385/385051.png" alt="" width="80px" height="80px"> <h3 class="subtitle">PROMOCION</h3> 
              </div>
              <button class="btn btn-sm btn-outline-secondary">
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
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
  },
};
</script>

<style>
.containerr {
  background-color: #fafafa;
  padding: 0 1rem;
  margin: 1rem;
}
.cardd {
  /* IMPORTANTE */
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
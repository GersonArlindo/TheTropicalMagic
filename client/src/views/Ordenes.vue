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
              <div class="col-lg-12">
                <table class="table table-striped">
                  <thead>
                    <tr class="bg-secondary text-light">
                      <th>Id</th>
                      <th>idCliente</th>
                      <th>Producto</th>
                      <th>cantidad</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orders" :key="order._id">
                      <td>{{ order._id }}</td>
                      <td>{{ order.idCliente }}</td>
                      <td>{{ order.title }}</td>
                      <td>${{ order.cantidad }}</td>
                      <td>
                        <button
                          @click="deleteOrder(order._id)"
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
    <div class="logout">
      <div class="logout_hijo">
        <button class="btn btn-danger" @click="onLogout">Salir del Modo ADMIN.</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Productos",
      orders: [],
      baseURL: "http://localhost:3000",
    };
  },
  created() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      const res = await this.axios.get(`${this.baseURL}/orders`);
      this.orders = res.data.orders;
    },
    /*Sirve para salir de modo admin*/
    onLogout() {
      this.$store.dispatch("doLogout");
      this.$router.push("/");
    },

    /*Borrar Orden*/
    deleteOrder(id) {
      console.log("Deleting");
      fetch(`${this.baseURL}/deleteOrder/` + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then(res => res.json())
        .then(data => {
          this.getOrders();
        });
    },
  },
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
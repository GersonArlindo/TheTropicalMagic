<template>
  <div>
    <div class="container">
        <br><br><br>
        <center><h1>Ingrese su Orden</h1></center>
      <div class="row pt-5">
        <div class="cold-md-4">
          <a href="/"
            ><img
              src="https://i.ibb.co/CPXLS7T/logo-The-Tropical-Magic2.png"
              alt="logo-The-Tropical-Magic2"
              border="0"
              width="400px"
              height="400px"
          /></a>
        </div>
        <div class="cold-md-8">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addOrder">
                <div class="form-group">
                  <label for="fname">Id del Cliente</label><br />
                  <input
                    type="text"
                    v-model="order.idCliente"
                    placeholder="ID del Cliente"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="fname">Nombre del Producto</label><br />
                  <input
                    type="text"
                    v-model="order.title"
                    placeholder="Nombre del Producto"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="fname">Cantidad</label><br />
                  <input
                    type="text"
                    v-model="order.cantidad"
                    placeholder="Cantidad"
                    class="form-control"
                  />
                </div>
                <button class="btn btn-info">Agregar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
class Order {
  constructor(idCliente, title, cantidad) {
    this.idCliente = idCliente;
    this.title = title;
    this.cantidad = cantidad;
  }
}
export default {
  data() {
    return {
      baseURL: "http://localhost:3000",
      order: new Order(),
    };
  },
  methods: {
    addOrder() {
      fetch(`${this.baseURL}/addOrder`, {
        method: "POST",
        body: JSON.stringify(this.order),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      this.order = new Order();
    },
  },
};
</script>

<style>
</style>
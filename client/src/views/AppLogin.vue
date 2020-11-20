<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-flex justify-content-center h-100">
            <div class="cardL">
              <div class="card-header">
                <h3 align="center">Ingresar</h3>
              </div>
              <div class="card-body">
                <form @submit.prevent="onSubmit" name="form">
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="fas fa-user"></i
                      ></span>
                    </div>
                    <input
                      v-model="username"
                      required
                      type="text"
                      class="form-control"
                      placeholder="Usuario"
                    />
                  </div>
                  <div class="input-group form-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="fas fa-key"></i
                      ></span>
                    </div>
                    <input
                      v-model="password"
                      required
                      type="password"
                      class="form-control"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div class="row align-items-center remember">
                    <input type="checkbox" />Recordarme
                  </div>
                  <br><br>
                  <div class="col-8">
                    <input
                      type="submit"
                      value="Login"
                      class="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppLogin",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    async onSubmit() {
         try {
          await this.$store.dispatch("doLogin", this.username);
          if (this.username === 'admin' && this.password === 'admin') {
               this.$router.push({ name: "Productos" });
          } else {
            alert('Datos incorrectos');
          }
       
        } catch (error) {
          console.error(error);
          }
    },
  },
};
</script>

<style>
html,
body {
  /*background-image: url(palmers.jpg) ;*/

  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  font-family: "Numans", sans-serif;
}

.container {
  height: 100%;
  align-content: center;
}

.cardL {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
}

.cardL-header h3 {
  color: white;
}

.input-group-prepend span {
  width: 50px;
  background-color: #ffc312;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: black;
  background-color: #ffc312;
  width: 100px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}
</style>
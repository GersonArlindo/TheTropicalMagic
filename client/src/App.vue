<template>
  <div>
    <div>
      <header>
        <nav>
          <a href="/"
            ><img
              src="https://i.ibb.co/CPXLS7T/logo-The-Tropical-Magic2.png"
              alt="logo-The-Tropical-Magic2"
              border="0"
              width="125px"
              height="125px"
          /></a>
          <router-link to="/" class="menu-item">Inicio</router-link>
          <router-link to="/productosPopulares" class="menu-item"
            >Productos mas Populares</router-link
          >
          <router-link to="/tienda" class="menu-item">Tienda</router-link>
          <router-link to="/about" class="menu-item">Nosotros</router-link>
          <router-link to="/admin" class="menu-item">Administrador</router-link>
          <router-link to="/registrarsePedidos" class="menu-item"
            >Registrarse para Pedidos</router-link
          >
          <router-link to="/ingresar" class="menu-item">Ingresar</router-link>
        </nav>
      </header>
      <hr />
      <center><h1 class="title">The Tropical Magic</h1></center>
      <center class="subtitle"><h3>Fresh bar y cafeteria</h3></center>
      <router-view />
    </div>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="parrafo">
              Universidad de Oriente UNIVO. <br />
              UNIVO <br />
              Jhojaira || Gerson || Noel <br />
            </p>
            <hr />
            <p class="parrafo">&copy; Todos los derechos reservados.</p>
          </div>
          <div class="column">
            <a class="icon" href="#"> <i class="fab fa-facebook"></i></a>
            <a class="icon" href="#"> <i class="fab fa-whatsapp-square"></i></a>
            <a class="icon" href="#">
              <i class="fab fa-facebook-messenger"></i
            ></a>
            <a class="icon" href="#"> <i class="fab fa-instagram"></i></a>
            <a class="icon" href="#"> <i class="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>

header {
  width: 100vw;
  background-color: #222;
  padding: 15px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

nav .menu-item {
  color: #fff;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #9e5b5b;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}

.title {
  font-family: "Goldman", cursive;
  text-decoration-line: underline;
}

.subtitle {
  font-family: "Goldman", cursive;
  text-decoration-line: underline;
}

.icon {
  font-size: 50px;
  color: rgba(198, 199, 202, 0.815);
  margin-left: 20px;
}

.footer {
  background-color: #0f0f0f;
  margin: 3px;
  padding: 1px;
  height: 100%;
  /* IMPORTANTE */
  text-align: center;
}

.parrafo {
  color: #fff;
}
</style>
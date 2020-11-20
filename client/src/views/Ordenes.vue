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
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
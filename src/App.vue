<template>
  <div id="app">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <a href="#">Novos planos</a>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">FaleMais</a>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  margin-top: 15px;
  margin-left: 50px;
  margin-right: 50px;
}
</style>

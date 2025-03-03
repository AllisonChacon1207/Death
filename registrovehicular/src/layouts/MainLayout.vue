<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header elevated :class="$q.dark.isActive ? 'bg-primary' : 'bg-black'">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>REGISTRO VEHICULAR</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <!--BOTON QR-->
            <q-item clickable v-ripple to="/registrovehicular/src/pages/Datos.vue">
              <q-item-section>
                Datos QR
              </q-item-section>
            </q-item>
              <!--BOTON NFC-->
            <q-item clickable v-ripple to="/registrovehicular/src/pages/Lector.vue">
              <q-item-section>
                Lector NFC
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="">
              <q-item-section>
                Lector API
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>

    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      drawer: ref(false)
    }
  }
}
</script>

<style lang="sass" scoped>
.menu-list .q-item
  border-radius: 0 32px 32px 0
</style>

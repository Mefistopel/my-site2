<template>
  <q-layout view="hhh LpR fFf" class="bg-deep-purple-5 text-white">
    <q-header reveal elevated class="bg-deep-purple-6">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Андрей Янусов
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="$router.push('/')"
          aria-label="Menu"
          icon="style"
        >
        <q-tooltip
          transition-show="scale"
          transition-hide="scale"
        >
          Залипалка...
        </q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      elevated
      v-model="leftDrawerOpen"
      content-class="bg-deep-purple-7"
    >
      <q-list dark>
        <q-item-label header>Доступны разделы</q-item-label>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="http://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Мои записи</q-item-label>
            <q-item-label caption>https://quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="http://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>https://chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>https://forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://www.instagram.com/an.yanusov/">
          <q-item-section avatar>
            <q-icon name="img:statics/icons/logo-vk.svg" style="color: primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Instagramm</q-item-label>
            <q-item-label caption>@an.yanusov</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://vk.com/im?sel=44035224">
          <q-item-section avatar>
            <ion-icon name="logo-vk"></ion-icon>
            <q-icon name="logo-vk" />
          </q-item-section>
          <q-item-section>
            <q-item-label>ВКонтакте</q-item-label>
            <q-item-label caption>Напиши мне в ВК!</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

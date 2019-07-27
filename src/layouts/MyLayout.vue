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
        <q-item to="main">
          <q-item-section avatar>
            <q-icon name="ion-checkmark-circle-outline" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Главная информация</q-item-label>
            <q-item-label caption>Рекомендовано к прочтению</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="about">
          <q-item-section avatar>
            <q-icon name="ion-trophy" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Обо мне</q-item-label>
            <q-item-label caption>Сводная информация</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://vk.com/an.yanusov">
          <q-item-section avatar>
            <q-icon name="ion-logo-vk"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>ВКонтакте</q-item-label>
            <q-item-label caption>Есть вопрос или предложение?
              Напиши мне в ВК!</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" rel="noopener" href="https://www.instagram.com/an.yanusov/">
          <q-item-section avatar>
            <q-icon name="ion-logo-instagram"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Instagram</q-item-label>
            <q-item-label caption>Подпишись, там интересные посты: @an.yanusov</q-item-label>
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

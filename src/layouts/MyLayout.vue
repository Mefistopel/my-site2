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
          :icon="leftDrawerOpen ? 'menu' : 'touch_app'"
        />

        <q-toolbar-title>
          Андрей Янусов
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          :color="$route.path == '/' ? 'primary ' : 'white'"
          @click="$router.push('/')"
          aria-label="Menu"
          icon="update"
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
        <q-item clickable @click="toAbout">
          <q-item-section avatar>
            <q-icon name="ion-trophy" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Обо мне</q-item-label>
            <q-item-label caption>Сводная информация</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="services">
          <q-item-section avatar>
            <q-icon name="feedback" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Услуги</q-item-label>
            <q-item-label caption>Рекомендовано к прочтению</q-item-label>
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
  },
  methods: {
    toAbout () {
      this.$q.dialog({
        title: 'Подтверждение',
        message: 'Для доступа к разделу введите код: 1',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true,
        color: 'primary'
      }).onOk(data => {
        if (data === '1') this.$router.push('about')
        else this.notify()
      }).onCancel(() => {}).onDismiss(() => {
      })
    },
    notify () {
      this.$q.notify({
        message: `Упс! Вы ввели не правильный код.`,
        timeout: 1400, // in milliseconds; 0 means no timeout
        color: 'negative',
        textColor: 'white',
        icon: 'error',
        position: 'center'
      })
    }
  }
}
</script>

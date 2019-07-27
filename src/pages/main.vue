<template>
  <q-page  class="flex justify-center">
    <q-card
       class="q-ma-md"
      style="width: 1100px; background: radial-gradient(circle, #673AB7 0%, #6A1B9A 100%)"
    >
    <q-card-actions class="justify-center">
        <q-btn
          icon="ion-desktop"
          @click="softwareDevelopment"
          flat
        >
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Закажи сайт / web-приложение
          </q-tooltip>
        </q-btn>
        <q-btn icon="ion-thumbs-up" @click="softwareTesting" flat>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Закажи тестирование WEB-ПО
          </q-tooltip>
        </q-btn>
        <q-btn icon="ion-ribbon"  @click="other" flat>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Заказ других работ
          </q-tooltip>
        </q-btn>
      </q-card-actions>

      <q-separator dark />

      <q-card-section>
        <div class="text-h5">{{title}}</div>
        <div class="text-subtitle2"><i>{{subtitle}}</i></div>
      </q-card-section>
      <q-separator  />

      <q-card-section v-if="title == 'Думаешь о собственном сайте / WEB-приложении?'">
        Привет! <br>
        У тебя есть идея собственного сайта или WEB-приложения? Пиши нам!
        <br> <br>
         Наша команда реализует твою идею <b>в короткие сроки и согласно обговорённому бюджету</b>.
        <br> <br>
        Почему мы? <br>
        1) Работаем по Agile-методологии, что обеспечивает прозрачность в разрабокте
        продукта и существенно ускорит воплощение идеи в жизнь. <br>
        2) Используем современные инструменты для разработки:
        <br>
         - JavaScript (Vue.js, Angular4, FabricJS, HighchartsJS и т.д.) <br>
         - PHP (laravel + неизведанное) <br>
         - знаем также другие языки программирования: C#, Java ... <br>
         <br>
         3) Что дописать тО? <br>
         <br>
        От старта разработки до посещения первого посетителя может пройти всего месяц.
      </q-card-section>

      <q-card-section  v-if="title == 'Ты хочешь качественно протестировать своё WEB-приложение?'">

      </q-card-section>

      <q-btn
          v-if="title != ''"
          icon="send"
          @click="toVK"
          :label="buttonText"
          flat
        >
        </q-btn>

    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import { openURL } from 'quasar'

export default {
  name: 'PageMain',
  data () {
    return {
      title: '',
      subtitle: '',
      text: '',
      buttonText: ''
    }
  },
  methods: {
    softwareDevelopment () {
      this.title = 'Думаешь о собственном сайте / WEB-приложении?'
      this.subtitle = 'Заказывай разработку у нашей команды!'
      this.buttonText = 'Заказать сайт'
      this.text = `
        

      `
    },
    softwareTesting () {
      this.title = 'Ты хочешь качественно протестировать своё WEB-приложение?'
      this.subtitle = 'Будут тест-кейсы, автотесты и многое другое'
      this.buttonText = 'Написать по тестированию WEB-ПО'
      this.text = 'test'
    },
    other () {
      this.title = 'Хочешь помощи в решении IT-задачи?'
      this.subtitle = 'Задачи по программированию, иные проекты. Пиши, реализуем!'
      this.buttonText = 'Написать своё предложение'
      this.text = 'test'
    },
    toVK () {
      openURL('https://vk.com/im?sel=44035224')
    }
  }
}
</script>

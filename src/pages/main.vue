<template>
  <q-page  class="flex justify-center">
    <q-card
       class="q-ma-md"
      style="width: 1100px; background: radial-gradient(circle, #673AB7 0%, #6A1B9A 100%)"
    >
    <q-card-actions class="justify-center">
      </q-card-actions>

      <q-separator dark />

      <q-card-section>
        <div class="text-h5">Добро пожаловать!</div>
        <div class="text-subtitle2"><i>Устраивайся поудобнее и получай наслаждение</i></div>
      </q-card-section>
      <q-separator  />

      <q-card-section >
        Привет! <br>
        <br>
        Рад приветствовать тебя на сайте!)
        <br> <br>
         Проект каждую неделю обновляется, поэтому если есть рекомендации по улучшению, напиши, пожалуйста, в ЛС ВКонтакте.
        <br>
        <i>Следующее обновление будет: 1 Сентября 2019 г.</i>
        <br> <br>
        Что нового появится <br>
        1) Раздел рекомендаций: книги, фильмы, сериалы и так далее <br>
        2) Мини-игра логического характера<br>
        <br>
        Есть другие идеи? Напиши, пожалуйста, в ЛС. Всё будет. :)
      </q-card-section>

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
      title: 'Думаешь о собственном сайте / WEB-приложении?',
      subtitle: 'Заказывай разработку у нашей команды!',
      buttonText: 'Заказать сайт'
    }
  },
  methods: {
    softwareDevelopment () {
      this.title = 'Думаешь о собственном сайте / WEB-приложении?'
      this.subtitle = 'Заказывай разработку у нашей команды!'
      this.buttonText = 'Заказать сайт'
    },
    softwareTesting () {
      this.title = 'Хочешь качественно протестировать своё WEB-приложение?'
      this.subtitle = 'Будут тест-кейсы, автотесты и многое другое'
      this.buttonText = 'Заказать тестирование WEB-ПО'
    },
    other () {
      this.title = 'Хочешь помощи в решении IT-задачи?'
      this.subtitle = 'Задачи по программированию, иные проекты. Пиши, реализуем!'
      this.buttonText = 'Написать'
    },
    toVK () {
      openURL('https://vk.com/im?sel=44035224')
    }
  }
}
</script>

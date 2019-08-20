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
            Заказать сайт / web-приложение
          </q-tooltip>
        </q-btn>
        <q-btn icon="ion-thumbs-up" @click="softwareTesting" flat>
          <q-tooltip
            transition-show="scale"
            transition-hide="scale"
          >
            Заказать тестирование WEB-ПО
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
        1) Работаем по Agile-методологии, что обеспечивает прозрачность в разработке
        продукта и существенно ускорит воплощение идеи в жизнь. <br>
        2) Используем современные инструменты для разработки:
        <br>
         - JavaScript (Vue.js, Angular4, FabricJS, HighchartsJS и т.д.) <br>
         - PHP (laravel) <br>
         - знаем также другие языки программирования... <br>
         3) Знаем неизведанное. Как? Постоянно повышаем свой уровень знаний. <br>
         <br>
        От старта разработки до посещения первого посетителя может пройти всего месяц.
      </q-card-section>

      <q-card-section  v-if="title == 'Хочешь качественно протестировать своё WEB-приложение?'">
        Привет! <br>
        <br>
        У тебя есть сайт / WEB-приложение?
        И ты хочешь, чтобы твой продукт мог называться качественным? <br>
        Пиши нам! Для тебя будут разработаны тест-кейсы, написаны автоматические тесты на Hermione от Yandex, которое заменят ручное тестирование
        на автоматическое: все действия в браузере будет выполнять программа, имитируя пользователей. <br><br>
        <hr>
        <I> Для чего необходимо проводить тестирование WEB-приложений? </I> <br> <br>
        Чтобы выпустить на рынок для продажи какой-либо программный продукт, его нужно протестировать,
        чтобы он соответствовал всем предъявляемым требованиям потребителей. <br> <br>
        Если компания не проведёт тестирование и выпустит нечественный продукт на рынок, то она может понести огромные репутационные
        <i>(мнение потребителей о компании и привлечение будущих клиентов)</i> и финансовые <b>потери</b>
        <i>(ЗП разработчиков, юридические иски). </i> <br>  <br>
        Например, вы бы вряд ли пользовались приложением ВК, если бы там не работала (но была заявлена) функция переписок и
        просмотра ленты записей.
        <hr>
      </q-card-section>

      <q-btn
          v-if="buttonText != ''"
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

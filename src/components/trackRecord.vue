<template>
  <q-page
    padding
    style="max-width: 800px">
    <q-timeline
      responsive
      color="secondary"
      style="padding: 0 24px;">
      <q-timeline-entry heading>Что произошло</q-timeline-entry>

      <q-timeline-entry
        title="Поездка в Москву на Зимнюю школу Президентской академии"
        subtitle="30 Января - 1 Февраля, 2019"
        side="left"
      >
        <div>
          В рамках всероссийской олимпиады "<a
            style="color: white"
            href="https://yandex.ru/profi/">Я профессионал</a>"
            принял участие в Зимней школе Президентской академии, которая проводилась в стенах РАНХиГС в Москве.
        </div>
        <div>
          <i>Подробнее по <a
            style="color: white"
            href="https://vk.com/an.yanusov?w=wall44035224_2030">ссылке</a>.</i>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 21, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
        color="orange"
        icon="done_all"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="right"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
export default {
  name: 'Work',
  data: () => ({
    props: [
      {
        label: 'Карьерный путь',
        icon: 'work',
        header: 'root',
        children: [
          {
            label: 'стажировка: ОАО "ЭлеСи" г.Томск',
            icon: 'room_service',
            children: [
              {
                label: 'год: 2017'
              },
              {
                label: 'срок: 3 месяца'
              },
              {
                label: 'департамент автоматизации нефтегазовой отрасли'
              },
              {
                label: 'был на вакансии "Инженер-разработчик АСУ": разбирался/работал со SCADA WinCC OA (делал свои мини-проекты, чтобы посмотреть как работает данная SCADA-система. Настраивал WEB-сервер SCADA для вывода в сеть).'
              }
            ]
          },
          {
            label: 'производственная практика: ООО "Индас Холдинг" г. Новокузнецк',
            icon: 'photo',
            children: [
              {
                label: 'год: 2016'
              },
              {
                label: 'срок: 1 месяц'
              },
              {
                label: 'отдел проектирования и автоматизации производств'
              },
              {
                label: 'произведено ознакомление с MES-уровнем, ознакомился с проектированием систем отображения информации (СОИ), разработана СОИ для объекта: «Дуговая сталеплавильная печь прямого действия» на языке программирования JavaScript с применением библиотеки FabricJS'
              }
            ]
          },
          {
            label: 'производственная практика: ООО "Шахта Листвяжная" г.Белово',
            icon: 'photo',
            children: [
              {
                label: 'год: 2015'
              },
              {
                label: 'срок: 1 месяц'
              },
              {
                label: 'отдел АСУ ТП'
              },
              {
                label: 'изучена технология автоматизации и общие системы АСУ, применяемые в угольном деле, а также произведено ознакомление и настройка с расключением контроллеров UML-10'
              }
            ]
          }
        ]
      }
    ]
  })
}
</script>

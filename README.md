# Техническое задание на вёрстку

* Название сайта: Нёрдс
* Домен: [Нёрдс](https://github.com/ndgo/nerds)

## Общие технические требования

* Стандарты вёрстки: HTML5, CSS3, прогрессивное улучшение.
* Сетка: определена в макете.
* Адаптивность вёрстки: нет.
* Используемые фреймворки: нет.
* Кроссбраузерность: IE10+, Chrome, Firefox, Opera, Safari.
* Типографика: частично определена в макете (прочее - на усмотрение разработчика).
* Используемые шрифты: Roboto (есть на http://google.com/fonts).

С макетом предоставлен styleguide.psd, содержащий прорисовку состояний элементов интерфейса. При любых расхождениях с макетами он должен иметь наивысший приоритет.

С макетом предоставлен иконочный шрифт, нужно использовать его в вёрстке. Названия слоёв с иконками соответствуют CSS-классам иконок.

### Пояснения для учащихся

* Иконочный шрифт сгенерирован на http://fontello.com - вы можете загрузить конфиг генератора (файл symbols-nerds/config.json) на http://fontello.com и увидеть все классы и символы иконок, а symbols-nerds/demo.html содержит демонстрацию и пример подключения иконок к странице.
* В макетах есть скрытые слои с всплывающими окнами. Такие слои в блоке слоёв фотошопа выделены синим цветом.
* Макеты верстаются постепенно, не нужно сразу выполнять все требования.

### Пожелания к поведению блоков

#### Все макеты:

* Контентная область центрируется и не может быть уже макетной ширины.
* Логотип - это ссылка на главную страницу.
* Блок карты - достаточная реализация - обычное изображение.
* Блок карты - реализация по желанию - интерактивная карта (карты Google или Яндекса), высота карты постоянная, ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета), на карте размещён маркер, центр карты соответствует центру блока в макете.
* Блок карты: по клику на кнопку «напишите нам» возникает модальное окно с формой отправки сообщения (смотрите папку слоёв «write us» в nerds-index.psd)

#### nerds-index.psd:

* Карусель под основной навигацией: смена слайдов мгновенная, без промежуточных переходов.

#### nerds-catalog.psd:

* Блок «Стоимость» - при наведении на любой из маркеров появляется указатель `cursor: pointer`, делать маркеры подвижными не обязательно, цена меняться не должна.
* Фильтр (блоки «Сетка», «Особенности») верстать с помощью формы, кнопка «Показать» отвечает за отправку формы, при выключенном JavaScript должен осуществляться переход на отдельную страницу (отдельную страницу верстать не нужно).
* Карточка товара: название товара является ссылкой, клик по нему открывает модальное окно с демонстрацией товара (макета нет, модальное окно не делать).
* Количество товаров в правом блоке может быть любым, оно не должно ломать страницу.
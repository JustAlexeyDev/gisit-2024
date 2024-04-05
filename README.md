# YakutiaTourMap -  | GISIT 2024

## Состав Команды
|Role           |Name                       |
|---------------|---------------------------|
|Менеджер       |Тихонов Александр-Харысхал|
|Дизайнер       |Саввинова Зоя|
|Разработчик- Программист| Коротких Алексей |
|Гис-Разработчик| Яковлев Аян  |

## Технологии:

### Языки
- JavaScript
- JSX
- HTML
- CSS
- Python 3.10.11
### Фреймворки
- Django
#### Библиотека Frontend
- ReactJS
#### Библиотеки Python
- Rest Framework
- channels
### База данных
- PostgreSQL
### Пакеты Node.js
- react
- react-dom
- react-scripts
- react-router-dom
- lucide-react
## Установка и запуск Frontend части:
1. Скачайте и установите [Nodejs](https://nodejs.org/).
2. Скопируйте репозиторий (Если уже не сделали этого)
```
git clone https://github.com/JustAlexeyDev/gisit-2024.git
```
3. Напишите в терминале:
- `cd Frontend` (Переход в директорию)
- `npm install` или `npm i` (Установка зависимостей)
- `npm start` (Запуск сервера)

  
## Установка и запуск Backend части:
1. Скачайте и установите [python 3.10](https://www.python.org/downloads/release/python-31011/). Во время установки вам будет предложено добавить python в PATH, согласитесь.
2. Скопируйте репозиторий (Если уже не сделали этого)
```
git clone https://github.com/JustAlexeyDev/gisit-2024.git
```
4. Переместитесь в папку *Backend*:
```
cd Backend
```
5. Напишите в терминале:
```
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

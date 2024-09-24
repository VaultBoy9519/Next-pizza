# 🍕 Fast Food Store

**Version**: 1.0.0  
**Technologies**: Next.js, React, Prisma, Tailwind CSS, Zustand

## General Information

Fast Food Store is an online store for ordering fast food products - pizza, sandwiches, nuggets, coffee, cocktails, etc.

## Key Features

- **Authentication and Authorization**: Implemented using NextAuth.js.
- **Dynamic Menu**: Users can view a list of dishes with filtering options and quick navigation.
- **Search**: Fast search for products and components.
- **Cart and Order Management**: Adding products to the cart, managing orders, and tracking their status.
- **Payment**: Test payments integrated through Yookassa service.
- **User Notifications about Orders and Payments via Email**: Information about the order and payment is sent to the client via email (currently, the binding is only to the developer's email).
- **Stories**: Displaying store news on the homepage.

## Technology Stack

- **Frontend**:

  - **React**: State management and UI using hooks.
  - **Next.js**: Server-side rendering and API.
  - **NextAuth.js**: Secure authentication using JWT and session management.
  - **Next.js TopLoader**: Loading component at the top of the page.
  - **Shadcn/UI**: Custom components for checkboxes, dialogs, popovers, and other elements.
  - **React Insta-Stories**: Displaying stories on the application's homepage.
  - **React Hot Toast**: Popup toasts with information for the client.
  - **React Hook Form**: Form management with validation using Zod for efficient input handling.
  - **Tailwind CSS**: Custom styles using a utility-first approach through Tailwind merge.
  - **Lucide Icons**: Beautiful and scalable icons for the entire application.
  - **Zustand**: Managing the global state of the application.
  - **Axios**: Used for API requests and data retrieval.
  - **React Dadata**: Component for address, organization, bank, name, and email suggestions using DaData.ru service.

- **Backend**:

  - **Prisma**: ORM for managing PostgreSQL database, including migrations and data seeding.
  - **Bcrypt**: Encryption of passwords and confidential data.

- **Database**: PostgreSQL using Prisma as ORM.
- **Resend**: Email messaging service.

- **Development Tools**:
  - **ESLint**: To maintain code quality.
  - **TypeScript**: Static typing for JavaScript.

## Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/VaultBoy9519/fast-food-store.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env` file in the root of the project with connection data for the database and other keys.
4. Run Prisma migrations:
   ```bash
   npm run postinstall
   ```
   ```bash
   npm run prisma:push
   ```
5. Use Prisma seed to populate the database with initial data:
   ```bash
   npm run prisma:seed
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```

## Future Improvements

- Admin page for adding new products.
- Addition of more filters.
- Reviews and ratings from users.
- Sorting products by price and popularity.

---

**Версия**: 1.0.0  
**Технологии**: Next.js, React, Prisma, Tailwind CSS, Zustand

## Общие сведения

Fast Food Store — интернет-магазин для заказа продуктов быстрого питания - пиццы, сэндвичи, наггетсы, кофе, коктейли и т.п.

## Основные функции

- **Аутентификация и авторизация**: Реализовано с помощью NextAuth.js.
- **Динамическое меню**: Пользователи могут просматривать список блюд с возможностью фильтрации и быстрым перемещением по нему.
- **Поиск**: Быстрый поиск по продуктам и компонентам.
- **Управление корзиной и заказами**: Добавление товаров в корзину, управление заказами и отслеживание их статуса.
- **Оплата товара**: Тестовые оплаты подключены через сервис Yookassa.
- **Оповещение пользователей о заказах и оплатах на электронную почту**: Информация о заказе и оплате отправляется клиенту на почту (в текущей реализации привязка идет только к почте разработчика).
- **Сторис**: Отображение новостей магазина на главной странице.

## Стек технологий

- **Фронтенд**:

  - **React**: Управление состоянием и UI с использованием хуков.
  - **Next.js**: Серверный рендеринг и API.
  - **NextAuth.js**: Безопасная аутентификация с использованием JWT и управление сессиями.
  - **Next.js TopLoader**: Компонент загрузки в верхней части страницы.
  - **Shadcn/UI**: Кастомные компоненты для чекбоксов, диалогов, поповеров и других элементов.
  - **React Insta-Stories**: Отображение сторис на главной странице приложения.
  - **React Hot Toast**: Всплывающие тосты с информацией для клиента.
  - **React Hook Form**: Управление формами с валидацией с помощью Zod для эффективной обработки ввода.
  - **Tailwind CSS**: Кастомные стили с использованием utility-first подхода через Tailwind merge.
  - **Lucide Icons**: Красивые и масштабируемые иконки для всего приложения.
  - **Zustand**: Управление глобальным состоянием приложения.
  - **Axios**: Используется для запросов к API и получения данных.
  - **React Dadata**: Компонент для подсказок адресов, организаций, банков, ФИО и email с помощью сервиса DaData.ru.

- **Бэкенд**:

  - **Prisma**: ORM для управления базой данных PostgreSQL, включая миграции и заполнение данных.
  - **Bcrypt**: Шифрование паролей и конфиденциальных данных.

- **База данных**: PostgreSQL с использованием Prisma как ORM.
- **Resend**: Сервис отправки сообщений на электронную почту.

- **Инструменты для разработки**:
  - **ESLint**: Для поддержания качества кода.
  - **TypeScript**: Статическая типизация JS.

## Запуск локально

1. Клонировать репозиторий:
   ```bash
   git clone https://github.com/VaultBoy9519/fast-food-store.git
   ```
2. Установить зависимости:
   ```bash
   npm install
   ```
3. Настроить переменные окружения:
   Создайте файл `.env` в корне проекта с данными для подключения к базе данных и другими ключами.
4. Запустить миграции Prisma:
   ```bash
   npm run postinstall
   ```
   ```bash
   npm run prisma:push
   ```
5. Используя prisma seed, заполнить базу первичными данными:
   ```bash
   npm run prisma:seed
   ```
6. Запустить сервер разработки:
   ```bash
   npm run dev
   ```

## Будущие улучшения

- Страница администратора для добавления новых продуктов.
- Добавление дополнительных фильтров.
- Отзывы и оценки от пользователей.
- Сортировка товаров по цене и популярности.

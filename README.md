# 🚀 User Management System

Aplicação fullstack para gerenciamento de usuários, permitindo **criar, visualizar, editar e deletar usuários (CRUD)**.

O projeto foi desenvolvido com foco em prática de integração entre front-end e back-end, utilizando uma API REST.

---

## 📸 Funcionalidades

* ✅ Cadastro de usuário
* ✅ Listagem de usuários
* ✅ Edição de usuário
* ✅ Exclusão de usuário
* ✅ Interface responsiva (mobile-first)

---

## 🛠️ Tecnologias Utilizadas

### 🔹 Front-end

* React
* TypeScript
* Vite
* CSS Modules

### 🔹 Back-end

* PHP
* Laravel (API REST)

---

## 📂 Estrutura do Projeto

```
📦 project
 ┣ 📂 front-end
 ┃ ┣ 📂 src
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 routes
 ┃ ┃ ┗ 📂 styles
 ┃
 ┣ 📂 back-end
 ┃ ┣ 📂 app
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 database
 ┃ ┗ 📂 config
```

---

## ⚙️ Como rodar o projeto

### 🔹 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

---

### 🔹 2. Rodar o Back-end (Laravel)

```bash
cd back-end
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Servidor rodando em:

```
http://localhost:8000
```

---

### 🔹 3. Rodar o Front-end (React)

```bash
cd front-end
npm install
npm run dev
```

Aplicação disponível em:

```
http://localhost:5173
```

---

## 🔗 Integração

O front-end consome a API REST do Laravel através de requisições HTTP:

* `GET /api/users`
* `POST /api/users`
* `PUT /api/users/{id}`
* `DELETE /api/users/{id}`

---

## ⚠️ Observações

* Certifique-se de que o back-end esteja rodando antes do front-end
* Verifique se as portas `8000` (API) e `5173` (Vite) estão livres
* Caso haja erro de CORS, revise as configurações no Laravel

---

## 📌 Melhorias futuras

* 🔄 Implementar autenticação
* 🎨 Melhorar UI/UX
* 🔔 Feedback visual (toasts)
* 🧪 Testes automatizados

---

## 👨‍💻 Autor

Desenvolvido por **Juan Pablo**

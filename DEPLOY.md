# 🚀 Guia de Deploy - Sistema de Protocolos SMS Araguari

## 📋 Visão Geral

O sistema possui duas partes:
1. **Frontend** (HTML/CSS/JS) - Hospedado no Netlify
2. **Backend API** (Node.js) - Precisa ser hospedado separadamente

## 🌐 Deploy do Backend (API)

### Opção 1: Railway (Recomendado - Gratuito)

1. Acesse [railway.app](https://railway.app)
2. Faça login com GitHub
3. Clique em "New Project"
4. Selecione "Deploy from GitHub repo"
5. Escolha o repositório `regulacao` ou `regulacaoimac`
6. Configure:
   - **Root Directory**: `/api`
   - **Start Command**: `npm start`
7. Após o deploy, copie a URL gerada (ex: `https://seu-projeto.railway.app`)

### Opção 2: Render (Gratuito)

1. Acesse [render.com](https://render.com)
2. Faça login com GitHub
3. Clique em "New +" → "Web Service"
4. Conecte o repositório
5. Configure:
   - **Name**: `regulacao-api`
   - **Root Directory**: `api`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Clique em "Create Web Service"
7. Copie a URL gerada

### Opção 3: Heroku

```bash
cd api
heroku create regulacao-api
git subtree push --prefix api heroku main
```

## ⚙️ Configurar Frontend para usar a API

1. Abra o arquivo `sistema/config.js`
2. Altere a URL da API de produção:

```javascript
const CONFIG = {
    API_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/api'
        : 'https://SEU-PROJETO.railway.app/api', // ← ALTERAR AQUI
    // ...
};
```

3. Faça commit e push:

```bash
git add sistema/config.js
git commit -m "Update: Configurar URL da API de produção"
git push origin main
```

## 🧪 Testar Localmente

### 1. Iniciar o Backend

```bash
cd api
npm install
npm start
```

A API estará rodando em `http://localhost:3000`

### 2. Iniciar o Frontend

Abra outro terminal:

```bash
# Instalar servidor HTTP simples
npm install -g http-server

# Iniciar servidor na raiz do projeto
http-server -p 8080
```

Acesse: `http://localhost:8080`

## 📊 Verificar se está Funcionando

1. Abra o site
2. Clique em "Visualizar" ou "Baixar" em qualquer protocolo
3. Os contadores devem incrementar
4. Recarregue a página - os números devem persistir

## 🔒 Segurança (Produção)

Adicione ao `api/server.js`:

```javascript
// Rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // limite de 100 requisições
});

app.use('/api/', limiter);
```

## 🐛 Troubleshooting

### Erro de CORS

Se aparecer erro de CORS, verifique se o backend tem:

```javascript
app.use(cors());
```

### Contadores não atualizam

1. Verifique se a API está rodando
2. Abra o Console do navegador (F12)
3. Veja se há erros de rede
4. Confirme se a URL da API está correta em `config.js`

### API não inicia

```bash
cd api
rm -rf node_modules
npm install
npm start
```

## 📝 Variáveis de Ambiente (Produção)

No serviço de hospedagem, configure:

- `PORT`: Porta do servidor (geralmente automático)
- `NODE_ENV`: `production`

## 🔄 Atualizar Deploy

Sempre que fizer alterações:

```bash
git add .
git commit -m "Descrição das alterações"
git push origin main
```

O Netlify (frontend) e Railway/Render (backend) farão deploy automático!

## 📞 Suporte

Em caso de dúvidas:
- Email: aps@araguari.mg.gov.br
- Telefone: (34) 3690-3158

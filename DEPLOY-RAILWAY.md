# 🚀 Deploy do Backend no Railway - Passo a Passo

## 📋 Pré-requisitos
- Conta no GitHub (já tem ✅)
- Repositório no GitHub (já tem ✅)

## 🌐 Passo 1: Criar Conta no Railway

1. Acesse: https://railway.app
2. Clique em **"Login"**
3. Escolha **"Login with GitHub"**
4. Autorize o Railway a acessar seus repositórios

## 🚂 Passo 2: Criar Novo Projeto

1. No dashboard do Railway, clique em **"New Project"**
2. Selecione **"Deploy from GitHub repo"**
3. Escolha o repositório: **`apsaraguari/regulacao`** ou **`apsaraguari/regulacaoimac`**
4. Clique em **"Deploy Now"**

## ⚙️ Passo 3: Configurar o Projeto

1. Após o deploy inicial, clique no projeto
2. Clique em **"Settings"** (ícone de engrenagem)
3. Em **"Root Directory"**, digite: `api`
4. Em **"Start Command"**, digite: `npm start`
5. Clique em **"Save"**

## 🌍 Passo 4: Obter URL da API

1. No dashboard do projeto, clique em **"Settings"**
2. Role até **"Domains"**
3. Clique em **"Generate Domain"**
4. Copie a URL gerada (ex: `https://seu-projeto.up.railway.app`)

## 🔧 Passo 5: Configurar Frontend

1. Abra o arquivo: `sistema/config.js`
2. Altere a linha:

```javascript
API_URL: window.location.hostname === 'localhost' 
    ? 'http://localhost:3000/api'
    : 'https://SEU-PROJETO.up.railway.app/api', // ← COLE SUA URL AQUI
```

3. Salve o arquivo

## 📤 Passo 6: Fazer Push das Alterações

```bash
git add sistema/config.js
git commit -m "Update: Configurar URL da API de produção"
git push origin main
```

## ✅ Passo 7: Testar

1. Aguarde o Netlify fazer redeploy (2-3 minutos)
2. Acesse: https://protocolo.webaraguari.com.br
3. Clique em "Visualizar" ou "Baixar"
4. Os contadores devem incrementar!
5. Recarregue a página - números devem persistir

## 🔍 Verificar Logs

No Railway:
1. Clique no projeto
2. Clique em **"Deployments"**
3. Clique no deployment ativo
4. Veja os logs em tempo real

Você deve ver:
```
🚀 Servidor rodando na porta 3000
📊 Arquivo Excel: /app/Controle de protocolos validados.xlsx
📁 Aba: Estatísticas
✅ Aba "Estatísticas" criada no Excel
```

## 📥 Download do Excel

Após alguns cliques, baixe o Excel:
```
https://SEU-PROJETO.up.railway.app/api/download/excel
```

## 🐛 Troubleshooting

### Erro: "Application failed to respond"
- Verifique se o Start Command está correto: `npm start`
- Verifique se o Root Directory está: `api`

### Erro: "Module not found"
```bash
# No Railway, vá em Settings → Build Command
cd api && npm install
```

### Contadores não atualizam
1. Abra o Console do navegador (F12)
2. Veja se há erros de CORS
3. Verifique se a URL da API está correta em `config.js`

## 💰 Custo

Railway oferece:
- ✅ **$5 de crédito grátis por mês**
- ✅ Suficiente para este projeto
- ✅ Sem necessidade de cartão de crédito inicialmente

## 🔄 Atualizações Automáticas

Sempre que você fizer push para o GitHub:
1. Railway detecta automaticamente
2. Faz rebuild e redeploy
3. API atualizada em ~2 minutos

## 📞 Suporte

Dúvidas? Entre em contato:
- Email: aps@araguari.mg.gov.br
- Telefone: (34) 3690-3158

# 🚀 Deploy Completo - Netlify + Netlify Functions

## 📋 Visão Geral

Vamos usar **Netlify** para tudo:
- ✅ Frontend (HTML/CSS/JS) - Já está no Netlify
- ✅ Backend (API) - Netlify Functions (Serverless)

## 🔧 Passo 1: Criar Netlify Functions

As Netlify Functions são funções serverless que funcionam como backend.

### Estrutura:
```
netlify/
  functions/
    stats.js          # API de estatísticas
```

## 📝 Passo 2: Configurar netlify.toml

Já existe um arquivo `netlify.toml` na raiz. Vamos atualizá-lo.

## 🌐 Passo 3: Usar Netlify Blobs para Armazenamento

Como o Netlify Functions não tem sistema de arquivos persistente, vamos usar **Netlify Blobs** (armazenamento key-value gratuito).

## ⚡ Alternativa Simples: Usar Serviço Externo

### Opção A: Railway (Recomendado)
- ✅ Gratuito ($5/mês de crédito)
- ✅ Fácil deploy
- ✅ Arquivo Excel funciona
- 👉 Siga o guia: `DEPLOY-RAILWAY.md`

### Opção B: Render
- ✅ Gratuito
- ✅ Deploy automático do GitHub
- ⚠️ Dorme após 15 min de inatividade

### Opção C: Heroku
- ⚠️ Não é mais gratuito
- 💰 $5/mês mínimo

## 🎯 Recomendação Final

**Para seu caso (Excel + Estatísticas):**

### ✅ Melhor Solução: Railway
1. Frontend no Netlify (já está ✅)
2. Backend no Railway (gratuito)
3. Excel salvo no Railway
4. Tudo funcionando perfeitamente

### 📋 Passos Rápidos:

1. **Railway (Backend):**
   - Acesse: https://railway.app
   - Login com GitHub
   - Deploy from GitHub repo
   - Configure Root Directory: `api`
   - Copie a URL gerada

2. **Netlify (Frontend):**
   - Já está configurado ✅
   - Apenas atualizar `sistema/config.js` com URL do Railway
   - Push para GitHub
   - Netlify faz redeploy automático

## 🔗 URLs Finais:

- **Frontend**: https://protocolo.webaraguari.com.br (Netlify)
- **Backend**: https://seu-projeto.up.railway.app (Railway)
- **Excel**: Salvo no Railway, download via API

## 💡 Por que Railway para Backend?

1. ✅ **Arquivo Excel funciona** (sistema de arquivos persistente)
2. ✅ **Gratuito** ($5 crédito/mês é suficiente)
3. ✅ **Deploy automático** do GitHub
4. ✅ **Logs em tempo real**
5. ✅ **SSL automático**
6. ✅ **Sem dormir** (sempre ativo)

## 📞 Precisa de Ajuda?

Siga o guia detalhado: **`DEPLOY-RAILWAY.md`**

Ou entre em contato:
- Email: aps@araguari.mg.gov.br
- Telefone: (34) 3690-3158

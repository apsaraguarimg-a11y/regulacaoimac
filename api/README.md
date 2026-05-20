# API de Estatísticas - Protocolos SMS Araguari

API REST para gerenciar estatísticas de visualizações e downloads dos protocolos.

## 🚀 Instalação

```bash
cd api
npm install
```

## 📦 Executar

### Desenvolvimento
```bash
npm run dev
```

### Produção
```bash
npm start
```

## 📡 Endpoints

### Obter todas as estatísticas
```
GET /api/stats
```

### Obter estatísticas de um protocolo
```
GET /api/stats/:id
```

### Incrementar visualização
```
POST /api/stats/:id/view
```

### Incrementar download
```
POST /api/stats/:id/download
```

### Obter totais globais
```
GET /api/stats/global/totals
```

## 🔧 Configuração

A API usa a porta 3000 por padrão. Para alterar, defina a variável de ambiente `PORT`:

```bash
PORT=8080 npm start
```

## 📊 Armazenamento

Os dados são salvos em `stats.json` no formato:

```json
{
  "1": {
    "views": 150,
    "downloads": 45
  },
  "2": {
    "views": 89,
    "downloads": 23
  }
}
```

## 🌐 Deploy

Para deploy em produção, recomenda-se usar:
- **Heroku**
- **Railway**
- **Render**
- **DigitalOcean App Platform**
- **AWS EC2**

## 🔒 Segurança

Para produção, considere adicionar:
- Rate limiting
- Autenticação
- HTTPS
- Validação de dados

# API de Estatísticas - Protocolos SMS Araguari

API REST para gerenciar estatísticas de visualizações e downloads dos protocolos.
**Os dados são salvos em arquivo Excel (.xlsx)**

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
Body: { "nome": "Nome do Protocolo", "categoria": "Categoria" }
```

### Incrementar download
```
POST /api/stats/:id/download
Body: { "nome": "Nome do Protocolo", "categoria": "Categoria" }
```

### Obter totais globais
```
GET /api/stats/global/totals
```

### Download do arquivo Excel
```
GET /api/download/excel
```
Faz download do arquivo `estatisticas-protocolos.xlsx`

## 🔧 Configuração

A API usa a porta 3000 por padrão. Para alterar, defina a variável de ambiente `PORT`:

```bash
PORT=8080 npm start
```

## 📊 Armazenamento

Os dados são salvos em **estatisticas.xlsx** com as seguintes colunas:

| ID Protocolo | Nome do Protocolo | Categoria | Visualizações | Downloads | Última Atualização |
|--------------|-------------------|-----------|---------------|-----------|-------------------|
| 1 | Audiometria... | Regulação Eletiva | 150 | 45 | 20/05/2026 10:30 |
| 2 | Biópsia... | Regulação Eletiva | 89 | 23 | 20/05/2026 11:15 |

### Recursos do Excel:
- ✅ Cabeçalho estilizado (azul com texto branco)
- ✅ Linhas alternadas (cinza claro)
- ✅ Colunas com largura otimizada
- ✅ Data/hora de última atualização
- ✅ Formatação profissional

## 📥 Download do Excel

Para baixar o arquivo Excel com todas as estatísticas:

```bash
curl http://localhost:3000/api/download/excel -o estatisticas.xlsx
```

Ou acesse diretamente no navegador:
```
http://localhost:3000/api/download/excel
```

## 🌐 Deploy

Para deploy em produção, recomenda-se usar:
- **Railway** (recomendado)
- **Render**
- **Heroku**
- **DigitalOcean App Platform**
- **AWS EC2**

## 🔒 Segurança

Para produção, considere adicionar:
- Rate limiting
- Autenticação
- HTTPS
- Validação de dados
- Backup automático do Excel

## 📦 Dependências

- **express**: Framework web
- **cors**: Habilitar CORS
- **exceljs**: Manipulação de arquivos Excel

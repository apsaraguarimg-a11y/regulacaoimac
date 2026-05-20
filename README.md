# 🏥 Sistema de Protocolos e Fluxos - SMS Araguari

Sistema web para consulta e download de protocolos clínicos, fluxos assistenciais e manuais de procedimentos da Secretaria Municipal de Saúde de Araguari/MG.

## 🌐 Site em Produção

**URL:** https://protocolo.webaraguari.com.br

## ✨ Funcionalidades

- 📋 **38 Protocolos** organizados por categoria
- 🔍 **Busca inteligente** por nome, categoria ou palavra-chave
- 🏷️ **5 Categorias**: Regulação Eletiva, Urgência, Fluxos Assistenciais, Manuais, Especializados
- 👁️ **Visualização online** de PDFs
- ⬇️ **Download direto** dos documentos
- 📊 **Contadores** de visualizações e downloads
- 📱 **Responsivo** - funciona em qualquer dispositivo
- 🎨 **Interface moderna** e intuitiva

## 🛠️ Tecnologias

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Font Awesome 6.5.1
- Google Fonts (Inter)
- Hospedado no **Netlify**

### Backend (API)
- Node.js + Express
- ExcelJS (manipulação de Excel)
- CORS habilitado
- Salva dados em arquivo Excel

## 📊 Estatísticas

Os dados de visualizações e downloads são salvos em:
- **Arquivo:** `Controle de protocolos validados.xlsx`
- **Aba:** Estatísticas
- **Colunas:** ID, Nome, Categoria, Visualizações, Downloads, Última Atualização

## 🚀 Deploy

### Frontend (Netlify) ✅
Já está em produção: https://protocolo.webaraguari.com.br

### Backend (Railway)
Siga o guia: **[DEPLOY-RAILWAY.md](DEPLOY-RAILWAY.md)**

Ou veja: **[DEPLOY-NETLIFY.md](DEPLOY-NETLIFY.md)** para outras opções

## 💻 Desenvolvimento Local

### 1. Clonar Repositório
```bash
git clone https://github.com/apsaraguari/regulacao.git
cd regulacao
```

### 2. Iniciar Backend
```bash
cd api
npm install
npm start
```
Backend rodando em: http://localhost:3000

### 3. Iniciar Frontend
```bash
# Em outro terminal, na raiz do projeto
npx http-server -p 8080
```
Frontend rodando em: http://localhost:8080

### 4. Testar
- Acesse http://localhost:8080
- Clique em "Visualizar" ou "Baixar"
- Veja os contadores incrementarem
- Abra `Controle de protocolos validados.xlsx` → Aba "Estatísticas"

## 📁 Estrutura do Projeto

```
regulacao-main/
├── index.html                          # Página principal
├── og-image.jpg                        # Imagem para compartilhamento
├── *.pdf                               # 39 arquivos PDF dos protocolos
├── Controle de protocolos validados.xlsx  # Excel com estatísticas
├── sistema/
│   ├── app.js                          # Lógica principal
│   ├── styles.css                      # Estilos
│   ├── protocolos-data.js              # Dados dos protocolos
│   └── config.js                       # Configuração da API
├── api/
│   ├── server.js                       # Servidor Express
│   ├── package.json                    # Dependências
│   └── README.md                       # Documentação da API
├── netlify.toml                        # Configuração Netlify
├── railway.toml                        # Configuração Railway
├── DEPLOY-RAILWAY.md                   # Guia de deploy Railway
├── DEPLOY-NETLIFY.md                   # Guia de deploy Netlify
└── README.md                           # Este arquivo
```

## 📡 API Endpoints

```
GET    /api/stats                    # Todas as estatísticas
GET    /api/stats/:id                # Estatísticas de um protocolo
POST   /api/stats/:id/view           # Incrementar visualização
POST   /api/stats/:id/download       # Incrementar download
GET    /api/stats/global/totals      # Totais globais
GET    /api/download/excel           # Download do Excel completo
```

## 🎨 Categorias

1. **Regulação Eletiva** (20 protocolos)
2. **Urgência** (5 protocolos)
3. **Fluxos Assistenciais** (9 protocolos)
4. **Manuais** (2 protocolos)
5. **Especializados** (2 protocolos)

## 📞 Contato

**Secretaria de Saúde / Atenção Primária / Central de Regulação Eletiva**

📍 Rua Dr. Afrânio, 161, Centro — CEP 38440-072 — Araguari/MG

📞 **Telefone CRE:** (34) 3020-0308 / 3020-0309  
📞 **Telefone APS:** (34) 3690-3158

📧 **E-mail Regulação Eletiva:** tfd@araguari.mg.gov.br  
📧 **E-mail Atenção Primária:** aps@araguari.mg.gov.br

## 👨‍💻 Desenvolvimento

Desenvolvido por @Alexandre para a Prefeitura Municipal de Araguari

**Última atualização:** Maio/2026

## 📄 Licença

© 2026 Prefeitura Municipal de Araguari - Todos os direitos reservados

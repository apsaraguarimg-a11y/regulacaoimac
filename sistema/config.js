// Configuração da API
const CONFIG = {
    // Alterar para URL de produção quando fazer deploy
    API_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/api'
        : 'https://sua-api-producao.com/api', // Alterar para URL real da API em produção
    
    // Timeout para requisições (ms)
    REQUEST_TIMEOUT: 5000,
    
    // Retry automático em caso de falha
    AUTO_RETRY: true,
    MAX_RETRIES: 3
};

// Exportar configuração
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

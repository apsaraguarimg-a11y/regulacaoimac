const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'stats.json');

// Middleware
app.use(cors());
app.use(express.json());

// Inicializar arquivo de dados se não existir
async function initDataFile() {
    try {
        await fs.access(DATA_FILE);
    } catch {
        await fs.writeFile(DATA_FILE, JSON.stringify({}));
    }
}

// Ler estatísticas
async function readStats() {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Erro ao ler stats:', error);
        return {};
    }
}

// Salvar estatísticas
async function saveStats(stats) {
    try {
        await fs.writeFile(DATA_FILE, JSON.stringify(stats, null, 2));
    } catch (error) {
        console.error('Erro ao salvar stats:', error);
    }
}

// GET - Obter todas as estatísticas
app.get('/api/stats', async (req, res) => {
    try {
        const stats = await readStats();
        res.json(stats);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter estatísticas' });
    }
});

// GET - Obter estatísticas de um protocolo específico
app.get('/api/stats/:id', async (req, res) => {
    try {
        const stats = await readStats();
        const protocolId = req.params.id;
        const protocolStats = stats[protocolId] || { views: 0, downloads: 0 };
        res.json(protocolStats);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter estatísticas' });
    }
});

// POST - Incrementar visualização
app.post('/api/stats/:id/view', async (req, res) => {
    try {
        const stats = await readStats();
        const protocolId = req.params.id;
        
        if (!stats[protocolId]) {
            stats[protocolId] = { views: 0, downloads: 0 };
        }
        
        stats[protocolId].views++;
        await saveStats(stats);
        
        res.json(stats[protocolId]);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao incrementar visualização' });
    }
});

// POST - Incrementar download
app.post('/api/stats/:id/download', async (req, res) => {
    try {
        const stats = await readStats();
        const protocolId = req.params.id;
        
        if (!stats[protocolId]) {
            stats[protocolId] = { views: 0, downloads: 0 };
        }
        
        stats[protocolId].downloads++;
        await saveStats(stats);
        
        res.json(stats[protocolId]);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao incrementar download' });
    }
});

// GET - Obter estatísticas globais
app.get('/api/stats/global/totals', async (req, res) => {
    try {
        const stats = await readStats();
        let totalViews = 0;
        let totalDownloads = 0;
        
        Object.values(stats).forEach(stat => {
            totalViews += stat.views || 0;
            totalDownloads += stat.downloads || 0;
        });
        
        res.json({
            totalViews,
            totalDownloads,
            totalProtocols: Object.keys(stats).length
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter totais' });
    }
});

// Inicializar servidor
initDataFile().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
        console.log(`📊 Arquivo de dados: ${DATA_FILE}`);
    });
});

const express = require('express');
const cors = require('cors');
const ExcelJS = require('exceljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const EXCEL_FILE = path.join(__dirname, '..', 'Controle de protocolos validados.xlsx');

// Middleware
app.use(cors());
app.use(express.json());

// Inicializar planilha de estatísticas no arquivo Excel
async function initExcelFile() {
    const workbook = new ExcelJS.Workbook();
    
    try {
        await workbook.xlsx.readFile(EXCEL_FILE);
        
        // Verificar se a aba "Estatísticas" existe
        let worksheet = workbook.getWorksheet('Estatísticas');
        
        if (!worksheet) {
            // Criar nova aba se não existir
            worksheet = workbook.addWorksheet('Estatísticas');
            
            // Definir cabeçalhos
            worksheet.columns = [
                { header: 'ID', key: 'id', width: 10 },
                { header: 'Nome do Protocolo', key: 'nome', width: 50 },
                { header: 'Categoria', key: 'categoria', width: 25 },
                { header: 'Visualizações', key: 'views', width: 15 },
                { header: 'Downloads', key: 'downloads', width: 15 },
                { header: 'Última Atualização', key: 'updated', width: 25 }
            ];
            
            // Estilizar cabeçalho
            worksheet.getRow(1).font = { bold: true, size: 12, color: { argb: 'FFFFFFFF' } };
            worksheet.getRow(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FF4472C4' }
            };
            worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
            
            await workbook.xlsx.writeFile(EXCEL_FILE);
            console.log('✅ Aba "Estatísticas" criada no Excel');
        }
    } catch (error) {
        console.error('❌ Erro ao inicializar Excel:', error);
    }
}

// Ler estatísticas do Excel
async function readStats() {
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(EXCEL_FILE);
        const worksheet = workbook.getWorksheet('Estatísticas');
        
        if (!worksheet) {
            return {};
        }
        
        const stats = {};
        
        worksheet.eachRow((row, rowNumber) => {
            if (rowNumber > 1) { // Pular cabeçalho
                const id = row.getCell(1).value;
                if (id) {
                    stats[id] = {
                        nome: row.getCell(2).value || '',
                        categoria: row.getCell(3).value || '',
                        views: parseInt(row.getCell(4).value) || 0,
                        downloads: parseInt(row.getCell(5).value) || 0,
                        updated: row.getCell(6).value || new Date().toISOString()
                    };
                }
            }
        });
        
        return stats;
    } catch (error) {
        console.error('❌ Erro ao ler Excel:', error);
        return {};
    }
}

// Salvar estatísticas no Excel
async function saveStats(stats) {
    try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(EXCEL_FILE);
        let worksheet = workbook.getWorksheet('Estatísticas');
        
        if (!worksheet) {
            console.error('❌ Aba "Estatísticas" não encontrada');
            return;
        }
        
        // Limpar dados antigos (manter cabeçalho)
        const rowCount = worksheet.rowCount;
        for (let i = rowCount; i > 1; i--) {
            worksheet.spliceRows(i, 1);
        }
        
        // Adicionar dados atualizados
        Object.entries(stats).forEach(([id, data]) => {
            const row = worksheet.addRow({
                id: parseInt(id),
                nome: data.nome || '',
                categoria: data.categoria || '',
                views: data.views || 0,
                downloads: data.downloads || 0,
                updated: new Date().toLocaleString('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })
            });
            
            // Aplicar formatação
            row.alignment = { vertical: 'middle', horizontal: 'left' };
            
            // Alternar cores das linhas
            if (worksheet.rowCount % 2 === 0) {
                row.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFF2F2F2' }
                };
            }
            
            // Centralizar números
            row.getCell(4).alignment = { horizontal: 'center' };
            row.getCell(5).alignment = { horizontal: 'center' };
        });
        
        await workbook.xlsx.writeFile(EXCEL_FILE);
        console.log('✅ Estatísticas salvas no Excel');
    } catch (error) {
        console.error('❌ Erro ao salvar Excel:', error);
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
        const { nome, categoria } = req.body;
        
        if (!stats[protocolId]) {
            stats[protocolId] = { 
                nome: nome || '',
                categoria: categoria || '',
                views: 0, 
                downloads: 0 
            };
        }
        
        stats[protocolId].views++;
        stats[protocolId].updated = new Date().toISOString();
        
        // Atualizar nome e categoria se fornecidos
        if (nome) stats[protocolId].nome = nome;
        if (categoria) stats[protocolId].categoria = categoria;
        
        await saveStats(stats);
        
        res.json({
            views: stats[protocolId].views,
            downloads: stats[protocolId].downloads
        });
    } catch (error) {
        console.error('Erro ao incrementar visualização:', error);
        res.status(500).json({ error: 'Erro ao incrementar visualização' });
    }
});

// POST - Incrementar download
app.post('/api/stats/:id/download', async (req, res) => {
    try {
        const stats = await readStats();
        const protocolId = req.params.id;
        const { nome, categoria } = req.body;
        
        if (!stats[protocolId]) {
            stats[protocolId] = { 
                nome: nome || '',
                categoria: categoria || '',
                views: 0, 
                downloads: 0 
            };
        }
        
        stats[protocolId].downloads++;
        stats[protocolId].updated = new Date().toISOString();
        
        // Atualizar nome e categoria se fornecidos
        if (nome) stats[protocolId].nome = nome;
        if (categoria) stats[protocolId].categoria = categoria;
        
        await saveStats(stats);
        
        res.json({
            views: stats[protocolId].views,
            downloads: stats[protocolId].downloads
        });
    } catch (error) {
        console.error('Erro ao incrementar download:', error);
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

// GET - Download do arquivo Excel
app.get('/api/download/excel', async (req, res) => {
    try {
        res.download(EXCEL_FILE, 'Controle-de-protocolos-validados.xlsx');
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer download do Excel' });
    }
});

// Inicializar servidor
initExcelFile().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor rodando na porta ${PORT}`);
        console.log(`📊 Arquivo Excel: ${EXCEL_FILE}`);
        console.log(`📁 Aba: Estatísticas`);
    });
});

// ===== Configuration =====
const API_URL = CONFIG.API_URL;

// ===== Utility: get download path for PDF =====
function getDownloadPath(filename) {
    // Encode the filename properly
    const encodedFilename = encodeURIComponent(filename);
    // PDFs are in root, so just use the filename
    return encodedFilename;
}

// ===== Statistics Management (Server-based with localStorage fallback) =====
async function fetchStats() {
    try {
        const response = await fetch(`${API_URL}/stats`, { 
            signal: AbortSignal.timeout(3000) 
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.warn('API não disponível, usando localStorage:', error.message);
    }
    // Fallback para localStorage
    return getLocalStats();
}

async function incrementView(protocolId, protocolName, protocolCategory) {
    try {
        const response = await fetch(`${API_URL}/stats/${protocolId}/view`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nome: protocolName,
                categoria: protocolCategory
            }),
            signal: AbortSignal.timeout(3000)
        });
        
        if (response.ok) {
            const stats = await response.json();
            updateStatsDisplay(protocolId, stats);
            updateGlobalStats();
            return;
        }
    } catch (error) {
        console.warn('API não disponível, usando localStorage:', error.message);
    }
    
    // Fallback para localStorage
    incrementViewLocal(protocolId);
}

async function incrementDownload(protocolId, protocolName, protocolCategory) {
    try {
        const response = await fetch(`${API_URL}/stats/${protocolId}/download`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                nome: protocolName,
                categoria: protocolCategory
            }),
            signal: AbortSignal.timeout(3000)
        });
        
        if (response.ok) {
            const stats = await response.json();
            updateStatsDisplay(protocolId, stats);
            updateGlobalStats();
            return;
        }
    } catch (error) {
        console.warn('API não disponível, usando localStorage:', error.message);
    }
    
    // Fallback para localStorage
    incrementDownloadLocal(protocolId);
}

async function getProtocolStats(protocolId) {
    try {
        const response = await fetch(`${API_URL}/stats/${protocolId}`, {
            signal: AbortSignal.timeout(3000)
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.warn('API não disponível, usando localStorage');
    }
    // Fallback para localStorage
    const stats = getLocalStats();
    return stats[protocolId] || { views: 0, downloads: 0 };
}

// ===== LocalStorage Fallback Functions =====
function getLocalStats() {
    const stats = localStorage.getItem('protocolStats');
    return stats ? JSON.parse(stats) : {};
}

function saveLocalStats(stats) {
    localStorage.setItem('protocolStats', JSON.stringify(stats));
}

function incrementViewLocal(protocolId) {
    const stats = getLocalStats();
    if (!stats[protocolId]) {
        stats[protocolId] = { views: 0, downloads: 0 };
    }
    stats[protocolId].views++;
    saveLocalStats(stats);
    
    const localStats = stats[protocolId];
    updateStatsDisplay(protocolId, localStats);
    updateGlobalStats();
}

function incrementDownloadLocal(protocolId) {
    const stats = getLocalStats();
    if (!stats[protocolId]) {
        stats[protocolId] = { views: 0, downloads: 0 };
    }
    stats[protocolId].downloads++;
    saveLocalStats(stats);
    
    const localStats = stats[protocolId];
    updateStatsDisplay(protocolId, localStats);
    updateGlobalStats();
}

function updateStatsDisplay(protocolId, stats) {
    const viewElement = document.querySelector(`[data-protocol-id="${protocolId}"] .view-count`);
    const downloadElement = document.querySelector(`[data-protocol-id="${protocolId}"] .download-count`);
    
    if (viewElement) viewElement.textContent = formatNumber(stats.views);
    if (downloadElement) downloadElement.textContent = formatNumber(stats.downloads);
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num;
}

// ===== DOM Elements =====
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const protocolsGrid = document.getElementById('protocolsGrid');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const filterBtns = document.querySelectorAll('.filter-btn');

let activeFilter = 'todos';

// ===== Render Cards =====
async function renderCards(data) {
    if (data.length === 0) {
        protocolsGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = 'Nenhum protocolo encontrado';
        return;
    }

    protocolsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    resultsCount.textContent = `Exibindo ${data.length} protocolo${data.length > 1 ? 's' : ''}`;

    // Buscar estatísticas do servidor
    const allStats = await fetchStats();

    protocolsGrid.innerHTML = data.map((p, index) => {
        const stats = allStats[p.id] || { views: 0, downloads: 0 };
        return `
        <div class="protocol-card" data-category="${p.categoria}" data-protocol-id="${p.id}" style="animation-delay: ${index * 0.05}s">
            <div class="card-header">
                <span class="card-category ${p.categoria}">${p.categoriaLabel}</span>
                <span class="card-pages"><i class="fas fa-file-pdf"></i> ${p.paginas} pág.</span>
            </div>
            <h3 class="card-title">${p.titulo}</h3>
            <p class="card-description">${p.descricao}</p>
            <div class="card-stats">
                <div class="stat-item">
                    <i class="fas fa-eye"></i>
                    <span class="stat-label">Visualizações:</span>
                    <span class="stat-value view-count">${formatNumber(stats.views)}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-download"></i>
                    <span class="stat-label">Downloads:</span>
                    <span class="stat-value download-count">${formatNumber(stats.downloads)}</span>
                </div>
            </div>
            <div class="card-meta">
                <span class="card-date"><i class="far fa-calendar-alt"></i> ${p.data}</span>
                <div class="card-actions">
                    <a href="${getDownloadPath(p.arquivo)}" target="_blank" class="view-btn" title="Visualizar PDF" 
                       data-protocol-id="${p.id}" data-protocol-name="${p.titulo}" data-protocol-category="${p.categoriaLabel}">
                        <i class="fas fa-eye"></i> Visualizar
                    </a>
                    <a href="${getDownloadPath(p.arquivo)}" download class="download-btn" title="Baixar PDF" 
                       data-protocol-id="${p.id}" data-protocol-name="${p.titulo}" data-protocol-category="${p.categoriaLabel}">
                        <i class="fas fa-download"></i> Baixar
                    </a>
                </div>
            </div>
        </div>
    `;
    }).join('');

    // Add event listeners for stats tracking
    attachStatsListeners();
}

// ===== Attach Stats Listeners =====
function attachStatsListeners() {
    // Track view button clicks
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const protocolId = parseInt(this.getAttribute('data-protocol-id'));
            const protocolName = this.getAttribute('data-protocol-name');
            const protocolCategory = this.getAttribute('data-protocol-category');
            incrementView(protocolId, protocolName, protocolCategory);
        });
    });

    // Track download button clicks
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const protocolId = parseInt(this.getAttribute('data-protocol-id'));
            const protocolName = this.getAttribute('data-protocol-name');
            const protocolCategory = this.getAttribute('data-protocol-category');
            incrementDownload(protocolId, protocolName, protocolCategory);
        });
    });
}

// ===== Filter Logic =====
function filterProtocolos() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    let filtered = protocolos;

    // Apply category filter
    if (activeFilter !== 'todos') {
        filtered = filtered.filter(p => p.categoria === activeFilter);
    }

    // Apply search filter
    if (searchTerm) {
        filtered = filtered.filter(p => {
            const searchableText = [
                p.titulo,
                p.descricao,
                p.categoriaLabel,
                ...p.palavrasChave
            ].join(' ').toLowerCase();
            
            return searchTerm.split(' ').every(term => searchableText.includes(term));
        });
    }

    renderCards(filtered);
}

// ===== Event Listeners =====

// Search
searchInput.addEventListener('input', () => {
    clearSearch.classList.toggle('visible', searchInput.value.length > 0);
    filterProtocolos();
});

clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    clearSearch.classList.remove('visible');
    filterProtocolos();
    searchInput.focus();
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        filterProtocolos();
    });
});

// Keyboard shortcut: Ctrl+K or Cmd+K to focus search
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
    }
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        clearSearch.classList.remove('visible');
        filterProtocolos();
        searchInput.blur();
    }
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderCards(protocolos);
    
    // Update total count in header
    document.getElementById('totalProtocolos').textContent = protocolos.length;
    
    // Calculate and display total stats
    updateGlobalStats();
});

// ===== Update Global Stats =====
async function updateGlobalStats() {
    try {
        const response = await fetch(`${API_URL}/stats/global/totals`, {
            signal: AbortSignal.timeout(3000)
        });
        if (response.ok) {
            const data = await response.json();
            
            const viewsElement = document.getElementById('totalViews');
            const downloadsElement = document.getElementById('totalDownloads');
            
            if (viewsElement) viewsElement.textContent = formatNumber(data.totalViews);
            if (downloadsElement) downloadsElement.textContent = formatNumber(data.totalDownloads);
            return;
        }
    } catch (error) {
        console.warn('API não disponível, calculando totais localmente');
    }
    
    // Fallback para localStorage
    const stats = getLocalStats();
    let totalViews = 0;
    let totalDownloads = 0;
    
    Object.values(stats).forEach(stat => {
        totalViews += stat.views || 0;
        totalDownloads += stat.downloads || 0;
    });
    
    const viewsElement = document.getElementById('totalViews');
    const downloadsElement = document.getElementById('totalDownloads');
    
    if (viewsElement) viewsElement.textContent = formatNumber(totalViews);
    if (downloadsElement) downloadsElement.textContent = formatNumber(totalDownloads);
}

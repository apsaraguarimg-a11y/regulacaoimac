// ===== Utility: get absolute path for download =====
function getDownloadPath(filename) {
    // Get the base URL (root of the site)
    const baseUrl = window.location.origin;
    // Encode the filename properly
    const encodedFilename = encodeURIComponent(filename);
    // Return absolute URL to the PDF in root directory
    return `${baseUrl}/${encodedFilename}`;
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
function renderCards(data) {
    if (data.length === 0) {
        protocolsGrid.style.display = 'none';
        noResults.style.display = 'block';
        resultsCount.textContent = 'Nenhum protocolo encontrado';
        return;
    }

    protocolsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    resultsCount.textContent = `Exibindo ${data.length} protocolo${data.length > 1 ? 's' : ''}`;

    protocolsGrid.innerHTML = data.map((p, index) => `
        <div class="protocol-card" data-category="${p.categoria}" style="animation-delay: ${index * 0.05}s">
            <div class="card-header">
                <span class="card-category ${p.categoria}">${p.categoriaLabel}</span>
                <span class="card-pages"><i class="fas fa-file-pdf"></i> ${p.paginas} pág.</span>
            </div>
            <h3 class="card-title">${p.titulo}</h3>
            <p class="card-description">${p.descricao}</p>
            <div class="card-meta">
                <span class="card-date"><i class="far fa-calendar-alt"></i> ${p.data}</span>
                <a href="${getDownloadPath(p.arquivo)}" download class="download-btn" title="Baixar PDF">
                    <i class="fas fa-download"></i> Baixar PDF
                </a>
            </div>
        </div>
    `).join('');
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
});

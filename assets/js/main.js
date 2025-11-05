// Menu Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Navegação Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Fechar menu mobile se estiver aberto
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Abas de Desafio
const tabButtons = document.querySelectorAll('#desafio .tab-btn');
const tabContents = document.querySelectorAll('#desafio .tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        tabContents.forEach(content => {
            content.id === targetId ? content.classList.remove('hidden') : content.classList.add('hidden');
        });
    });
});

// Etapas da Tecnologia
const techSteps = document.querySelectorAll('.tech-step');
const techDescriptions = document.querySelectorAll('.tech-desc');

techSteps.forEach(step => {
    step.addEventListener('click', () => {
        const targetId = step.getAttribute('data-target');
        
        techSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
        
        techDescriptions.forEach(desc => {
            desc.id === targetId ? desc.classList.remove('hidden') : desc.classList.add('hidden');
        });
    });
});

// Gráfico de Resultados
function initializeChart() {
    const ctx = document.getElementById('resultsChart');
    if (!ctx) return;

    const data = {
        labels: ['Oxigênio Dissolvido', 'DBO', 'Coliformes', 'Turbidez', 'pH'],
        datasets: [{
            label: 'Antes do Tratamento',
            data: [2, 80, 100, 75, 6.5],
            backgroundColor: 'rgba(239, 68, 68, 0.2)',
            borderColor: 'rgba(239, 68, 68, 1)',
            borderWidth: 1
        }, {
            label: 'Após o Tratamento',
            data: [6, 20, 10, 15, 7.2],
            backgroundColor: 'rgba(34, 197, 94, 0.2)',
            borderColor: 'rgba(34, 197, 94, 1)',
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Inicializar Gráfico
document.addEventListener('DOMContentLoaded', initializeChart);

// Tabs Genérico
function setupTabs(containerSelector, buttonSelector, contentSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const buttons = container.querySelectorAll(buttonSelector);
    const contents = container.querySelectorAll(contentSelector);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            contents.forEach(content => {
                content.id === targetId ? content.classList.remove('hidden') : content.classList.add('hidden');
            });
        });
    });
}

// Inicializar todas as tabs
document.addEventListener('DOMContentLoaded', () => {
    setupTabs('#cronograma', '.tab-secondary-btn', '.timeline-content');
    setupTabs('#custos', '.cost-btn', '.cost-content');
});
📋 Gerenciador de Tarefas
Um sistema moderno e responsivo para gerenciamento de tarefas, desenvolvido com HTML, CSS e React. Interface intuitiva com funcionalidades completas de CRUD (Create, Read, Update, Delete) para organizar suas atividades.

🖥️ Desktop

Layout com sidebar fixa
Grid de 3 colunas para tarefas
Navegação completa no menu lateral

📱 Mobile

Menu hambúrguer responsivo
Layout adaptativo em coluna única
Touch-friendly para dispositivos móveis

💻 Tablet

Grid de 2 colunas
Interface híbrida otimizada

✨ Funcionalidades
📝 Gerenciamento de Tarefas

✅ Criar novas tarefas
👁️ Visualizar tarefas em cards organizados
✏️ Editar título e descrição inline
🗑️ Excluir tarefas concluídas
🔄 Alterar status (Pendente → Em Progresso → Concluído)

🎨 Interface

📱 Design Responsivo - Funciona em todos os dispositivos
🌟 Animações Suaves - Micro-interações fluidas
🎯 UX Intuitiva - Interface amigável e fácil de usar
🎨 Visual Moderno - Design contemporâneo com gradientes

🔧 Funcionalidades Avançadas

Status Visuais: Cores e ícones distintos para cada status
Edição Inline: Edite diretamente nos cards sem popup
Exclusão Seletiva: Só tarefas concluídas podem ser excluídas
Hover Effects: Botões aparecem no hover para interface limpa
Validação: Impede campos vazios e dados inválidos

🛠️ Tecnologias Utilizadas

React 18 - Biblioteca JavaScript para interfaces
Tailwind CSS - Framework CSS utilitário
Lucide React - Ícones modernos e vetoriais
HTML5 - Estrutura semântica
CSS3 - Estilização avançada e animações
Babel - Transpilador JavaScript

📁 Estrutura do Projeto
Gerenciador de tarefas/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos customizados
├── app.js              # Lógica React e componentes
├── README.md           # Documentação

🚀 Como Usar
1. Clone o Repositório
bashgit clone https://github.com/OliveiraRodr/PROJETO-GESTOR-DE-TAREFAS.git
cd task-dashboard
2. Abra no Navegador
Simplesmente abra o arquivo index.html em qualquer navegador moderno.
bash# Ou usando um servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
3. Comece a Usar!

Clique no botão + para adicionar tarefas
Clique em uma tarefa para alterar seu status
Hover sobre tarefas para ver opções de edição/exclusão
Use o menu lateral para navegar

📋 Guia de Uso
➕ Adicionar Tarefa

Clique no botão flutuante + (canto inferior direito)
Uma nova tarefa será criada automaticamente
Edite o título e descrição conforme necessário

✏️ Editar Tarefa

Passe o mouse sobre uma tarefa
Clique no ícone de lápis (editar)
Modifique título e/ou descrição
Clique em Salvar ou Cancelar

🔄 Alterar Status

Clique diretamente no card da tarefa
Status muda na sequência: Pendente → Em Progresso → Concluído
Cores e ícones mudam automaticamente

🗑️ Excluir Tarefa

Termine a tarefa (status "Concluído")
Passe o mouse sobre a tarefa
Clique no ícone de lixeira (vermelho)
Tarefa será removida permanentemente

🎨 Personalização
Cores dos Status
css/* Em styles.css */
.status-pending { background: linear-gradient(135deg, #ef4444, #dc2626); }
.status-progress { background: linear-gradient(135deg, #eab308, #ca8a04); }
.status-completed { background: linear-gradient(135deg, #10b981, #059669); }
Adicionar Novos Status
javascript// Em app.js - função getStatusColor()
case 'novo-status': return 'bg-purple-500 text-white';
📱 Responsividade
Breakpoints

Mobile: < 768px - Layout em coluna única
Tablet: 768px - 1024px - Grid de 2 colunas
Desktop: > 1024px - Grid de 3 colunas + sidebar fixa

Features Mobile

Menu hambúrguer
Touch gestures
Sidebar overlay
Botões touch-friendly

🔧 Desenvolvimento
Pré-requisitos

Navegador moderno (Chrome, Firefox, Safari, Edge)
Editor de código (VS Code recomendado)

Estrutura de Desenvolvimento
javascript// Estado principal das tarefas
const [tasks, setTasks] = useState([...]);

// Controle de interface
const [editingTask, setEditingTask] = useState(null);
const [sidebarOpen, setSidebarOpen] = useState(false);
Adicionar Nova Funcionalidade

Crie a função no componente React
Adicione o estado necessário
Implemente a UI correspondente
Teste em diferentes dispositivos

🤝 Contribuindo

Fork o projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'Add some AmazingFeature')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request

👨‍💻 Autor
Samuel Oliveira

GitHub: @OliveiraRodr
LinkedIn: in/samuel-r-oliveira
Email: samuelroliveira15@gmail.com

🙏 Agradecimentos

React - Biblioteca JavaScript
Tailwind CSS - Framework CSS
Lucide - Ícones SVG
Comunidade open source


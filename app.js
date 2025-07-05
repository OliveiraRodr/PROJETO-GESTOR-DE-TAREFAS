const { useState } = React;
const { User, Plus, CheckCircle, Clock, AlertCircle, Edit3, Trash2, Save, X } = lucideReact;

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Implementar login", description: "Criar sistema de autenticação", status: "pending" },
    { id: 2, title: "Design da homepage", description: "Criar layout responsivo", status: "in-progress" },
    { id: 3, title: "Configurar banco", description: "Setup PostgreSQL", status: "completed" },
    { id: 4, title: "Testes unitários", description: "Implementar testes para API", status: "pending" },
    { id: 5, title: "Deploy produção", description: "Configurar ambiente de produção", status: "in-progress" },
    { id: 6, title: "Documentação", description: "Escrever documentação da API", status: "completed" },
    { id: 7, title: "Otimização", description: "Melhorar performance", status: "pending" },
    { id: 8, title: "Segurança", description: "Implementar validações", status: "pending" },
    { id: 9, title: "Monitoramento", description: "Setup de logs e métricas", status: "pending" }
  ]);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editValues, setEditValues] = useState({ title: '', description: '' });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'status-pending text-white';
      case 'in-progress': return 'status-progress text-white';
      case 'completed': return 'status-completed text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'in-progress': return 'Em Progresso';
      case 'completed': return 'Concluído';
      default: return 'Indefinido';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return React.createElement(AlertCircle, { className: "w-4 h-4" });
      case 'in-progress': return React.createElement(Clock, { className: "w-4 h-4" });
      case 'completed': return React.createElement(CheckCircle, { className: "w-4 h-4" });
      default: return null;
    }
  };

  const addNewTask = () => {
    const newTask = {
      id: Date.now(), // Usa timestamp para ID único
      title: "Nova tarefa",
      description: "Descrição da nova tarefa",
      status: "pending"
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const statusOrder = ['pending', 'in-progress', 'completed'];
        const currentIndex = statusOrder.indexOf(task.status);
        const nextIndex = (currentIndex + 1) % statusOrder.length;
        return { ...task, status: statusOrder[nextIndex] };
      }
      return task;
    }));
  };

  const startEditingTask = (task, e) => {
    e.stopPropagation();
    setEditingTask(task.id);
    setEditValues({ title: task.title, description: task.description });
  };

  const saveTaskEdit = (taskId, e) => {
    e.stopPropagation();
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, title: editValues.title.trim() || task.title, description: editValues.description.trim() || task.description }
        : task
    ));
    setEditingTask(null);
    setEditValues({ title: '', description: '' });
  };

  const cancelEdit = (e) => {
    e.stopPropagation();
    setEditingTask(null);
    setEditValues({ title: '', description: '' });
  };

  const deleteTask = (taskId, e) => {
    e.stopPropagation();
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleCardClick = (task) => {
    if (editingTask !== task.id) {
      toggleTaskStatus(task.id);
    }
  };

  return React.createElement('div', {
    className: "min-h-screen gradient-bg p-4"
  }, 
    React.createElement('div', {
      className: "max-w-7xl mx-auto"
    },
      React.createElement('div', {
        className: "bg-white rounded-2xl shadow-2xl overflow-hidden min-h-[90vh] flex flex-col lg:flex-row"
      },
        // Barra lateral
        React.createElement('div', {
          className: `bg-blue-500 text-white transition-all duration-300 ease-in-out ${
            sidebarOpen ? 'w-full absolute z-50 h-full sidebar-enter' : 'w-full lg:w-64'
          } lg:relative lg:h-auto`
        },
          // Botão do menu mobile
          React.createElement('div', {
            className: "lg:hidden flex justify-between items-center p-4 border-b border-blue-400"
          },
            React.createElement('h2', { className: "text-xl font-bold" }, "Menu"),
            React.createElement('button', {
              onClick: () => setSidebarOpen(false),
              className: "text-white hover:bg-blue-600 p-2 rounded btn-animate"
            }, "×")
          ),

          // Logo/Avatar
          React.createElement('div', {
            className: "p-6 border-b border-blue-400"
          },
            React.createElement('div', {
              className: "w-12 h-12 bg-white rounded-full flex items-center justify-center"
            },
              React.createElement('div', {
                className: "w-6 h-6 bg-blue-500 rounded-full"
              })
            )
          ),

          // Navegação
          React.createElement('nav', {
            className: "p-4 space-y-2"
          },
            React.createElement('button', {
              onClick: () => {
                setActiveTab('dashboard');
                setSidebarOpen(false);
              },
              className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors btn-animate ${
                activeTab === 'dashboard' ? 'bg-blue-600' : 'hover:bg-blue-600'
              }`
            },
              React.createElement('div', { className: "w-2 h-2 bg-white rounded-full" }),
              React.createElement('span', {}, "Dashboard")
            ),
            
            React.createElement('button', {
              onClick: () => {
                setActiveTab('new-task');
                setSidebarOpen(false);
              },
              className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors btn-animate ${
                activeTab === 'new-task' ? 'bg-blue-600' : 'hover:bg-blue-600'
              }`
            },
              React.createElement(Plus, { className: "w-4 h-4" }),
              React.createElement('span', {}, "Nova Tarefa")
            ),
            
            React.createElement('button', {
              onClick: () => {
                setActiveTab('my-tasks');
                setSidebarOpen(false);
              },
              className: `w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors btn-animate ${
                activeTab === 'my-tasks' ? 'bg-blue-600' : 'hover:bg-blue-600'
              }`
            },
              React.createElement(CheckCircle, { className: "w-4 h-4" }),
              React.createElement('span', {}, "Minhas Tarefas")
            )
          )
        ),

        // Conteúdo principal
        React.createElement('div', {
          className: "flex-1 flex flex-col"
        },
          // Cabeçalho
          React.createElement('header', {
            className: "bg-gray-50 p-4 lg:p-6 border-b border-gray-200 flex items-center justify-between"
          },
            React.createElement('div', {
              className: "flex items-center space-x-4"
            },
              React.createElement('button', {
                onClick: () => setSidebarOpen(true),
                className: "lg:hidden bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 btn-animate"
              }, "☰"),
              React.createElement('h1', {
                className: "text-2xl lg:text-3xl font-bold text-gray-800"
              }, "Dashboard")
            ),
            
            React.createElement('div', {
              className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors cursor-pointer btn-animate"
            },
              React.createElement(User, { className: "w-5 h-5" })
            )
          ),

          // Grade de tarefas
          React.createElement('main', {
            className: "flex-1 p-4 lg:p-6 bg-gray-50 overflow-y-auto"
          },
            React.createElement('div', {
              className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6"
            },
              tasks.map((task) =>
                React.createElement('div', {
                  key: task.id,
                  className: "task-card gradient-card rounded-xl shadow-md p-6 cursor-pointer relative group card-enter",
                  onClick: () => handleCardClick(task)
                },
                  // Botões de ação
                  React.createElement('div', {
                    className: "absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  },
                    React.createElement('button', {
                      onClick: (e) => startEditingTask(task, e),
                      className: "w-8 h-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors btn-animate",
                      title: "Editar tarefa"
                    },
                      React.createElement(Edit3, { className: "w-4 h-4" })
                    ),
                    
                    task.status === 'completed' && React.createElement('button', {
                      onClick: (e) => deleteTask(task.id, e),
                      className: "w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors btn-animate",
                      title: "Excluir tarefa concluída"
                    },
                      React.createElement(Trash2, { className: "w-4 h-4" })
                    )
                  ),

                  React.createElement('div', {
                    className: "flex justify-between items-start mb-3 pr-20"
                  },
                    editingTask === task.id ?
                      React.createElement('input', {
                        type: "text",
                        value: editValues.title,
                        onChange: (e) => setEditValues({ ...editValues, title: e.target.value }),
                        className: "text-lg font-semibold text-gray-800 bg-transparent border-b-2 border-blue-500 outline-none w-full mr-2",
                        placeholder: "Título da tarefa",
                        onClick: (e) => e.stopPropagation(),
                        autoFocus: true
                      }) :
                      React.createElement('h3', {
                        className: "text-lg font-semibold text-gray-800 line-clamp-2"
                      }, task.title),
                    
                    task.status !== 'pending' && editingTask !== task.id &&
                      React.createElement('span', {
                        className: `px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(task.status)}`
                      },
                        getStatusIcon(task.status),
                        React.createElement('span', { className: "hidden sm:inline" }, getStatusText(task.status))
                      )
                  ),
                  
                  editingTask === task.id ?
                    React.createElement('div', {
                      className: "space-y-3"
                    },
                      React.createElement('textarea', {
                        value: editValues.description,
                        onChange: (e) => setEditValues({ ...editValues, description: e.target.value }),
                        className: "w-full text-gray-600 text-sm bg-transparent border border-gray-300 rounded p-2 outline-none focus:border-blue-500 resize-none",
                        placeholder: "Descrição da tarefa",
                        rows: "3",
                        onClick: (e) => e.stopPropagation()
                      }),
                      
                      React.createElement('div', {
                        className: "flex space-x-2"
                      },
                        React.createElement('button', {
                          onClick: (e) => saveTaskEdit(task.id, e),
                          className: "flex items-center space-x-1 px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm transition-colors btn-animate"
                        },
                          React.createElement(Save, { className: "w-3 h-3" }),
                          React.createElement('span', {}, "Salvar")
                        ),
                        
                        React.createElement('button', {
                          onClick: cancelEdit,
                          className: "flex items-center space-x-1 px-3 py-1 bg-gray-500 hover:bg-gray-600 text-white rounded text-sm transition-colors btn-animate"
                        },
                          React.createElement(X, { className: "w-3 h-3" }),
                          React.createElement('span', {}, "Cancelar")
                        )
                      )
                    ) :
                    React.createElement(React.Fragment, {},
                      React.createElement('p', {
                        className: "text-gray-600 text-sm line-clamp-3 mb-4"
                      }, task.description),
                      
                      task.status === 'pending' &&
                        React.createElement('span', {
                          className: `inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`
                        }, getStatusText(task.status))
                    )
                )
              )
            )
          )
        )
      ),

      // Botão de ação flutuante
      React.createElement('button', {
        onClick: addNewTask,
        className: "floating-btn fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center"
      },
        React.createElement(Plus, { className: "w-6 h-6" })
      )
    )
  );
};

// Renderiza o componente
ReactDOM.render(React.createElement(TaskDashboard), document.getElementById('root'));
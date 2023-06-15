import { PlusCircle, ClipboardText } from "phosphor-react";

import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { TaskCard } from "./components/TaskCard";
import { FormEvent, useState } from "react";

interface Task {
  content: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const [newTask, setNewTask] = useState("");

  function handleNewTask(event : FormEvent) {
    event.preventDefault();
    const contentExists = tasks.some((task) => task.content === newTask);

    if (!contentExists) {
      setTasks([...tasks, { content: newTask, done: false }]);
      setNewTask("")
    } else {
      alert("Tarefa ja criada");
    }
  }

  function handleDeleteTask(taskToDelete : Task) {
    const taksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(taksWithoutDeletedOne);
  }

  function handleDoneTask(content: string) {
    const taskIndex = tasks.findIndex((task) => task.content === content);

    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].done = !updatedTasks[taskIndex].done;

      setTasks(updatedTasks);
    }
  }

  return (
    <div className={styles.app}>
      <Header />
      <div onSubmit={handleNewTask} className={styles.box}>
        <form className={styles.newTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button>
            Criar <PlusCircle size={20} />
          </button>
        </form>
      </div>

      <div className={styles.task}>
        <div className={styles.taskText}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Concluidas
            {tasks.length == 0 ? (
              <span>0</span>
            ) : (
              <span>
                {tasks.filter((task) => task.done).length} de {tasks.length}
              </span>
            )}
          </p>
        </div>

        <div className={styles.taskCards}>
          {tasks &&
            tasks.map((task) => {
              return (
                <TaskCard
                  key={task.content}
                  content={task.content}
                  onDeltetask={() => {
                    handleDeleteTask(task);
                  }}
                  onDoneTask={() => {
                    handleDoneTask(task.content);
                  }}
                />
              );
            })}

          {tasks.length == 0 && (
            <div className={styles.noTask}>
              <ClipboardText size={56} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

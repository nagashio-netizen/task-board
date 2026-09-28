import { useState, useEffect } from 'react'
import './App.css'

const STORAGE_KEY = 'task-board-tasks'

function loadTasks() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

function App() {
  const [tasks, setTasks] = useState(loadTasks)
  const [text, setText] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    setTasks([...tasks, { id: Date.now(), text: trimmed, completed: false }])
    setText('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const startEdit = (task) => {
    setEditingId(task.id)
    setEditText(task.text)
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  const saveEdit = (e) => {
    e.preventDefault()
    const trimmed = editText.trim()
    if (!trimmed) return
    setTasks(tasks.map((task) =>
      task.id === editingId ? { ...task, text: trimmed } : task
    ))
    cancelEdit()
  }

  return (
    <div className="app">
      <h1>タスクボード</h1>
      <form className="task-form" onSubmit={addTask}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="新しいタスクを入力"
        />
        <button type="submit">追加</button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'task completed' : 'task'}>
            {editingId === task.id ? (
              <form className="edit-form" onSubmit={saveEdit}>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Escape' && cancelEdit()}
                  autoFocus
                />
                <button type="submit" className="save-btn">保存</button>
                <button type="button" className="cancel-btn" onClick={cancelEdit}>
                  キャンセル
                </button>
              </form>
            ) : (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span onDoubleClick={() => startEdit(task)}>{task.text}</span>
                </label>
                <div className="actions">
                  <button className="edit-btn" onClick={() => startEdit(task)}>
                    編集
                  </button>
                  <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                    削除
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p className="empty">タスクがありません</p>}
    </div>
  )
}

export default App

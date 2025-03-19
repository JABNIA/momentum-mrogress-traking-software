import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/Home/TasksPage'
import NewTask from './components/NewTask/NewTask'
import TaskPage from './components/TaskPage/TaskPage'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/new-task" element={<NewTask />} />
          <Route path="/task/:id" element={<TaskPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App

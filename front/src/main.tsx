import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  // 画面サイズが300px以下の場合は警告画面に切り替える
    <App />
  // </React.StrictMode>
)

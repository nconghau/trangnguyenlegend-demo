import Menu from '../Menu'
import Content_chat from './Chat-Content'

export default function Chat() {
  return (
    <div>
      <>
        <div className="flex m-4">
          <Menu />
          <div className="content">
            <Content_chat />
          </div>
        </div>
      </>
    </div>
  )
}
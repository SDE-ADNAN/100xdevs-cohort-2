import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

function App() {
  return <RecoilRoot><MainApp /></RecoilRoot>
}

function MainApp() {

  const networkNotificationCount = useRecoilValue(networkAtom)
  const finalValue = networkNotificationCount >= 100 ? "99+" : networkNotificationCount;

  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)

  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home</button>
      <button>My Network ({finalValue})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App

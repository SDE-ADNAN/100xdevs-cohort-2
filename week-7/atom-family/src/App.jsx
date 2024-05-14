/* eslint-disable react/prop-types */

import './App.css'
import { RecoilRoot, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
    <Todo id={2} />
  </RecoilRoot>
}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if (todo.state === 'loading') {
    return <div>Loading.....</div>
  } else {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
      </>
    )
  }

}

export default App

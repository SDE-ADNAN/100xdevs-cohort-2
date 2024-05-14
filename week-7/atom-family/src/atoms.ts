import { atomFamily, selectorFamily } from "recoil";
import axios from 'axios'

// atom family with static data
// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: id => {
//     return TODOS.find(x => x.id === id)
//   },
// });

// atomFamily with async data query
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    default: selectorFamily({
      key:"todoSelectorFamily",
      get: (id) => async ({get})=>{
        const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        return res.data.todo
      }
    })
  });
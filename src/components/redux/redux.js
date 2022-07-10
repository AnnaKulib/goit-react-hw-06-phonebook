// add redux
// import { createStore } from "redux";
// import { useSelector, useDispatch } from "react-redux";
// // ----------------

// // add redux
// const reducer = (state = {}, action) => state;
// const store = createStore(reducer);
// console.log(store);

// const action = {
//   type: "ADD_NOTE",
//   payload: {
//     text: "Redux"
//   },
// };

// const addNote = text => ({
//   type: "ADD_NOTE",
//   payload: {
//     id: Date.now(),
//     text,
//   },
// });

// const deleteNote = id => ({
//   type: "DELETE_NOTE",
//   payload: {
//     id,
//   },
// });

// console.log(action);
// console.log(addNote);
// console.log(deleteNote);

// // reducer = (prevState, action) => nexstState;
// const initialState =[];
// function notesReducer(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_NOTE":
//       return [...state, action.payload];

//     case "DELETE_NOTE":
//       return state.filter(note => note.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// console.log(notesReducer)

// // Хук useSelector
// const UserMenu = () => {
//   const displayName = useSelector(state => state.user.displayName);
//   return <div>{displayName}</div>
// };

// console.log(UserMenu);

// // Хук useDispatch
// const addNote = text => ({
//   type: "ADD_NOTE",
//   payload: text,
// });

// const TodoForm = () => {
//   // Получаем ссылку на функцию для отправки действий
//   const dispatch = useDispatch();

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;

//     // Отправляем действие
//     dispatch(addNote(form.elements.text.value));
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="text" />
//       <button type="submit">Create todo</button>
//     </form>
//   );
// };
// // ----------------

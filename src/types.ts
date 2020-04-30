export type Todo = {
  id: string;
  text: string;
  complete: boolean;
};

export type ToggleComplete = (selectedTodo: Todo) => void;
export type AddTodo = (newTodo: string) => void;
export type RemoveTodo = (id: string) => void;
export type User = {
  token: string;
  username: string;
};

//
// interface User {
//     id: string,
//     name: string,
//     email: string,
//     avatarId: string,
//     roles: string[]
// }
//
// interface Board {
//     // UUID
//     id: string,
//     name : string,
// }
//
// interface Lane {
//     id: string,
//     boardId: string,
//     name: string,
//     positionInBoard: number
// }
//
// interface Card {
//     id: string,
//     name: string,
//     description: string,
//     positionInLane: number,
//     files: Array<string>,
//     taskItems: CardTaskItem[]
// }
//
// // GET card/{cardId}/tasks
// // [{
// // id: string,
// // text: string;
// // complete: boolean;
// // }]
// export type CardTaskItem = {
//     id: string,
//     cardId: string,
//     text: string;
//     complete: boolean;
// }
//
//
// // PUT -> update
// // POST -> create
// // GET -> get <duh>
// // DELETE -> guess what
// // /lane/{laneId}
// // PATCH /lane/asdkajsdlkwkdqldn0921
// interface ChangeLanePositionRequest {
//     newPosition: number
// }
//
//
//
// // LOGIN
// // ALL TABLES
// // TABLE
// // CARD
// // CARD DETAIL
// // nazwa
// // priorytet
// // notatka
// // zalacznik
// // podpunkty

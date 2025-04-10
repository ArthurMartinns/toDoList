import { toDo } from "./toDo";

export type toDoState = toDo[]

//Props opcionais quando precisar editar determinada task

type toDoWithOptionalProps = {
    [Key in keyof toDo]?: toDo[Key]
}

//Actions

type Add = {
    type: 'ADD',
    payload: toDo | toDo[]
}

type Change = {
    type: 'CHANGE',
    payload: toDoWithOptionalProps & { index: number }
}

type Delete = {
    type: 'DELETE',
    payload: { index: number }
}

export type toDoActions = Add | Change | Delete
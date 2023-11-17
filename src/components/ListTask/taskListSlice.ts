// import { task } from "../../redux/types";

const initState = [
    { id: 1, nameTask: "HTML", priority: "High", status: "Todo" },
    { id: 2, nameTask: "CSS", priority: "Medium", status: "Progress" },
    { id: 3, nameTask: "JAvascript", priority: "Low", status: "Done" },
];

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const taskListSlice = (state = initState, action: {type: string; payload?: any}) => {

//     switch(action.type) {
//         case "taskList/addTask":
//             return [...state, action.payload];

//         case "taskList/editTask": {
//             return state.map(task => task.id === action.payload.id
//                                 ? {...task, nameTask: action.payload.nameTask, priority: action.payload.priority}
//                                 : task)
//         }

//         case "taskList/deleteTask":
//             state.forEach((task, index) => {
//                 if(task.id === action.payload) {
//                     state.splice(index, 1);
//                 }
//             });
//             return [...state];

//         case "taskList/statusTaskAction":{
//             return state.map(task => {
//                 if(task.id === action.payload) {
//                     let status = "Todo";
//                     if(task.status === "Todo") {
//                         status = "Progress";
//                     } else if(task.status === "Progress") {
//                         status = "Done";
//                     }

//                     return {...task, status}
//                 }
//                 return task;
//             })
//         }
//         default:
//             return state;
//     }

// }

// export default taskListSlice;

import { createSlice } from "@reduxjs/toolkit";

const taskListSlice = createSlice({
    name: "taskList",
    initialState: initState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload);
        },
        editTask: (state, action) => {
            state.find((task) => {
                if (task.id === action.payload.id) {
                    (task.nameTask = action.payload.nameTask),
                        (task.priority = action.payload.priority);
                }
            });
        },
        deleteTask: (state, action) => {
            state.forEach((task, index) => {
                if (task.id === action.payload) {
                    state.splice(index, 1);
                }
            });
        },
        statusTaskTask: (state, action) => {
            state.find((task) => {
                if (task.id === action.payload) {
                    let status = "Todo";
                    if (task.status === "Todo") {
                        status = "Progress";
                    } else if (task.status === "Progress") {
                        status = "Done";
                    }

                    task.status = status;
                }
            });
        },
    },
});

export default taskListSlice;

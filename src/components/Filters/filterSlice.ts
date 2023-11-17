// import { filterType } from "../../redux/types";
const initState = {
    nameTask: "",
    prioritys: [],
    status: "todo",
};

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// const filterSlice = (state = initState, action: {type: string; payload?: any}) => {
//     switch(action.type) {
//         case "filter/filterChange":
//             return {
//                 nameTask: action.payload.nameTask,
//                 prioritys: action.payload.prioritys,
//                 status: action.payload.status
//             }
//         default:
//             return state;
//     }
// }
// export default filterSlice;

import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: initState,
    reducers: {
        filterChange: (state, action) => {
            (state.nameTask = action.payload.nameTask),
                (state.prioritys = action.payload.prioritys),
                (state.status = action.payload.status);
        },
    },
});

export default filterSlice;

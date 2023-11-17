import { createSelector } from "@reduxjs/toolkit";
import {stateType} from "./types";


export const filterSearchSelector = (state: stateType) => state.filter.nameTask;
export const filterPrioritySelector = (state: stateType) => state.filter.prioritys;
export const filterStatusSelector = (state: stateType) => state.filter.status;
export const taskListSelector = (state: stateType) => state.taskList;


export const taskListRemaining = createSelector(
    taskListSelector, 
    filterSearchSelector, 
    filterPrioritySelector,
    filterStatusSelector,
    (taskList, filterSearch, prio, status) => {

        return taskList.filter(task =>{
            return (task.nameTask.toLocaleLowerCase().includes(filterSearch.toLocaleLowerCase()))
                    && (prio.includes(task.priority as never))
                    && (status == "All" ? true : (status === task.status));
        } );
})




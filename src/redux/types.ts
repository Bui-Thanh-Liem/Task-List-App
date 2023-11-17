export type task = {id: string|number; nameTask: string, priority: string, status: string}

export type filterType = {
    nameTask : string,
    prioritys: string[],
    status: string
}

export type stateType = {
    taskList: task[];
    filter: filterType
}


export type payloadEditType = {
    nameTask: string;
    priority: string;
    id: number;
}


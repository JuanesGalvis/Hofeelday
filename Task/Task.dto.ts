export interface Task {
    title: string,
    content: string,
    complete:  boolean
}

export interface UpdateTask extends Omit<Partial<Task>, 'complete'> {}
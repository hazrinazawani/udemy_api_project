import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {

    private tasks:Task[] = [];

    getAllTasks():Task[]{

        return this.tasks;
    }

    createTask(createTaskDto:CreateTaskDto):Task{
        const {title,description} = createTaskDto;

        const {v4: uuidv4} = require('uuid');

        const task:Task = {
            id:uuidv4(),
            title,
            description,
            status:TaskStatus.OPEN,
        };

        this.tasks.push(task);
        return task;
    }
}

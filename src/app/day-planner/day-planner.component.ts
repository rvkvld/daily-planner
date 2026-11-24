import { Component } from "@angular/core";
import { Task } from "../task.model";
import { TaskComponent } from "../task/task.component";
import {  AddTaskComponent } from "../add-task/add-task.component";
import { DatePipe } from "@angular/common";
import { TimeLeftPipe } from "../time-left.pipe";
import { HighlightDirective } from "../highlight.directive";
import { UserComponent } from "../user/user.component";

const today = new Date();
@Component({
  selector: "app-day-planner",
  imports: [TaskComponent, AddTaskComponent, DatePipe, TimeLeftPipe, HighlightDirective],
  templateUrl: "./day-planner.component.html",
  styleUrl: "./day-planner.component.css",
})
export class DayPlannerComponent {
  selectedTask: Task | null = null;

  selectTask(task: Task) {
    this.selectedTask = task;
  }

  handleCompleteTask() {
    this.selectedTask = null;
  }

  handleNewTask(taskData: { name: string; date: string }) {
    let lastId: number;
    if (this.tasks.length > 0) {
      lastId = this.tasks[this.tasks.length - 1].id + 1;
    } else {
      lastId = 1;
    }

    const inputDate = new Date(taskData.date);
    const today = new Date();
    const isDueToday = 
      inputDate.getFullYear()=== today.getFullYear() &&
      inputDate.getMonth() === today.getMonth() &&
      inputDate.getDate() === today.getDate()



    const newTask: Task = {
      id: lastId,
      name: taskData.name,
      time: inputDate,
      isDueToday: isDueToday,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  tasks: Task[] = [
    {
      id: 1,
      name: "Meeting with team",
      time: new Date(new Date().setHours(21)),
      isDueToday: true,
      completed: false,
    },
    {
      id: 2,
      name: "Client presentation",
      time: new Date(new Date().setMinutes(59)),
      isDueToday: true,
      completed: false,
    },
    {
      id: 3,
      name: "Project deadline",
      time: new Date(new Date().setMonth(today.getMonth() + 1)),
      isDueToday: false,
      completed: false,
    },
    {
      id: 4,
      name: "Team outing",
      time: new Date("Sat Apr 20 2024 13:00:00 GMT+0530"),
      isDueToday: false,
      completed: true,
    },
    {
      id: 5,
      name: "Software update",
      time: new Date(),
      isDueToday: true,
      completed: false,
    },
  ];
}

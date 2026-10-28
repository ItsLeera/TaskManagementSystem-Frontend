import { Task } from "@/types/tasks";
import axios from "axios";

const createTask = async (task: Omit<Task, "id" | "createdAt">) => {
  const response = await axios.post<Task>(
    "http://localhost:8080/tasks",
    task,
  );

  const newTask = response.data;

  return newTask;
};

export default createTask;

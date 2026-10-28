import { Task } from "@/types/tasks";
import axios from "axios";

const getTasks = async () => {
  const response = await axios.get<Task[]>("http://localhost:8080/api/tasks");

  const tasks = response.data;

  return tasks;
};

export default getTasks;

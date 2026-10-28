import { Task } from "@/types/tasks";
import axios from "axios";

const getTask = async (id: number) => {
  const response = await axios.get<Task>(
    `http://localhost:8080/api/task/${id}`,
  );

  const task = response.data;

  return task;
};

export default getTask;

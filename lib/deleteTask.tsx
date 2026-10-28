import { Task } from "@/types/tasks";
import axios from "axios";

const getTask = async (id: number) => {
  const response = await axios.delete<Task>(
    `http://localhost:8080/api/task/${id}`,
  );


};

export default getTask;

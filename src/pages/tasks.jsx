import { useParams, useNavigate } from "react-router-dom";

import TasksContent from "../components/molecules/Content/TasksContent";
import DefaultTemplate from "../components/templates/DefaultTemplate/DefaultTemplate";
import Button from "../components/atoms/Button/Button";

const TasksPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <DefaultTemplate Name="Tasks">
      <Button onClick={() => navigate(-1)}>Back</Button>
      <div>{id}</div>
      <TasksContent />
    </DefaultTemplate>
  );
};

export default TasksPage;

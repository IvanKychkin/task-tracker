import TasksContent from "../components/molecules/Content/TasksContent";
import DefaultTemplate from "../components/templates/DefaultTemplate/DefaultTemplate";

const TasksPage = () => {
  return (
    <DefaultTemplate Name="Tasks">
      <TasksContent />
    </DefaultTemplate>
  );
};

export default TasksPage;

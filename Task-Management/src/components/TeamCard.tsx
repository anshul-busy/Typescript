import "./styles/TeamCard.css";
import type { Task } from "../types/Task";
import type { User } from "../services/usersService";

type Props = {
  users: User[];
  tasks: Task[];
};

const getStatus = (userId: number, tasks: Task[]) => {
  const userTasks = tasks.filter(t => t.assignedTo === userId);

  if (userTasks.length === 0) return "pending";

  const hasPending = userTasks.some(t => t.status === "Pending");

  return hasPending ? "in-progress" : "complete";
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "complete":
      return "Complete";
    case "in-progress":
      return "In progress";
    default:
      return "Pending";
  }
};

const TeamCard = ({ users, tasks }: Props) => {
  return (
    <div className="team-card">
      <div className="header">
        <h3>Team Collaboration</h3>
      </div>

      <div className="list">
        {users.map((user) => {
          const status = getStatus(user.id, tasks);

          return (
            <div key={user.id} className="member">
              <div className="info">
                <img
                  src={`https://i.pravatar.cc/40?img=${user.id}`}
                  alt={user.name}
                />
                <div>
                  <p className="name">{user.name}</p>
                  <span className="email">{user.email}</span>
                </div>
              </div>

              <span className={`status ${status}`}>
                {getStatusLabel(status)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
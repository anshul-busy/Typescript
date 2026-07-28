import "./styles/TeamCard.css";

type Status = "complete" | "in-progress" | "pending";

type Member = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: Status;
};

const members: Member[] = [
  {
    id: 1,
    name: "Steve Wuckert",
    email: "Steve63@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=1",
    status: "complete"
  },
  {
    id: 2,
    name: "Carlton Littel",
    email: "@Carlton.Littel",
    avatar: "https://i.pravatar.cc/40?img=2",
    status: "in-progress"
  },
  {
    id: 3,
    name: "Ricky Auer",
    email: "Ricky32@yahoo.com",
    avatar: "https://i.pravatar.cc/40?img=3",
    status: "pending"
  },
  {
    id: 4,
    name: "Terrence Marvin",
    email: "Terrence56@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=4",
    status: "complete"
  },
  {
    id: 5,
    name: "Kenneth Donnelly",
    email: "Kenneth.Donnelly52@yahoo.com",
    avatar: "https://i.pravatar.cc/40?img=5",
    status: "in-progress"
  }
];

const getStatusLabel = (status: Status) => {
  switch (status) {
    case "complete":
      return "Complete";
    case "in-progress":
      return "In progress";
    case "pending":
      return "Pending";
  }
};

const TeamCard = () => {
  return (
    <div className="team-card">
      <div className="header">
        <h3>Team Collaboration</h3>
        <button className="add-btn">+</button>
      </div>

      <div className="list">
        {members.map((member) => (
          <div key={member.id} className="member">
            <div className="info">
              <img src={member.avatar} alt={member.name} />
              <div>
                <p className="name">{member.name}</p>
                <span className="email">{member.email}</span>
              </div>
            </div>

            <span className={`status ${member.status}`}>
              {getStatusLabel(member.status)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
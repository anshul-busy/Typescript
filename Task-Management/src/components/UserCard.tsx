import ImageCard from "./ImageCard";
import "./styles/UserCard.css";

type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

type Props = {
  user: UserType;
};

const imageData = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: `/Assets/pic_${i + 1}.jpeg`,
  alt: `Image ${i + 1}`
}));

const UserCard = ({ user }: Props) => {
  const image = imageData[user.id % imageData.length].src;

  return (
    <div className="card">
      <ImageCard image={image} />

      <h3>{user.name}</h3>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
};

export default UserCard;
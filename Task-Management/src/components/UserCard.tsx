import { useState } from "react";
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
  id:i + 1,
  src: `/Assets/pic_${i + 1}.jpeg`,
  alt: `Image ${i + 1}`
}));

const UserCard = ({ user }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const image = imageData[user.id % imageData.length].src;
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (

  <div className="card">

  
  <div className={`card-container ${isFlipped ? 'flipped' : ''}`}>
      <div className="card-inner">
        

        <div className="card-front">
          <ImageCard image={image} />
          <h3>{user.name}</h3>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>

          {/* <div className="btn-p">
            <button className="btn" onClick={handleFlip}>
              View Assigned task
            </button>
          </div> */}
        </div>


        <div className="card-back">
          <h3>Assigned Tasks</h3>
          <p>Task 1: Complete UI Layout</p>
          <p>Task 2: Fix CSS bugs</p>
          
          <div className="btn-p" id="backbtn">
            <button className="btn back-btn" onClick={handleFlip}>
              Go Back
            </button>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
};

export default UserCard;
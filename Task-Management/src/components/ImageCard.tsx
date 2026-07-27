


import "./styles/ImageCard.css"

type Props = {
  image: string;
};

const ImageCard = ({ image }: Props) => {
  return (
    <div className="image-card">
      <img src={image} alt="card" />
    </div>
  );
};

export default ImageCard;
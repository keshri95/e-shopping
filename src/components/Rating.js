import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={style} onClick={() => onClick(i)}>
          {rating > i ? (<AiFillStar fontSize={"20px"} /> ):(<AiOutlineStar fontSize={"20px"} />)}
        </span>
      ))}
    </div>
  );
};

export default Rating;

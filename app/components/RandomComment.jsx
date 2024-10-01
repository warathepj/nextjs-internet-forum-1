// app/components/RandomComment.jsx

const RandomComment = () => {
  const randomNumber = Math.floor(Math.random() * 501); 

  return (
    <div>
      <p>{randomNumber}</p>
    </div>
  );
};

export default RandomComment;

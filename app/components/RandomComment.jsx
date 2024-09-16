// app/components/RandomComment.jsx

const RandomComment = () => {
  const randomNumber = Math.floor(Math.random() * 501); // Generates a random number between 0 and 500

  return (
    <div>
      <p>{randomNumber}</p>
    </div>
  );
};

export default RandomComment;

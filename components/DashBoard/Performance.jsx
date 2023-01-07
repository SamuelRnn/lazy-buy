const Performance = ({ isActive }) => {
  return (
    <div>
      {isActive.performance ? (
        <div>
          <h1>Performance</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Performance;

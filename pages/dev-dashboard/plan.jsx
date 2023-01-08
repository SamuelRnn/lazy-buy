const Plan = ({ isActive, company }) => {
  return (
    <div>
      {isActive.plan ? (
        <div>
          <h1 className="font-bold">{company.plan}</h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Plan;

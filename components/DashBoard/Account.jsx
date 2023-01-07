const Account = ({ isActive, company }) => {
  return (
    <div>
      {isActive.account ? (
        <div>
          <h1>Account</h1>
          <div className="mt-10">
            <h2>{company.owner}</h2>
            <p>{company.country}</p>
            <picture>
              <img src={company.profilePicture.url} alt={company.name} />
            </picture>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Account;

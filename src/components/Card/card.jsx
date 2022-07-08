import "./card.css"
export const Card = function ({ user }) {
  console.log(user);
  return (
    <div className="card-container">
      
      <div className="flex border">
        <div className="image">
          <img src={user.image} alt="" />
        </div>
        <div>
          <h3>{user.name}</h3>
          <div>
            <div className={user.status == "Alive" ? "live" : "unknown"}> </div>
             { user.status}-{user.species}
          </div>
        </div>
      </div>
      <div>
        <div className="flex gen">
          <div className="gre " >
            <div className="grey">Gender</div>
            <div>{user.gender}</div>
          </div>
          <div className="gre">
            <div className="grey">Location</div>
            <div>{user.location.name}</div>
          </div>
        </div>
        <div className="flex">
          <div className="gre">
            <div className="grey">Species</div>
            <div>{user.species}</div>
          </div>
          <div className="gre">
            <div className="grey">Origin</div>
            <div>{user.origin.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

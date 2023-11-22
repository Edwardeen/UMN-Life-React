import CreditsCard from "../components/CreditsCard";
import credits from "../credits";
import "../css/credits.css";

const Credits = () => {
  return (
    <div className="container border border-2 my-5 py-3 w-50 containerBox">
      <div className="creditsTitle text-center">
        <h1>Credits</h1>
      </div>
      <div className="row row-cols-auto justify-content-center">
        {credits.map((creditsResult) => (
          <div className="col">
            <CreditsCard
              name={creditsResult.name}
              nim={creditsResult.nim}
              img={creditsResult.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credits;

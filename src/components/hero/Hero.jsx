import bannerImage from "../../assets/banner-main.png";
import bgImage from "../../assets/bg-shadow.png";

const Hero = () => {
  return (
    <div>
      <div className="text-center bg-amber-200 w-9/12 mx-auto rounded-4xl py-10 space-y-4"   style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
        <div className="flex justify-center">
          <img src={bannerImage} alt="" />
        </div>
        <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p>Beyond Boundaries Beyond Limits</p>
        <button className="btn">Claim Free Credit</button>
      </div>
    </div>
  );
};

export default Hero;

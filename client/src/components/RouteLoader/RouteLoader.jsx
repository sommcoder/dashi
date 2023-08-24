import "./RouteLoader.css";
import SquigglyLine from "../../assets/Squiggly Line (1).svg";

export default function RouteLoader() {
  return (
    <div className="route-loader-container">
      <img className="route-loader-squiggle" src={SquigglyLine} />
    </div>
  );
}

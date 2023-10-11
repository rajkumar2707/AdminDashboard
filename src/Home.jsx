import "./Home.css";
import { BiSolidShip, BiBorderBottom } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

function Home() {
  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <BiSolidShip className="card-icon" />
          <span className="card-title">Total shipments</span>
          <span className="card-answer">500</span>
        </div>
        <div className="card">
          <BiBorderBottom className="card-icon" />
          <span className="card-title">Pending orders</span>
          <span className="card-answer">15</span>
        </div>
        <div className="card">
          <MdPayment className="card-icon" />
          <span className="card-title">Revenue</span>
          <span className="card-answer">$50,000</span>
        </div>
      </div>

      <div className="table-container"></div>
    </main>
  );
}

export default Home;

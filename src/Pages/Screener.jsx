

import AccountSection from '../Components/AccountSection';
import GiftPortfolio from '../Components/GiftPortfolio';
import GivenSection from '../Components/GivenSection';
import Givers from '../Components/Givers';
import Holdings from '../Components/Holdings';
import InvestmentScreening from '../Components/InvestmentsScreening';
import Navbar from '../Components/Navbar';
import PortfolioChart from '../Components/PortfolioChart';
import Section1 from '../Components/Section1';
import YourBusinesses from '../Components/YourBusinesses';
import YourTreasures from '../Components/YourTreasures';


function Screener() {
  return (
    <div className="Screener">
      {/* Navbar */}
      <header>
       <Navbar/>
      </header>
      
      {/* Main content */}
      <main className="Screener-content mt-10 pt-20">
      <InvestmentScreening/>
        
        {/* Information sections */}
        <section className="Screener-section">
         
        </section>

        <section className="Screener-section">
         
        </section>

        <section className="Screener-section">
          
        </section>

        <section className="Screener-section">
          
        </section>

        <section className="Screener-section">
         
        </section>

        <section className="Screener-section">
          
        </section>
      </main>
    </div>
  );
}

export default Screener;



import AccountSection from '../Components/AccountSection';
import GiftPortfolio from '../Components/GiftPortfolio';
import GivenSection from '../Components/GivenSection';
import Givers from '../Components/Givers';
import Holdings from '../Components/Holdings';
import Navbar from '../Components/Navbar';
import PortfolioChart from '../Components/PortfolioChart';
import Section1 from '../Components/Section1';
import YourBusinesses from '../Components/YourBusinesses';
import YourTreasures from '../Components/YourTreasures';


function GiversPortfolio() {
  return (
    <div className="GiversPortfolio">
      {/* Navbar */}
      <header>
       <Navbar/>
      </header>
      
      {/* Main content */}
      <main className="GiversPortfolio-content mt-10 pt-20">

        
        {/* Information sections */}
        <section className="GiversPortfolio-section">
          <GiftPortfolio/>
        </section>

        <section className="GiversPortfolio-section">
         <YourTreasures/>
        </section>

        <section className="GiversPortfolio-section">
          
        </section>

        <section className="GiversPortfolio-section">
          
        </section>

        <section className="GiversPortfolio-section">
         
        </section>

        <section className="GiversPortfolio-section">
          
        </section>
      </main>
    </div>
  );
}

export default GiversPortfolio;

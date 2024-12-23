import React from 'react';
import BuyImg from '../assets/feature1.jpg'; // Replace with actual image path
import EarnImg from '../assets/feature1.jpg'; // Replace with actual image path
import GiveImg from '../assets/feature1.jpg'; // Replace with actual image path
import CorePrinciples from '../Components/CorePrinciples';
import KnowAndGrowHoldings from '../Components/KnowAndGrowHoldings';
import BuildGenerationalWealth from '../Components/BuildGenerationalWealth';

const StepsToInvest = () => {
    return (
        <div className="w-full py-12 bg-[#191D32] text-white">
           
            <CorePrinciples/>
            <KnowAndGrowHoldings/>
            <BuildGenerationalWealth/>
        </div>
    );
};

export default StepsToInvest;

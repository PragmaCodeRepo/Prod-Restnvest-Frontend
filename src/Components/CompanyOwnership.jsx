import React, { useEffect, useState, useRef, useContext } from 'react';
import axios from 'axios';
import { FaChartLine, FaBalanceScale } from 'react-icons/fa';
import BaseURL from './ApiConfig/BaseURL';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { AuthContext } from '../Context/AuthContext'; // Import AuthContext

const CompanyOwnership = () => {
  const [data, setData] = useState({
    years: [],
    revenue: [],
    profit: [],
    assets: [],
    liabilities: [],
    equity: [],
    margins: { gross: 0, net: 0 },
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reportRef = useRef();

  // Fetch user data from AuthContext
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchOwnershipData = async () => {
      try {
        const response = await axios.get(`${BaseURL}/api/ownership-data`);
        setData(response.data || {});
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch ownership data.');
        setLoading(false);
      }
    };

    fetchOwnershipData();
  }, []);

  const downloadPDF = () => {
    const input = reportRef.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add username and title at the top of the PDF
      pdf.text(`Report for: ${user?.username || 'Guest'}`, 10, 10);
      pdf.text('Company Ownership Report', 10, 20);

      // Add the content below the title
      pdf.addImage(imgData, 'PNG', 0, 30, imgWidth, imgHeight);
      pdf.save(`${user?.username || 'Guest'}_Company_Ownership_Report.pdf`);
    });
  };

  if (loading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">{error}</div>;
  }

  return (
    <div className="container mx-auto px-2 py-8 " ref={reportRef}>
      <h1 className="text-3xl font-bold  mb-6 flex items-center">
        <FaChartLine className="mr-3" /> {user?.username || 'Guest'}'s Part of the Company
      </h1>

      {/* Income Statement Table */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-teal-500">
          <FaChartLine className="mr-3 text-purple-500" /> Income Statement
        </h2>
        <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-lg">
          <table className="w-full text-left table-auto text-sm border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#3892BB] text-white">
                <th className="px-4 py-2 border border-gray-300">Metric</th>
                {data.years.map((year, i) => (
                  <th key={i} className={`px-4 py-2 border border-gray-300 ${year === 2024 ? 'bg-blue-500 text-white' : ''}`}>{year}</th>
                ))}
                <th className="px-4 py-2 border border-gray-300">Margins</th>
              </tr>
            </thead>
            <tbody>
              {['Revenue', 'Profit'].map((metric, i) => (
                <tr key={i} className="border-b ">
                  <td className="px-4 py-2 font-semibold border border-gray-300">{metric}</td>
                  {(data[metric.toLowerCase()] || []).map((value, idx) => (
                    <td key={idx} className="px-4 py-2 border border-gray-300">{value}</td>
                  ))}
                  <td className="px-4 py-2 font-bold text-[#3892BB] border border-gray-300">
                    {data.margins[metric.toLowerCase()] || 'N/A'}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Balance Sheet Summary Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-teal-500">
          <FaBalanceScale className="mr-3 text-purple-500" /> Balance Sheet Summary
        </h2>
        <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-lg">
          <table className="w-full text-left table-auto text-sm border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#3892BB] text-white">
                <th className="px-4 py-2 border border-gray-300">Metric</th>
                {data.years.map((year, i) => (
                  <th key={i} className={`px-4 py-2 border border-gray-300 ${year === 2024 ? 'bg-blue-500 text-white' : ''}`}>{year}</th>
                ))}
                <th className="px-4 py-2 border border-gray-300">Total</th>
              </tr>
            </thead>
            <tbody>
              {['Assets', 'Liabilities', 'Equity'].map((metric, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-2 font-semibold border border-gray-300">{metric}</td>
                  {(data[metric.toLowerCase()] || []).map((value, idx) => (
                    <td key={idx} className="px-4 py-2 border border-gray-300">{value}</td>
                  ))}
                  <td className="px-4 py-2 font-bold border border-gray-300">—</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={downloadPDF} className="mt-6 px-6 py-2 bg-[#3892BB] text-white font-bold rounded hover:bg-teal-500">
        Download PDF
      </button>
    </div>
  );
};

export default CompanyOwnership;

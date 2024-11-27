const Dashboard = () => (
  <div className="p-6 grid grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Total Portfolio Value</h2>
      <p className="text-xl">$1,234,567</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Value at Risk (VaR)</h2>
      <p className="text-xl">$23,456</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Recent Trends</h2>
      <p className="text-xl">Stable</p>
    </div>
  </div>
);

export default Dashboard;

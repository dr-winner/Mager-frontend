const Sidebar = () => (
  <div className="w-60 bg-gray-100 p-4 h-screen">
    <ul>
      <li className="mb-4"><a href="/">Dashboard</a></li>
      <li className="mb-4"><a href="/analysis">Risk Analysis</a></li>
      <li className="mb-4"><a href="/portfolio">Portfolio</a></li>
      <li className="mb-4"><a href="/settings">Settings</a></li>
    </ul>
  </div>
);

export default Sidebar;

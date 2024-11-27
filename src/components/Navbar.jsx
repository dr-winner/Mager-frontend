const Navbar = () => (
  <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Market Risk Analysis Tool</h1>
    <nav>
      <ul className="flex gap-4">
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/analysis">Risk Analysis</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;

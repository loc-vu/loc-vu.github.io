import {PortfolioGrid} from "app/components/portfolio_grid";
import { Projects } from "app/components/projects";

export default function PortfolioPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">My Portfolio</h1>
      <PortfolioGrid />
    </div>
  );
}

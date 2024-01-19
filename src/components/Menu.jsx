import { pizzas } from "../data";
import Pizza from "./Pizza";

export default function Menu() {
  return (
    <div className="my-20">
      <div className="flex flex-col items-center gap-10">
        <h1 className="border-y-2 border-grey-2 py-2 text-2xl font-medium uppercase">
          our menu
        </h1>
        <p className="text-center">
          Authentic Italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <ul className="grid grid-cols-1 gap-16 tablet:grid-cols-2 tablet:gap-8">
          <Pizza pizzas={pizzas} />
        </ul>
      </div>
    </div>
  );
}

import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { Item } from "./item";
import type { CategoryItem } from "../data/categories";

interface ItemListProps {
  items: Array<CategoryItem>;
  title: string;
  image: string;
  categoryKey: string;
}

type Totals = Record<string, {count: number; stamped: boolean}>;

const isTotals = (value: any): value is Totals =>
  value !== null &&
  typeof value === "object" &&
  Object.keys(value).reduce(
    (previous: boolean, current: any) =>
      previous &&
      typeof current === "string" &&
      typeof value[current] === "object" &&
      typeof value[current].count === "number" &&
      typeof value[current].stamped === "boolean",
    true
  );

const getTotalsFromLocalStorage = (): Totals => {
  const totalsString = window.localStorage.getItem("totals") || "{}";
  try {
    const totals = JSON.parse(totalsString);
    if (isTotals(totals)) {
      return totals;
    }
    console.warn(
      `Couldn't use value in local storage for totals: ${totalsString}`
    );
    return {};
  } catch (error) {
    console.error(
      `Couldn't use value in local storage for totals: ${totalsString}`
    );
    console.error(error);
    return {};
  }
};

export const ItemList: FunctionComponent<ItemListProps> = ({
  items,
  title,
  image,
  categoryKey,
}) => {
  const [totals, setTotals] = useState<Totals>(getTotalsFromLocalStorage());
  const [numberStamped, setNumberStamped] = useState<number>(0);

  const countCollected = useCallback(
    (currentTotals: Totals) => {
      setNumberStamped(
        items
          .map((i): boolean =>
            !!currentTotals[i.key]?.stamped
          )
          .reduce((a, b) => a + (b ? 1 : 0), 0)
      );
    },
    [items]
  );

  useEffect(() => {
    countCollected(totals);
  }, [countCollected, totals]);

  const onChange = useCallback(
    (key: string, change: number) => {
      const currentValue = totals[key]?.count || 0;
      let newValue = currentValue + change;
      if (newValue < 0) {
        newValue = 0;
      }
      const newTotals = { ...totals, [key]: {count: newValue, stamped: totals[key]?.stamped || false} };

      window.localStorage.setItem("totals", JSON.stringify(newTotals));
      countCollected(newTotals);
      setTotals(newTotals);
    },
    [totals, countCollected]
  );

  const onStampToggle = useCallback(
    (key: string) => {
      const currentValue = totals[key]?.count || 0;
      let newValue = currentValue + (totals[key]?.stamped ? 1 : -1);
      if (newValue < 0) {
        newValue = 0;
      }
      const newTotals = { ...totals, [key]: {count: newValue, stamped: !totals[key]?.stamped} };

      window.localStorage.setItem("totals", JSON.stringify(newTotals));
      countCollected(newTotals);
      setTotals(newTotals);
    },
    [totals, countCollected]
  );

  const unStampAll = useCallback(() => {
    const newTotals: Totals = {};
    items.forEach((i) => {
      newTotals[i.key] = {...totals[i.key], stamped: false};
    });
    window.localStorage.setItem("totals", JSON.stringify(newTotals));
    countCollected(newTotals);
    setTotals(newTotals);
  }, [totals, items, countCollected]);

  return (
    <div className="category">
      <button
        disabled={numberStamped < items.length}
        onClick={unStampAll}
        type="button"
      >
        <img src={image} alt={title} />
      </button>
      <label htmlFor={`category-${categoryKey}`}>
        <h1>
          {title} ({numberStamped}/{items.length})
        </h1>
      </label>
      <input
        className="category-selected-input"
        type="checkbox"
        id={`category-${categoryKey}`}
      />
      <div className="category-items">
        {items.map((i) => (
          <Item
            key={i.key}
            title={i.title}
            count={totals[i.key]?.count || 0}
            stamped={totals[i.key]?.stamped || false}
            onIncrease={() => {
              onChange(i.key, 1);
            }}
            onDecrease={() => {
              onChange(i.key, -1);
            }}
            onStampToggle={() => {
              onStampToggle(i.key);
            }}
          />
        ))}
      </div>
    </div>
  );
};

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

type Totals = Record<string, number>;

const isTotals = (value: any): value is Totals =>
  value !== null &&
  typeof value === "object" &&
  Object.keys(value).reduce(
    (previous: boolean, current: string) =>
      previous &&
      typeof current === "string" &&
      typeof value[current] === "number",
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

  const checkCanDecreaseAll = useCallback(
    (currentTotals: Totals) => {
      let canNowDecreaseAll = true;
      items.forEach((i) => {
        if (!currentTotals[i.key] || currentTotals[i.key] < 1) {
          canNowDecreaseAll = false;
        }
      });

      setCanDecreaseAll(canNowDecreaseAll);
    },
    [items]
  );

  const [canDecreaseAll, setCanDecreaseAll] = useState<boolean>(false);
  useEffect(() => {
    checkCanDecreaseAll(totals);
  }, [checkCanDecreaseAll, totals]);

  const onChange = useCallback(
    (key: string, change: number) => {
      const currentValue = totals[key] || 0;
      let newValue = currentValue + change;
      if (newValue < 0) {
        newValue = 0;
      }
      const newTotals = { ...totals, [key]: newValue };

      window.localStorage.setItem("totals", JSON.stringify(newTotals));
      checkCanDecreaseAll(newTotals);
      setTotals(newTotals);
    },
    [totals, checkCanDecreaseAll]
  );

  const decreaseAll = useCallback(() => {
    const newTotals: Totals = {};
    items.forEach((i) => {
      newTotals[i.key] = (totals[i.key] || 0) - 1;
    });
    window.localStorage.setItem("totals", JSON.stringify(newTotals));
    checkCanDecreaseAll(newTotals);
    setTotals(newTotals);
  }, [totals, items, checkCanDecreaseAll]);

  return (
    <div className="category">
      <button disabled={!canDecreaseAll} onClick={decreaseAll} type="button">
        <img src={image} alt={title} />
      </button>
      <label htmlFor={`category-${categoryKey}`}>
        <h1>{title}</h1>
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
            count={totals[i.key] || 0}
            onIncrease={() => {
              onChange(i.key, 1);
            }}
            onDecrease={() => {
              onChange(i.key, -1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

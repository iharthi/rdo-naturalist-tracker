import React, { FunctionComponent } from "react";
import classNames from "classnames";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

interface ItemProps {
  title: string;
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Item: FunctionComponent<ItemProps> = ({
  title,
  count,
  onIncrease,
  onDecrease,
}) => (
  <div className={classNames("item", { "non-zero": count > 0 })}>
    <div className="title">{title}</div>
    <div className="count">{count}</div>
    <button className="plus" onClick={onIncrease} type="button">
      <img src={plus} alt="Increase" className="plus-icon" />
    </button>
    <button className="minus" onClick={onDecrease} type="button">
      <img src={minus} alt="Increase" className="minus-icon" />
    </button>
  </div>
);

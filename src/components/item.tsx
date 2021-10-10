import React, { FunctionComponent } from "react";
import classNames from "classnames";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import stamp from "../assets/stamp.svg";
import noStamp from "../assets/noStamp.svg";

interface ItemProps {
  title: string;
  count: number;
  stamped: boolean;
  onIncrease: () => void;
  onDecrease: () => void;
  onStampToggle: () => void;
}

export const Item: FunctionComponent<ItemProps> = ({
  title,
  count,
  stamped,
  onIncrease,
  onDecrease,
  onStampToggle,
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
    <button className="stamp" onClick={onStampToggle} type="button">
      <img
        src={stamped ? stamp : noStamp}
        alt={stamped ? 'Stamped' : 'Not stamped'}
        className="stamp-icon"
      />
    </button>
  </div>
);

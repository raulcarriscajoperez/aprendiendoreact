import { useState } from "react";
// import './itemCounter.css'
import styles from './itemCounter.module.css'

interface Props {
  productName: string;
  quantity?: number;
  // quantity: number | undefined;
}

export const ItemCounter = ({ productName, quantity = 0 }: Props) => {
    const [counter, setCounter] = useState(quantity);

  const handleSubtract = () => {
    if(counter <1) return 0
    setCounter(counter - 1);
  };
    const handleAdd = () => {
    setCounter(counter + 1);
  };
  // export const ItemCounter = (props: Props) => {
  return (
    <section
    className={styles.itemRow}
    // className="item-row"
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     gap: 10,
    //     marginTop: 10,
    //   }}
    >
      <span
      className={styles['item-text']}
      // className = 'item-text' 
      style={{color: counter === 0 ? 'red' : 'black' }}
        // style={{
        //   width: 150,
        // }}
      >
        {productName}
        {/* {props.productName} */}
      </span>
      <button
        onClick={handleSubtract}
      >
        -
      </button>
      <span>{counter}</span>
      <button onClick={handleAdd}>+</button>
    </section>
  );
};

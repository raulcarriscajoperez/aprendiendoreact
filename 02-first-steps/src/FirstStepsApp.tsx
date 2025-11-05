import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart{
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    {
        productName: "Nintendo Switch 2",
        quantity: 8
    },
    {
        productName: "Pro Controller",
        quantity: 0
    },
    {
        productName: "Super Smash",
        quantity: 5
    },
        {
        productName: "Zelda Breath of the Wild",
        quantity: 2
    }
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de Compras</h1>
        {
            itemsInCart.map( ({productName, quantity }) => (
                <ItemCounter key={productName} productName={productName} quantity={quantity}/>
            ))
        }
      {/* <ItemCounter productName="Nintendo Switch 2" quantity={10} />
      <ItemCounter productName="Pro Controller" quantity={0}/>
      <ItemCounter productName="Super Smash" quantity={5}/> */}

    </>
  );
}

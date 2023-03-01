import React, { useEffect } from "react";
import { AppContainer, OrderItemsArea } from "./styles";
import { OrderItem, Props as OrderItemProps } from "../OrderItem/index";

const MockedOrderItems: OrderItemProps[] = [
  {
    color: "Жовтий",
    price: 1400,
  },
  {
    color: "Фіолетовий",
    price: 1333,
  },
  {
    color: "Помаранчевий",
    price: 1200,
  },
  {
    color: "Зелений",
    price: 1000,
  },
  {
    color: "Фіолетовий",
    price: 1400,
  },
  {
    color: "Пурпурний",
    price: 1400,
  },
  {
    color: "Синій",
    price: 1400,
  },
  {
    color: "Морський",
    price: 1400,
  },
];

function App() {
  useEffect(() => {
    //@ts-ignore
    console.log(window.Telegram.WebApp.platform);
  }, []);

  return (
    <AppContainer>
      <OrderItemsArea>
        {MockedOrderItems.map((item) => (
          <OrderItem color={item.color} price={item.price} />
        ))}
      </OrderItemsArea>
    </AppContainer>
  );
}

export default App;

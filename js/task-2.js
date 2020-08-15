const invoice = 200;
const stock = 100;

const message =
  invoice <= stock
    ? "Заказ оформлен, с вами свяжется менеджер"
    : "На складе недостаточно товаров!";
console.log(message);

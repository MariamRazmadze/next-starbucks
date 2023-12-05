import { formatCurrency } from "../../utils/helpers";
import Card from "@/app/UI/Card";
import UpdateQuantity from "./UpdateQuantity";
import {
  CardContentWrapper,
  CardImage,
  Info,
  Starz,
} from "@/styles/cart/StyledCartItem";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const { coffeeId, size, name, image, stars, quantity, totalPrice } = item;

  return (
    <Card>
      <CardContentWrapper>
        <CardImage src={image} alt={name} />
        <Info>
          <h1>
            {quantity}&times;{name}
          </h1>
          <h3>{size}</h3>
          <Starz>
            <span>{stars}</span>
            <span>★</span>
            <span style={{ marginLeft: "5px" }}>item</span>
          </Starz>
          <div>
            <h3>{formatCurrency(totalPrice)}</h3>
          </div>
          <UpdateQuantity coffeeId={coffeeId} />
        </Info>
      </CardContentWrapper>
    </Card>
  );
}

export default CartItem;

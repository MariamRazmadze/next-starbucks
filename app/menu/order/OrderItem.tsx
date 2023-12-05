import { formatCurrency } from "../../utils/helpers";
import Card from "@/app/UI/Card";
import { CardP, CardTotal } from "@/styles/order/StyledOrder";

function OrderItem({ item }: { item: OrderItem }) {
  const { quantity, name, total_price, size } = item;

  return (
    <Card>
      <div>
        <CardP>
          <span>{quantity}&times;</span> {name}
        </CardP>
        <CardP>
          <span>Size: {size}</span>
        </CardP>
        <CardTotal>{formatCurrency(total_price)}</CardTotal>
      </div>
    </Card>
  );
}

export default OrderItem;

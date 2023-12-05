import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdOutlineModeEdit } from "react-icons/md";
import { useCart } from "@/app/context/useCart";
import { EditContainer, EditButton } from "@/styles/cart/StyledUpdateQuantity";
interface EditProps {
  coffeeId: number;
}

export default function UpdateQuantity({ coffeeId }: EditProps) {
  const { dispatch } = useCart();
  return (
    <EditContainer>
      <EditButton>
        <MdOutlineModeEdit />
      </EditButton>
      <EditButton
        onClick={() =>
          dispatch({ type: "decreaseQuantity", payload: coffeeId })
        }
      >
        <CiCircleMinus />
      </EditButton>
      <EditButton
        onClick={() =>
          dispatch({ type: "increaseQuantity", payload: coffeeId })
        }
      >
        <CiCirclePlus />
      </EditButton>
    </EditContainer>
  );
}

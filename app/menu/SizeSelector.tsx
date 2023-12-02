import {
  SizeSelectorContainer,
  SizeOptions,
  RadioButton,
  SizeImage,
  SizeInOz,
  SizeName,
  Label,
  Form,
} from "@/styles/StyledSizeSelector";

export default function SizeSelector({
  selectedSize,
  setSelectedSize,
}: SizeSelectorProps) {
  const sizes = [
    {
      id: "Short",
      oz: 8,
      image: "/sizes/short.svg",
      activeImage: "/sizes/short-active.svg",
    },
    {
      id: "Tall",
      oz: 12,
      image: "/sizes/tall.svg",
      activeImage: "/sizes/tall-active.svg",
    },
    {
      id: "Grande",
      oz: 16,
      image: "/sizes/grande.svg",
      activeImage: "/sizes/grande-active.svg",
    },
    {
      id: "Venti",
      oz: 20,
      image: "/sizes/venti.svg",
      activeImage: "/sizes/venti-active.svg",
    },
  ];

  return (
    <SizeSelectorContainer>
      <SizeOptions>Size Options</SizeOptions>
      <Form>
        {sizes.map((size) => (
          <Label key={size.id}>
            <RadioButton
              name="size"
              value={size.id}
              checked={selectedSize === size.id}
              style={{
                backgroundImage: `url(${
                  selectedSize === size.id ? size.activeImage : size.image
                })`,
              }}
              onChange={() => setSelectedSize(size.id)}
            />
            <SizeImage />
            <SizeName>{size.id}</SizeName>
            <SizeInOz>{size.oz} fl oz</SizeInOz>
          </Label>
        ))}
      </Form>
    </SizeSelectorContainer>
  );
}

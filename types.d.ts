interface CoffeeItem {
  id: number;
  name: string;
  photoName: string;
  type: string;
  unavailable: boolean;
  calories: string;
  fat: string;
  sugar: string;
  description: string;

  detailedPhotoName: string;
  stars: string;
  prices: {
    [size: string]: number;
    short: number;
    tall: number;
    grande: number;
    venti: number;
  };
}

type CoffeeCategory = {
  [category: string]: {
    items: CoffeeItem[];
  };
};
type CoffeeData = {
  [category: string]: {
    items: CoffeeItem[];
    photoName: string;
    link: string;
    name: string;
  };
};

type Coffees = {
  items: CoffeeItem[];
  photoName: string;
  link: string;
  name: string;
};

interface GroupedCoffees {
  [key: string]: CoffeeItem[];
}

type MenuProps = {
  coffees: {
    name: string;
    photoName: string;
    link: string;
    items: CoffeeItem[];
  }[];
};

type CoffeeType = {
  [key: string]: any;
  name: string;
  photoName: string;
  link: string;
  items: CoffeeItem[];
};
interface BoxItem {
  id: string;
  title: string;
  promo: string;
  photoName: string;
  buttonText: string;
  backgroundColor: string;
  buttonColor: string;
  buttonHoverColor: string;
}
interface BoxItemProps {
  item: BoxItem;
  isReversed?: boolean;
}

interface Link {
  id: string;
  text: string;
  link: string;
}

interface AccordionData {
  id: string;
  title: string;
  content: Link[];
}

interface AccordionProps {
  data: AccordionData[];
}

interface ContentItem {
  id: string;
  number: number;
  photoName: string;
  title: string;
  promo: string;
}

interface RewardStepsProps {
  content: ContentItem[];
}

interface TabProps {
  num: number;
  activeTab: number;
  onClick: (num: number) => void;
  item: ContentItem;
}

interface TabContentProps {
  item: ContentItem;
}

type SizeSelectorProps = {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
};

import MAIN_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_MAIN.png";
import SEARCH_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_SEARCH.png";
import ITEM_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_ITEM.png";
import ITEM2_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_ITEM2.png";
import CART_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_CART.png";
import CART2_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_CART2.png";
import CATEGORY_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_CATEGORY.png";
import CATEGORY_LIGHT_PAGE from "../assets/image/project_screen/react_shop/REACT_SHOP_CATEGORY_LIGHT.png";
import MOBILE_MAIN from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_MAIN.png";
import MOBILE_ITEM from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_ITEM.png";
import MOBILE_ITEM2 from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_ITEM2.png";
import MOBILE_ITEM3 from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_ITEM3.png";
import MOBILE_CART from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_CART.png";
import MOBILE_CART2 from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_CART2.png";
import MOBILE_SIDEMENU from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_SIDEMENU.png";
import MOBILE_CATEGORY from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_CATEGORY.png";
import MOBILE_CATEGORY_DARK from "../assets/image/project_screen/react_shop/REACT_SHOP_MOBILE_CATEGORY_DARK.png";
import { useAtomValue } from "jotai";
import { tutorialAtom } from "../store/project";

const ReactShopSlide = ({ isMobile }: { isMobile: boolean }): JSX.Element => {
  const tutorialIdx = useAtomValue(tutorialAtom);

  const slides = isMobile
    ? [
        MOBILE_MAIN,
        MOBILE_ITEM,
        MOBILE_ITEM2,
        MOBILE_ITEM3,
        MOBILE_CART,
        MOBILE_CART2,
        MOBILE_SIDEMENU,
        MOBILE_CATEGORY,
        MOBILE_CATEGORY_DARK,
      ]
    : [MAIN_PAGE, SEARCH_PAGE, ITEM_PAGE, ITEM2_PAGE, CART_PAGE, CART2_PAGE, CATEGORY_PAGE, CATEGORY_LIGHT_PAGE];

  return (
    <>
      <ol className="size-full overflow-hidden">
        {slides.map((imgSrc, idx) => {
          let slideClass = "";
          if (idx === tutorialIdx) slideClass = "z-10";

          if (!isMobile) {
            return (
              <li key={`reactShop_${idx}`} id={`reactShop_${idx}`} className={`size-full absolute ${slideClass}`}>
                <img src={imgSrc} className={`w-full h-[calc(40vw-3.25rem)]`}></img>
              </li>
            );
          } else {
            return (
              <li
                key={`reactShop_${idx}`}
                id={`reactShop_${idx}`}
                className={`w-full h-[calc(153vw-1.75rem)] absolute ${slideClass}`}
              >
                <img src={imgSrc} className={`w-[calc(100%-1.2rem)] h-full rounded-[2.5rem]`}></img>
              </li>
            );
          }
        })}
      </ol>
    </>
  );
};

export default ReactShopSlide;

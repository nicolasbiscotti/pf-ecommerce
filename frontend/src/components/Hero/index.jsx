import ContainerCarousel from "./ContainerCarousel/index";
import ContainerGrid from "./ContainerGrid/index";
import { StyledHero } from "./styled";





const data = {
  carousel: [
    {
      id: "1",
      name: "Canyon Star Raider",
      tca: "Gaming Headset Brilliant Lighting Effect",
      imgsrc: "https://rubiktheme.com/demo/emarket_demo/modules/zoneslideshow/views/img/slideImages/1631416034.jpg"
    },
    {
      id: "2",
      name: "Galaxy Buds Plus",
      tca: "Sport Edition Red Special Edition",
      imgsrc: "https://rubiktheme.com/demo/emarket_demo/modules/zoneslideshow/views/img/slideImages/1631416290.jpg"
    },
    {
      id: "3",
      name: "Phone Galaxy S20",
      tca: "Sport Edition Best Choice Of Your",
      imgsrc: "https://rubiktheme.com/demo/emarket_demo/modules/zoneslideshow/views/img/slideImages/1631416329.jpg"
    }
  ],
  grid: [
    {
      id: "1",
      name: "Canyon Star Raider",
      imgsrc: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/market_banner1.jpg?v=1631867823"
    },
    {
      id: "2",
      name: "Galaxy Buds Plus",
      imgsrc: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/market_banner3.jpg?v=1631867823"
    },
    {
      id: "3",
      name: "Phone Galaxy S20",
      imgsrc: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/market_banner2.jpg?v=1631867823"
    },
    {
      id: "4",
      name: "Chair Swoon Lounge",
      imgsrc: "https://cdn.shopify.com/s/files/1/0603/7232/0427/files/market_banner4.jpg?v=1631867823"
    }
  ]
}

export default function Hero() {
  return (
    <StyledHero>
      <ContainerCarousel data={data.carousel}/>
      <ContainerGrid data={data.grid}/>
    </StyledHero>
  )
}


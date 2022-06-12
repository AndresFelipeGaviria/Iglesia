import React from 'react'
import Carousel from 'better-react-carousel'
import Logo from "../../images/Logo-Iglesia.jpg"
import Fondo1 from "../../images/fondo1.jpg"
import Fondo2 from "../../images/fondo2.jpg"
import Fondo3 from "../../images/ana1.jpeg"
import Fondo4 from "../../images/fondo4.jpg"
import Fondo11 from "../../images/ana2.jpeg"
import Fondo5 from "../../images/ana3.jpeg"
import Fondo6 from "../../images/ana4.jpeg"
import Fondo7 from "../../images/chuchi1.jpeg"
import Fondo8 from "../../images/chuchi2.jpeg"
import Fondo9 from "../../images/luisa1.jpeg"
import Fondo10 from "../../images/mariana1.jpeg"
import Fondo12 from "../../images/sara.jpeg"






const Index = () => {
    const directs = [
        {link: Fondo1},{link: Fondo3},
        {link: Fondo2},{link: Fondo4},
        {link: Fondo5},{link: Fondo6},
        {link: Fondo7},{link: Fondo8},
        {link: Fondo9},{link: Fondo10},
        {link: Fondo11},{link: Fondo12},
    ]

    
  return (
    <Carousel cols={2} rows={1} gap={1} loop  showDots autoplay={3000} mobileBreakpoint={767}>
        {directs.map((x)=> (
            <Carousel.Item>
                <img width="100%" src={x?.link} alt=""/>
            </Carousel.Item>
        ))}
      
    </Carousel>
  )
}

export default Index
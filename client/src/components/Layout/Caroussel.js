import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel,onChange,onClickItem,onClickThumb } from 'react-responsive-carousel';


  class Caroussel extends Component {
    render() {
    return (

<div>




<Carousel className='carousel--container' showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2013/12/13/21/13/plumber-228010_960_720.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2016/12/04/23/22/flea-market-1882817_960_720.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/12/07/10/58/building-1080593_960_720.jpg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
</div>
    )
}}
export default Caroussel;

import React from 'react';
import MobileHeader from './mobileHeader';
import MobileFooter from './mobileFooter';
import {
  Tabs,
  Carousel,
} from 'antd';
const TabPane = Tabs.TabPane;
import MobileList from './mobileList';

class MobileIndex extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true,
        };
        return (
            <div className="mobileDetailContainer">
                <MobileHeader />
                <Tabs>
                    <TabPane tab="春天" key="1">
                       <div class="carousel topNewsLists">
                           <Carousel {...settings}>
                               <div><img src="./src/images/carousel_1.jpg"/></div>
                               <div><img src="./src/images/carousel_2.jpg"/></div>
                               <div><img src="./src/images/carousel_3.jpg"/></div>
                               <div><img src="./src/images/carousel_4.jpg"/></div>
                           </Carousel>
                       </div>
                       <MobileList count={20} type="top"/>
                    </TabPane>
                    <TabPane tab="夏天" key="2">
                        <MobileList count={20} type="shehui"/>
                    </TabPane>
                    <TabPane tab="秋天" key="3">
                        <MobileList count={20} type="guoji"/>
                    </TabPane>
                    <TabPane tab="冬天" key="4">
                        <MobileList count={20} type="guonei"/>
                    </TabPane>
                    <TabPane tab="一年四季" key="5">
                        <MobileList count={20} type="yule"/>
                    </TabPane>
                </Tabs>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}

export default MobileIndex;
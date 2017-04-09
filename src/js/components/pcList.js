import React from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PcNews from './pcNews';
import PcImage from './pcImage';
import PCProduct from './pcProduct';
class PcList extends React.Component {
    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };

        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="lContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg"/></div>
                                    <div><img src="./src/images/carousel_2.jpg"/></div>
                                    <div><img src="./src/images/carousel_3.jpg"/></div>
                                    <div><img src="./src/images/carousel_4.jpg"/></div>
                                </Carousel>
                            </div>
                            <PcImage count={3} type="guoji" width="404px" cartTitle="国际头条" imageWidth="114px" />

                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <PcNews count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PcNews count={22} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <Tabs class="tabs_product">
                            <TabPane tab="ReactNews 产品" key="1">
                                <PCProduct/>
                            </TabPane>
                        </Tabs>
                        <PcImage count={8} type="guonei" width="100%" cartTitle="娱乐头条" imageWidth="190px" />
                        <PcImage count={20} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="190px" />
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}
export default PcList;

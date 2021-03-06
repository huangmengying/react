/**
 * Created by huangmengying on 2017/3/11.
 */
import React from 'react';
import { Row, Col } from "antd";

class MobileFooter extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>&copy; &nbsp;2017 ReactNews，上海市浦东新区世纪大道123号</Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        )
    }
}

export default MobileFooter;
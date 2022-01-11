import { Form, InputNumber, Input, Row, Col } from "antd";
const ArticleSearchForm = props => {
    return <>
        <Row>
            <Col span={8}>
                <Form.Item name={['name']} label="姓名">
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item name={['email']} label="邮箱" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item name={['age']} label="年龄" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber style={{width: '100%'}} />
                </Form.Item>
            </Col>
        </Row>
    </>
}

export default ArticleSearchForm
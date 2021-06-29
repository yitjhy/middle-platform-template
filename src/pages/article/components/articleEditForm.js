import { Col, Form, Input, InputNumber, Row } from "antd";
const ArticleFormItem = props => {
    return <>
        <Row>
            <Col span={12}>
                <Form.Item name={['name']} label="姓名" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name={['email']} label="邮箱" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name={['age']} label="年龄" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber style={{width: '100%'}} />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name={['address']} label="地址">
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name={['website']} label="网站">
                    <Input />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name={['introduction']} label="自我介绍">
                    <Input.TextArea />
                </Form.Item>
            </Col>
        </Row>
    </>
}

export default ArticleFormItem
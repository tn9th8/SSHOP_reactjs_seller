import { Button, Card, Form, Grid, Input, Select, Typography } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";
import { Link } from "react-router";

const { Option } = Select;
const { Title, Text } = Typography;
const { Row, Col } = Grid;

const SignUpForm = () => {
    const onFinish = (values: any) => {
        console.log("Form Values:", values);
    };

    return (
        <Card style={{ width: "100%", padding: "2rem", borderRadius: 8, minWidth: '480px !important', minHeight: 525 }}>
            <Title style={{ textAlign: "center", marginBottom: "1rem", margin: '0px 0px 0px 0px' }}>Sign up</Title>
            <Text type="secondary" style={{ fontSize: "14px", marginBottom: "1rem", display: "block" }}>
                Have a TikTok Shop or TikTok For Business account? <Link to="/access/login">Log in</Link>
            </Text>
            <Form
                name="signup"
                layout="vertical"
                onSubmit={onFinish}
                style={{ marginTop: "1rem" }}
            >
                {/* Phone Number */}
                <Form.Item
                    field="phone"
                    label="Mobile Phone Number"
                    rules={[{ required: true, message: "Please enter your phone number!" }]}
                >
                    <Input
                        addBefore={
                            <Select defaultValue="VN +84" style={{ width: 100 }}>
                                <Option value="VN +84">VN +84</Option>
                                <Option value="US +1">US +1</Option>
                                <Option value="UK +44">UK +44</Option>
                            </Select>
                        }
                        placeholder="Please enter phone number"
                    />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    field="password"
                    label="Password"
                    rules={[{ required: true, message: "Please enter your password!" }]}
                >
                    <Input.Password placeholder="Enter a password" />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" long style={{ backgroundColor: "#FF4040", borderColor: "#FF4040" }}>
                        Sign up
                    </Button>
                </Form.Item>

                {/* Terms and Conditions */}
                <Text type="secondary" style={{ fontSize: "12px", display: "block", textAlign: "center" }}>
                    By continuing, you agree to the <Link to="/access/signup#">Merchant Terms of Service</Link>, <Link to="/access/signup#">TikTok Commercial Terms of Service</Link>, and acknowledge that you have read the <Link to="/access/signup#">TikTok Partner Privacy Policy</Link>.
                </Text>
            </Form>
        </Card>
    );
};

const App = () => {
    return (
        <div style={{
            width: '100%',
            minHeight: "calc(100vh - 60px)",
            backgroundImage: "url('/access/background.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div style={{ display: "flex", justifyContent: "center", height: 'auto', width: 1285, marginLeft: 'auto', marginRight: 'auto', position: 'relative' }} >
                {/* Left Section */}
                <div style={{ maxWidth: 635, marginRight: 64, top: 'unset', marginTop: 'auto', marginBottom: 'auto', position: 'relative' }}>
                    <span
                        style={{ color: "#fff", fontSize: "64px", fontFamily: 'TikTokMedium', lineHeight: '120%', fontWeight: '700' }}>
                        Grow your business with <span style={{ color: 'rgb(235, 37, 76)' }}>SShop Ecommerce</span> today!
                    </span>
                    <div
                        style={{ color: '#fff', fontSize: "18px", fontFamily: 'TikTokFont', lineHeight: '28px', fontWeight: '400', marginTop: "16px 24px 0px 0px" }}>
                        If you are a retailer, brand or business with products to sell, you can sell on TikTok without fans threshold. Selling with video and LIVE video can really help you boost your business with tons of traffic.
                    </div>
                </div>

                {/* Right Section */}
                <Col xs={24} md={12}>
                    <SignUpForm />
                </Col>
            </div>
        </div>
    );
};

export default App;
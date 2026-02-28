"use client";

import {
  Button,
  Card,
  Row,
  Image,
  Col,
  Typography,
  Form,
  message,
  Input,
} from "antd";
import styles from "@/src/app/styles/app.module.css";
import Link from "next/link";

const { Title } = Typography;

export default function HomePage() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Datos listos para enviar:", values);
    message.success("Formulario validado correctamente");
  };

  return (
    <Row className={styles.mainRow}>
      <Col span={12} className={styles.mainImage}>
        <Image
          preview={false}
          width="60%"
          alt="Hospital Logo"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </Col>

      <Col span={12} className={styles.mainCard}>
        <Card variant="borderless" className={styles.cardMain}>
          <Title level={3} className={styles.tituloPrincipal}>
            Bienvenido a PASIEMPRE
          </Title>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="email"
              label="Correo Electrónico"
              required={false}
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Ingresa un correo válido",
                },
              ]}
            >
              <Input placeholder="correo@ejemplo.com" />
            </Form.Item>

            <Form.Item
              name="password_hash"
              label="Contraseña"
              rules={[
                { required: true, min: 6, message: "Mínimo 6 caracteres" },
              ]}
              required={false}
            >
              <Input.Password />
            </Form.Item>
            <Row className={styles.rowBotonesRegistroMain}>
              <Link href="/registro">
                <Button className={styles.estiloBoton} type="primary">
                  Registro
                </Button>
              </Link>

              <Button
                className={styles.estiloBoton}
                color="cyan"
                variant="solid"
                htmlType="submit"
              >
                Login
              </Button>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

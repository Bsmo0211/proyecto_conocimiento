"use client";

import styles from "@/src/app/registro/registro.module.css";
import React, { useState } from "react";
import { Form, Input, Button, Card, Select, Typography, message } from "antd";

const { Title } = Typography;

export default function RegistroPage() {
  const [form] = Form.useForm();
  /*  
TODO: Eliminar de json del fomr el elemento que esta en la key de sexo y pasar este elemento
const [genero, setGenero] = useState(""); */

  const onFinish = (values: any) => {
    console.log("Datos listos para enviar:", values);
    message.success("Formulario validado correctamente");
  };

  const handleChange = (value: string) => {
    console.log(`Genero Seleccionado ${value}`);
  };

  return (
    <div className={styles.divPrincipalRegistro}>
      <Card className={styles.cardContainerRegistro}>
        <Title level={3} className={styles.tituloPrincipal}>
          Registro
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            name="primer_nombre"
            label="Primer Nombre"
            rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
          >
            <Input placeholder="Ej. Santiago" />
          </Form.Item>

          <Form.Item name="segundo_nombre" label="Segundo Nombre">
            <Input />
          </Form.Item>

          <Form.Item
            name="primer_apellido"
            label="Primer Apellido"
            rules={[
              { required: true, message: "Por favor ingresa tu apellido" },
            ]}
          >
            <Input placeholder="Ej. Pérez" />
          </Form.Item>

          <Form.Item name="segundo_apellido" label="Segundo Apellido">
            <Input />
          </Form.Item>

          <Form.Item
            name="cedula"
            label="Cédula"
            rules={[{ required: true, message: "Por favor ingresa tu cedula" }]}
          >
            <Input placeholder="Número de documento" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Correo Electrónico"
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
            name="sexo"
            label="Género"
            rules={[{ required: true, message: "Selecciona una opción" }]}
          >
            <Select
              placeholder="Selecciona tu sexo"
              options={[
                { value: "M", label: "Masculino" },
                { value: "F", label: "Femenino" },
                { value: "O", label: "Otro" },
              ]}
              onChange={handleChange}
            ></Select>
          </Form.Item>

          <Form.Item
            name="password_hash"
            label="Contraseña"
            rules={[{ required: true, min: 6, message: "Mínimo 6 caracteres" }]}
          >
            <Input.Password placeholder="Crea una contraseña segura" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Finalizar Registro
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

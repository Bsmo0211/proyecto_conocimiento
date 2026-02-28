"use client";

import styles from "@/src/app/registro/registro.module.css";
import React, { useState } from "react";
import { Form, Input, Button, Card, Select, Typography, message } from "antd";
import { useMutation } from "@apollo/client/react";
import { INSERT_PACIENTE } from "@/src/graphql/mutations";
import { useRouter } from "next/navigation";

const { Title } = Typography;

export default function RegistroPage() {
  const [form] = Form.useForm();
  const [crearPaciente, { loading, error }] = useMutation(INSERT_PACIENTE);

  const { push } = useRouter();

  const onFinish = async (values: any) => {
    const pacienteData = {
      ...values,
      rol: "paciente",
    };

    try {
      await crearPaciente({
        variables: {
          datos: {
            usuariosCreado: {
              ...pacienteData,
            },
          },
        },
      });
      message.success("Usuario registrado exitosamente");
      form.resetFields();
      push("/");
    } catch (err) {
      message.error("La peticion para el registro de paciente falló");
    }
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
            name="primerNombre"
            label="Primer Nombre"
            rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}
          >
            <Input placeholder="Ej. Santiago" />
          </Form.Item>

          <Form.Item name="segundoNombre" label="Segundo Nombre">
            <Input />
          </Form.Item>

          <Form.Item
            name="primerApellido"
            label="Primer Apellido"
            rules={[
              { required: true, message: "Por favor ingresa tu apellido" },
            ]}
          >
            <Input placeholder="Ej. Pérez" />
          </Form.Item>

          <Form.Item name="segundoApellido" label="Segundo Apellido">
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
            ></Select>
          </Form.Item>

          <Form.Item
            name="passwordHash"
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

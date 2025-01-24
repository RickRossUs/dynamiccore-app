import React from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

// Validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo es obligatorio"),
});

const Form = ({
  onAddItem,
}: {
  onAddItem: (item: { name: string; email: string }) => void;
}) => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddItem(values); // Agregar el nuevo elemento
        resetForm(); // Limpiar el formulario
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            value={values.name}
            placeholder="Nombre"
          />
          {errors.name && touched.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}

          <TextInput
            style={styles.input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            placeholder="Correo electrónico"
          />
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          {/* Solución: Envuelve handleSubmit en una arrow function */}
          <Button onPress={() => handleSubmit()} title="Agregar a la lista" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: "100%",
    margin: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Form;

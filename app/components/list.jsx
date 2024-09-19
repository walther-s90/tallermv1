import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet, 
  } from "react-native";

  export default function Lista() {
    // Estado para guardar el valor del campo de texto y la lista de tareas
    const [tarea, settarea] = useState(""); //almaceno el texto que se ingresa y settera para actualizar la tarea
    const [list, setlist] = useState([]); //almaceno la lista // setlist lo actualiza 
    const [idCounter, setIdCounter] = useState(0); // Contador para generar id

    const agregartarea = () => {
        if (!tarea) {
          Alert.alert("Error", "El campo no puede estar vacío");
          return;
        }
    
        // Incrementa el contador y agrega la nueva tarea
        setlist([list.concat, { id: idCounter, title: tarea }]);
        setIdCounter(idCounter + 1); // Incrementar el contador para el próximo ID
        settarea(""); // Limpio el campo de texto
      };

      const eliminarTarea = (id) => {
        setlist(list.filter(item => item.id !== id));
      };
 

      return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ingrese tarea"
                value={tarea}
                onChangeText={settarea}
            />
    
            <TouchableOpacity style={styles.button} onPress={agregartarea}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
    
            <FlatList
                data={list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text style={styles.taskText}>{item.title}</Text>
                        <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
                            <Text style={styles.deleteText}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

// Estilo
const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#6200ee',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    taskText: {
        fontSize: 16,
    },
    deleteText: {
        color: 'red',
        fontWeight: 'bold',
    },
});

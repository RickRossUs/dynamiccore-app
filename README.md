# React Native App - User Form & Map Location  

This is a React Native application built with Expo that consists of two main features:  
1. A **User Form** that allows adding users with email validation and displays them in a list.  
2. A **Map View** that shows the user's current location on the map.  

## Features  

- **Home Screen**:  
  - Navigation options to access the **User Form** or the **Map View**.  

- **User Form**:  
  - Add users with `name` and `email` fields.  
  - Form validation ensures proper data entry (e.g., valid email format).  
  - Users added via the form are displayed in a list below the form.  

- **Map View**:  
  - Displays the user's current location on a full-screen map.  
  - Requires location permissions from the user.  

## Installation  

To run this project locally, follow these steps:  

### Prerequisites  

- Ensure you have [Node.js](https://nodejs.org/) installed.  
- Install [Expo CLI](https://docs.expo.dev/get-started/installation/) globally:  
  ```bash
  npm install -g expo-cli
  ```  

### Steps  

1. Clone the repository:  
   ```bash
   git clone https://github.com/RickRossUs/dynamiccore-app.git
   cd dynamiccore-app
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Start the development server:  
   ```bash
   expo start
   ```  
    or
   ```bash
   npx expo start
   ```  

4. Open the app:  
   - Scan the QR code displayed in your terminal or browser using the **Expo Go** app (available on iOS and Android).  
   - Alternatively, press `a` to run on an Android emulator or `i` to run on an iOS simulator.  

## Usage  

### Home Screen  
- Choose between:  
  - **Form**: Navigate to the user form to add users and see the list.  
  - **Map**: View the map displaying your current location.  

### User Form  
- Enter a **name** and a **valid email address** in the form.  
- Submit the form to add the user to the list displayed below the form.  

### Map View  
- Grant location permissions to view your current position on the map.  

## Dependencies  

Key dependencies used in this project:  

- **React Navigation**: For managing navigation between screens.  
- **Formik & Yup**: For form handling and validation.  
- **Expo Location**: For accessing the user's current location.  
- **react-native-maps**: For rendering the map.  

Install missing dependencies using:  
```bash
expo install react-navigation formik yup expo-location react-native-maps
```  

## Contributing  

Contributions are welcome! Feel free to open issues or submit pull requests.  

## License  

This project is licensed under the MIT License. See the `LICENSE` file for details.  

---  

Happy coding! 🚀  
```  

This `README.md` provides a clear overview, installation steps, and detailed descriptions of the app's functionality. Let me know if you'd like to customize any section further!
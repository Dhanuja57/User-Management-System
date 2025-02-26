## **User Management App - Summary**  

This **React application** allows users to **fetch, add, update, and delete** user records using the **JSONPlaceholder Fake API**. The interface consists of a table where user details such as **name, email, and website** are displayed.  

### **Functionality**  
1. **Fetching Users**  
   - The app retrieves an initial list of users from the API and displays them in a table.  
2. **Adding Users**  
   - Users can enter a name, email, and website to add a new user, which gets stored temporarily in the state.  
3. **Editing Users**  
   - The email and website fields are **editable inline**, allowing users to modify them directly.  
4. **Updating Users**  
   - Once edited, users can be updated via a **PUT request** to the API.  
5. **Deleting Users**  
   - Users can be removed from the list via a **DELETE request**, updating the UI accordingly.  
6. **Notifications**  
   - **Blueprint.js Toaster** provides success messages for actions like adding, updating, and deleting users.  

### **API Integration**  
- **GET Request**: Fetches user data from JSONPlaceholder.  
- **POST Request**: Adds a new user.  
- **PUT Request**: Updates user details.  
- **DELETE Request**: Removes a user from the list.  

### **Technologies Used**  
- **React.js** for UI and state management.  
- **Blueprint.js** for UI components and notifications.  
- **JSONPlaceholder API** for mock data handling.  

This project demonstrates **CRUD operations** in React with **API integration and dynamic UI updates**. 🚀

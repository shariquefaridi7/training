// Define the CRUD API URL
const apiUrl = 'https://crudcrud.com/api/175fd45e5d76430ea9a0c3f2de262de0/appointment';

// Function to fetch and display data



document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Send data to the API
 const Post =async()=>{
    try {
        let res =await axios.post(apiUrl, formDataObject);
        e.target.reset();
        console.log(res)
    } catch (error) {
        console.log(error)
    }
   
   } 
   Post()
      
});
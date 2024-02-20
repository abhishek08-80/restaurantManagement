
import  creatingCategory  from '../services/category/category';

const categoryRoute = (app :any) => {
    //route to create a section
    app.post('/createCategory', creatingCategory.creatingCategory);
 }
 export default categoryRoute;
 
 
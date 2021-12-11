import './App.css';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const recipe = [
  {
    "rcp_img": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg&q=85",
    "rcp_name": "Pizza",
    "prep_time": "40min",
    "calories": "266 calories"
  },
  {
    "rcp_img": "https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg",
    "rcp_name": "Burger",
    "prep_time": "20min",
    "calories": "295 calories"
  },
  {
    "rcp_img": "https://static.toiimg.com/photo/75356205.cms",
    "rcp_name": "Chicken noodles",
    "prep_time": "30min",
    "calories": "36 calories"
  },
  {
    "rcp_img": "https://saltandbaker.com/wp-content/uploads/2020/12/New-Oreo-Milkshake-3.jpg",
    "rcp_name": "Oreo milkshake",
    "prep_time": "15min",
    "calories": "262 calories"
  }
]

export default function App() {
  return (
    <div className="App">
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar className="links">
                Recipe
              </Toolbar>
            </AppBar>
          </Box>
        </div>
        <div className="recipe_flex">
          {recipe.map((rcp, index) => (
            <Recipes
              key={index}
              img={rcp.rcp_img}
              name={rcp.rcp_name}
              prep_time={rcp.prep_time}
              calories={rcp.calories}
            />
          ))}
        </div>
        
    </div>
  );
}

function Recipes({ img, name, prep_time, calories }){
  return(
    <div class="recipe_data">
      <img width="200px" height="200px" src={img} alt={name} />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Time:</strong> {prep_time}</p>
      <p><strong>Calories:</strong> {calories}</p>
    </div>
  )
}
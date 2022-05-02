import React from 'react';
import SINavBar from './SINavBar';

import Grid from '@mui/material/Grid';


function StapleIngredients({user, setUser}) {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>
                    <SINavBar  user={user} setUser={setUser}/>
                </Grid>
                <Grid item xs={10} md={10}>
                <h1>Staple ingredients</h1>
                <br></br>
                <h3>- good to have handy in your pantry -</h3>
                <br></br>
                <h2>Oils:</h2>
                <ul>
                    <li>coconut oil</li>
                    <li>oilve oil</li>
                    <li>sesame oil</li>
                    <li>sunflower oil</li>
                    <li>vegetable oil</li>
                </ul>
                <h2>Wines/Vinegars/Broths:</h2>
                <ul>
                    <li>apple cider vinegar</li>
                    <li>mirin</li>
                    <li>red wine vinegar</li>
                    <li>rice wine vinegar</li>
                    <li>vegetable broth</li>
                </ul>
                <h2>Milk:</h2>
                <ul>
                    <li>coconut milk</li>
                    <li>rice milk</li>
                </ul>
                <h2>Grains/Carbs:</h2>
                <ul>
                    <li>elbow macarni pasta</li>
                    <li>GF corn tortillas</li>
                    <li>GF tortilla chips</li>
                    <li>panko bread crumbs</li>
                    <li>quinoa</li>
                    <li>rice</li>
                    <li>rice noodles</li>
                    <li>short pasta</li>
                </ul>
                <h2>Flours/Baking goods:</h2>
                <ul>
                    <li>active dry yeast</li>
                    <li>all-purpose flour</li>
                    <li>baking powder</li>
                    <li>baking soda</li>
                    <li>cornmeal</li>
                    <li>cornstarch</li>
                </ul>
                <h2>Canned goods -no salt added-:</h2>
                <ul>
                    <li>beans: black</li>
                    <li>beans: cannellini/great northern</li>
                    <li>beans: kidney</li>
                    <li>chickpeas</li>
                    <li>corn</li>
                    <li>hominy</li>
                    <li>tomatoes: diced</li>
                    <li>tomatoes: fire roasted</li>
                </ul>
                <h2>Dried fruit/legumes/nuts:</h2>
                <ul>
                    <li>apricots</li>
                    <li>coconut flakes</li>
                    <li>lentils</li>
                    <li>peanuts</li>
                    <li>raisins</li>
                </ul>
                <h2>Salt/Sugar:</h2>
                <ul>
                    <li>sea salt</li>
                    <li>GF soy sauce</li>
                    <li>sugar</li>
                </ul>
                <h2>Dried spices/seeds:</h2>
                <ul>
                    <li>allspice</li>
                    <li>ancho pepper -whole-</li>
                    <li>black pepper</li>
                    <li>cardamom</li>
                    <li>cayenne</li>
                    <li>chili flakes</li>
                    <li>chipotle</li>
                    <li>cinnamon</li>
                    <li>clove</li>
                    <li>cumin</li>
                    <li>curry</li>
                    <li>fennel seeds</li>
                    <li>ginger</li>
                    <li>nutmeg</li>
                    <li>paella spice blend</li>
                    <li>sesame seeds</li>
                    <li>smoked paprika</li>
                    <li>taco seasoning</li>
                    <li>turmeric</li>
                    <li>white pepper</li>
                </ul>
                <h2>Dried herbs:</h2>
                <ul>
                    <li>basil</li>
                    <li>bay leaves</li>
                    <li>coriander</li>
                    <li>dill</li>
                    <li>marjoram</li>
                    <li>oregano</li>
                    <li>parsley</li>
                    <li>rosemary</li>
                    <li>thyme</li>
                </ul>
                </Grid>
            </Grid>
        </div>
    )
};

export default StapleIngredients;
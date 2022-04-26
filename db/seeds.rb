User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all


puts "Seeding users..."

User.create(username: "elizabeth", password: "elizabethiscool", password_confirmation: "elizabethiscool")

puts "Seeding recipes..."
# blt = Recipe.create(name: "blt", allergy_code: "vegan", ingredient_list: ["1 slice tomato", "2 slices bacon"], instructions: "put it together")
# salad = Recipe.create(name: "salad", allergy_code: "gf", ingredient_list: ["3 lettuce leaves", "1 quartered tomato"], instructions: "toss it together")

chinese_fried_rice = Recipe.create(name: "Chinese fried rice", allergy_code: "GF, VE, NF", ingredient_list: ["2 Tbsp sunflower oil", "1/2 cup broccoli - chopped", "1/8 cup onion - sliced", "1/2 cup carrot - julienned", "1/4 cup mirin", "1/4 cup bell pepper - diced", "1/4 cup asparagus - diced", "1 Tbsp GF soy sauce", "1/8 tsp chili flakes", "1/8 cup parsley - minced", "1/8 cup sesame oil", "1 1/2 cup rice - boiled"], instructions: "Put half of the sunflower oil in a large skillet on medium heat. Add broccoli, onion, carrot, and cook, stirring often, for a couple of minutes. Add mirin. Add bell pepper and asparagus. Season with soy sauce, chili flakes, and parsley. Cook until veggies are al dente. Remove from the pan, set aside. 
Put the rest of the sunflower oil and the sesame oil in the skillet over medium heat, add the rice, stir often until crispy. Add the veggies. Mix until combined. Serve hot.")
pasta_e_fagioli = Recipe.create(name: "Pasta e fagioli", allergy_code: "VE, NF", ingredient_list: ["2 Tbsp sunflower oil", "1/4 cup onion - diced", "1 garlic clove - minced", "1/4 cup celery - diced", "1/4 cup carrot - diced", "1 bay leaf", "1/8 cup parsley - minced", "1 tsp dried rosemary", "1/2 cup water", "1 cup (no salt added) canned diced tomatoes", "1 cup (no salt added) canned cannellini beans - drained", "1 1/2 cup kale - chopped", "1/4 tsp salt", "1/4 tsp black pepper", "1/2 cup elbow macaroni pasta", "1 1/2 cup vegetable broth"], instructions: "In a large non-stick pot, warm up half of the sunflower oil. Add the onion and the garlic and cook for 1 minute. Add the celery, the carrots, the bay leaves, the parsley, and the rosemary. Cook for 10 minutes, adding salt, pepper, and half of the water half way through. Add the tomatoes and cook for 5 minutes. Add the beans, the kale, the rest of the water, and the remaining vegetable oil. Let it simmer for 3 minutes. Add the pasta and the vegetable broth. Mix well. Cook uncovered on low heat stirring often (so the pasta doesn’t stick to the bottom of the pan), until the pasta is al dente; about 15 minutes. Adjust with salt and pepper. Serve hot.")
lentil_stew = Recipe.create(name: "Lentil stew with avocado salsa", allergy_code: "GF, VE, NF", ingredient_list: ["1/2 cup avocado - small diced", "1 Tbsp jalapeño - thinly sliced", "1/2 cup tomato - small diced", "1/4 cup onion - small diced", "1/8 cup cilantro - chopped", "1 Tbsp lime - juiced", "3/4 cup dry lentils", "1 garlic clove - minced", "1/4 tsp cumin", "3 cup water", "3/4 cup sweet potato - peeled, small diced", "1/2 cup tomato - diced", "1/2 cup celery - small diced", "1/4 cup bell pepper - diced", "1/2 tsp smoked paprika", "1/4 tsp salt, 1 1/2 cup rice - boiled, kept warm"], instructions: "Make the salsa: mix all the ingredients (from avocado to lime juice) together. Set aside in the cooler.
Make the stew: place the lentils, the garlic, the salt, and the cumin in a large pot; add the water. Cook over medium heat for 2 minutes. Add the sweet potatoes, cook for 10 minutes. Add the tomatoes, the celery, the bell pepper, and the smoked paprika and cook for 5 minutes. Adjust with salt. Serve hot with rice and avocado salsa on the side.")
polenta_with_veggies = Recipe.create(name: "Polenta with veggies stew", allergy_code: "GF, VE, NF", ingredient_list: ["4 1/2 cup water", "1/2 Tbsp salt", "1 Tbsp olive oil", "1 3/4 cup medium grain cornmeal flour", "2 Tbsp vegetable oil", "1/4 cup onion - diced", "1 garlic clove - minced", "1/2 cup eggplant - diced", "1/2 cup bell pepper - diced", "1/4 cup olives - pitted and chopped", "1/2 Tbsp smoked paprika", "1/2 tsp fennel seeds", "1/2 Tbsp dried basil", "1/2 tsp dried marjoram", "1/2 Tbsp dried parsley", "1/8 tsp chili flakes", "1 cup (no salt added) canned chickpeas - drained", "1 cup (no salt added) canned fire roasted tomatoes", "1/4 tsp salt"], instructions: "Make the polenta: bring the water to a boil in a big pot. Add the salt and the olive oil. Slowly pour the cornmeal into the water while continuously stirring it with a whisk to avoid the formation of lumps. When it starts boiling again, turn the heat to the lowest setting, cook for about 50 minutes, stirring every 5-10 minutes. Keep warm.
Meanwhile, make the stew: in a large pot, warm up the vegetable oil. Add the onion and the garlic, cook for 5 minutes on medium heat. Add the eggplant, cook for 5 minutes, stirring often and adding water to prevent it sticking to the bottom of the pot. Add the bell pepper, the olives, and all the spices and cook for 2 minutes. Add the chickpeas and the tomatoes and adjust with salt. Cook for 5 minutes. Serve hot alongside the polenta.")
ratatouille_quiche = Recipe.create(name: "Ratatouille quiche", allergy_code: "VE, NF", ingredient_list: ["1/4 cup vegetable oil", "1/4 tsp salt", "1 cup all purpose flour", "1/4 cup cold water", "1 1/2 Tbsp olive oil", "1/4 cup onion - diced", "1/4 cup zucchini - diced", "1/4 cup eggplant - diced", "1/4 cup mushrooms - diced", "1/4 cup green beans - diced", "1/4 cup bell pepper - diced", "1/2 cup (no salt added) canned diced tomatoes", "1/8 cup parsley - minced", "1/2 tsp dried thyme", "1/4 tsp salt", "1/4 tsp black pepper", "1 1/2 Tbsp coconut oil or vegan butter", "1 Tbsp flour", "1/2 cup rice milk", "1/8 tsp ground nutmeg", "1/4 tsp salt", "1/4 tsp black pepper"], instructions: "Make the dough: in a bowl mix all the ingredients (from vegetable oil to cold water) together, knead until just combined. Make a ball, cover it with plastic wrap and keep it in a cool place. Turn on the oven to 375 degrees F.
Make the ratatouille: in a large skillet, warm up the oil. Add the onion and cook for 2 minutes. Add the veggies and sauté them until al dente. Add the tomatoes and the herbs. Add salt and pepper to taste. Keep aside.
Make the vegan béchamel: in a medium pot melt the coconut oil over medium heat. Remove from heat, add the flour, whisk together until there are no more lumps. Add the milk slowly without stopping whisking until all is incorporated and there are no more lumps. Put the pot back on low heat, keep whisking to avoid the formation of lumps. Remove from heat when it starts getting dense. Add the nutmeg, and salt and pepper to taste. Keep aside.
Assemble the quiche: Roll out the dough. Oil an oven pan, place dough in it, dock the crust evenly with a fork. Pour in half of the ratatouille, level it out, pour in béchamel and level it out, cover with the rest of the ratatouille. 
Bake it until the crust is golden brown, about 35-45 minutes. Cut into slices and serve hot.")
veggies_and_tofu_curry = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
asian_quinoa_salad = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
coconut_rice_bowl = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
roasted_broccoli_pasta = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
vegan_pozole = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
veggies_tagine = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
southwest_salad = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
vegan_mac_and_cheese = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
falafel = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
vegan_paella = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
minestrone = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
roasted_veggie_pasta = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
tex_mex_casserole = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
potato_leek_soup = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
roasted_squash_chili = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
vegan_burger = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
taco_bar = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
pesto_pasta = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
tofu_pad_thai = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
mediterranean_rice_salad = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
lentil_and_veggie_soup = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
veggies_pizza = Recipe.create(name: "", allergy_code: "", ingredient_list: [], instructions: "")
mediterranean_salad = Recipe.create(name: "Mediterranean salad", allergy_code: "GF, VE, NF", ingredient_list: ["1 1/2 cup lettuce - chopped", "1/2 cup tomatoes - small diced", "1/8 cup olives - pitted and chopped", "1/4 cup cucumber - small diced", "1 Tbsp mint - chopped", "1 1/2 Tbsp olive oil", "1/2 Tbsp red wine vinegar", "1/4 tsp salt", "1/4 tsp black pepper"], instructions: "In a large bowl, combine all veggies. In a jar combine the mint, the olive oil, the vinegar, the salt and the pepper and shake well. Pur the dressing on the salad and toss well.")

puts "Seeding ingredients..."
# lettuce = Ingredient.create(name: "lettuce")
# tomato = Ingredient.create(name: "tomato")

broccoli = Ingredient.create(name: "broccoli")
carrot = Ingredient.create(name: "carrot")
asparagus = Ingredient.create(name: "asparagus")
garlic = Ingredient.create(name: "garlic")
celery = Ingredient.create(name: "celery")
tomato = Ingredient.create(name: "tomato")
olive = Ingredient.create(name: "olive")
cucumber = Ingredient.create(name: "cucumber")
avocado = Ingredient.create(name: "avocado")
eggplant = Ingredient.create(name: "eggplant")
jalapeño = Ingredient.create(name:"jalapeño pepper")
bell_pepper = Ingredient.create(name: "bell pepper")
serrano = Ingredient.create(name: "serrano pepper")
parsley = Ingredient.create(name: "parsley")
mint = Ingredient.create(name: "mint")
cilantro = Ingredient.create(name: "cilantro")
scallion = Ingredient.create(name: "scallion")
basil = Ingredient.create(name: "basil")
kale = Ingredient.create(name: "kale")
lettuce = Ingredient.create(name: "lettuce")
spinach = Ingredient.create(name: "spinach")
collard = Ingredient.create(name: "collard")
lime = Ingredient.create(name: "lime")
lemon = Ingredient.create(name: "lemon")
onion = Ingredient.create(name: "onion")
red_onion = Ingredient.create(name: "red onion")
potato = Ingredient.create(name: "potato")
sweet_potato = Ingredient.create(name: "sweet potato")
zucchini = Ingredient.create(name: "zucchini")
mushroom = Ingredient.create(name: "mushroom")
green_bean = Ingredient.create(name: "green bean")
butternut_squash = Ingredient.create(name: "butternut squash")
cauliflower = Ingredient.create(name: "cauliflower")
tofu = Ingredient.create(name: "tofu")
edamame = Ingredient.create(name: "edamame")
cabbage = Ingredient.create(name: "cabbage")
ginger = Ingredient.create(name: "ginger")
radish = Ingredient.create(name: "radish")
leek = Ingredient.create(name: "leek")
corn = Ingredient.create(name: "corn on the cob")
bean_sprout = Ingredient.create(name: "bean sprout")

puts "Connecting recipes and ingredients..."
# blt.ingredients << [tomato, lettuce]
# salad.ingredients << [lettuce]


puts "Done seeding!"
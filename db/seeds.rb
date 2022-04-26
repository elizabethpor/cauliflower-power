User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all


puts "Seeding users..."

User.create(username: "elizabeth", password: "elizabethiscool", password_confirmation: "elizabethiscool")

puts "Seeding recipes..."
# blt = Recipe.create(name: "blt", allergy_code: "vegan", ingredient_list: ["1 slice tomato", "2 slices bacon"], instructions: "put it together")
# salad = Recipe.create(name: "salad", allergy_code: "gf", ingredient_list: ["3 lettuce leaves", "1 quartered tomato"], instructions: "toss it together")

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
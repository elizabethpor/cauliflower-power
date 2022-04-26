User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all

puts "Seeding users..."

User.create(username: "elizabeth", password: "elizabethiscool", password_confirmation: "elizabethiscool")

puts "Seeding recipes..."
blt = Recipe.create(name: "blt", allergy_code: "vegan", ingredient_list: ["1 slice tomato", "2 slices bacon"], instructions: "put it together")
salad = Recipe.create(name: "salad", allergy_code: "gf", ingredient_list: ["3 lettuce leaves", "1 quartered tomato"], instructions: "toss it together")

puts "Seeding ingredients..."
lettuce = Ingredient.create(name: "lettuce")
tomato = Ingredient.create(name: "tomato")


puts "Connecting recipes and ingredients..."
blt.ingredients << [tomato, lettuce]
salad.ingredients << [lettuce]


puts "Done seeding!"
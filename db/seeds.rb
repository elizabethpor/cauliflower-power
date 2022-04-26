
User.destroy_all


puts "Seeding users..."

User.create(username: "elizabeth", password: "elizabethiscool", password_confirmation: "elizabethiscool")

puts "Done seeding!"
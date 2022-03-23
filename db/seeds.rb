# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Greeting.destroy_all

Greeting.create!(text: 'Hello, Welcome to my Greeting app')
Greeting.create!(text: 'I hope you have a beautiful day ahead')
Greeting.create!(text: 'Welcome, Never give up')
Greeting.create!(text: 'Hello, How are you today?')
Greeting.create!(text: 'Today is another day to smile!!')

p "Created #{Greeting.count} greetings"
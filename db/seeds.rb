# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding'

Product.create(title: "Midnight 32", description: 'This little bag of awesomeness is one of sleek, dark looks. The jet black makes it stand out next to all other footbags!  It has 32 panels, pitch black synthetic suede fabric, and of course, metal filling. You won\'t ever regret getting your hands (or we should say feet) on one of these!', price: 1300, image: 'https://cdn.shopify.com/s/files/1/0568/3419/5648/products/midnight-32-metal_940x.jpg?v=1626882161')
Product.create(title: 'BULLSEYE 62', description: 'The Bullseye 62 Panel Footbag is made with those with accuracy and longevity in mind. As with most of the larger panel count footbags, these will take some beating (with love) to break in completely, but once you get there, they are oh so sweet.', price: 1500, image:'https://cdn.shopify.com/s/files/1/0568/3419/5648/products/bullseye-62-plastic-1_940x.jpg?v=1626881853')

puts 'done seeding'
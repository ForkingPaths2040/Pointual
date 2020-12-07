# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Manager.destroy_all
Employee.destroy_all
Infraction.destroy_all

require 'faker'

10.times do 
  @first_name = Faker::Name.unique.first_name
  @employee = Employee.create!(
    first_name: @first_name,
    last_name: Faker::Name.unique.last_name,
    points: 0,
    email: Faker::Internet.email(name: @first_name),
    phone_number: "(111)-555-6789",
    position: Faker::Job.position,
    hire_date: Faker::Date.between(from: '2020-01-01', to: '2020-12-31'),
    tenure: Faker::Number.between(from: 1, to: 90),
    img_URL: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    )
end
Employee.create!(
  first_name: @first_name,
    last_name: Faker::Name.unique.last_name,
    points: 0,
    email: Faker::Internet.email(name: @first_name),
    phone_number: "(111)-555-6789",
    position: Faker::Job.position,
    hire_date: Faker::Date.between(from: '2020-01-01', to: '2020-12-31'),
    tenure: Faker::Number.between(from: 1, to: 90),
    img_URL: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
)
Employee.create!(
  first_name: @first_name,
    last_name: Faker::Name.unique.last_name,
    points: 0,
    email: Faker::Internet.email(name: @first_name),
    phone_number: "(111)-555-6789",
    position: Faker::Job.position,
    hire_date: Faker::Date.between(from: '2020-01-01', to: '2020-12-31'),
    tenure: Faker::Number.between(from: 1, to: 90),
    img_URL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
)
puts "#{Employee.count} employees created"

@user = Manager.create!(email: 'manager@email.com', password: '123456')

puts "#{Manager.count} users created"

# @date1 = Date.new(2020, 12, 20)
# @date2 = Date.new(2020, 12, 25)

# @employee1 = Employee.create!(
# first_name: 'John',
# last_name: 'Smith',
# points: 0,
# email: 'johnsmith@gmail.com',
# phone_number: 5551230000,
# position: 'Boards',
# hire_date: @date1,
# tenure: 15)
10.times do  
@infraction1 = Infraction.create!(
  attendance: 'tardy', 
  date: Faker::Date.between(from: '2020-01-01', to: '2020-12-31'), 
  points: Faker::Number.between(from: 1, to: 2), 
  reason: Faker::Lorem.sentence(word_count: 8), 
  employee: Employee.order('RANDOM()').first)
end

10.times do  
  @infraction1 = Infraction.create!(
    attendance: 'absence', 
    date: Faker::Date.between(from: '2020-01-01', to: '2020-12-31'), 
    points: Faker::Number.between(from: 3, to: 5), 
    reason: Faker::Lorem.sentence(word_count: 8), 
    employee: Employee.order('RANDOM()').first)
  end

puts "#{Infraction.count} infractions created"
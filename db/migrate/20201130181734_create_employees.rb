class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :first_name
      t.string :last_name
      t.integer :points
      t.string :email
      t.bigint :phone_number
      t.string :position
      t.date :hire_date
      t.integer :tenure

      t.timestamps
    end
  end
end

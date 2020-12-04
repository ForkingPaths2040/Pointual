class AddEmployeeToInfractions < ActiveRecord::Migration[6.0]
  def change
    add_reference :infractions, :employee, null: false, foreign_key: true
  end
end

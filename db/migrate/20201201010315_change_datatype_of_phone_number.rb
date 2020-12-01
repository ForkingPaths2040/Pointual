class ChangeDatatypeOfPhoneNumber < ActiveRecord::Migration[6.0]
  def change
    change_column :employees, :phone_number, :string
  end
end

class AddImageToEmployees < ActiveRecord::Migration[6.0]
  def change
    add_column :employees, :img_URL, :string
  end
end

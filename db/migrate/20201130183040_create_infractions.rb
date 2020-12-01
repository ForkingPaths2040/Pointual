class CreateInfractions < ActiveRecord::Migration[6.0]
  def change
    create_table :infractions do |t|
      t.string :attendance
      t.date :date
      t.integer :points
      t.text :reason

      t.timestamps
    end
  end
end

class AddLocationToMachines < ActiveRecord::Migration[7.0]
  def change
    add_reference :machines, :location, null: false, foreign_key: true
  end
end

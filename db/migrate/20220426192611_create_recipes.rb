class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :allergy_code
      t.string :ingredient_list, array: true, default: []
      t.text :instructions
      t.timestamps
    end
  end
end

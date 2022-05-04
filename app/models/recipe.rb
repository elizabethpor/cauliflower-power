class Recipe < ApplicationRecord
    has_and_belongs_to_many :ingredients

    scope :select_by_ingredients, -> (selected_ingredients) {joins(:ingredients).where(ingredients: {name: selected_ingredients})}
end

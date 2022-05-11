class Recipe < ApplicationRecord
    has_and_belongs_to_many :ingredients
    has_many :favorites, dependent: :destroy
    has_many :users, through: :favorites


    scope :select_by_ingredients, -> (selected_ingredients) {joins(:ingredients).where(ingredients: {name: selected_ingredients})}
end

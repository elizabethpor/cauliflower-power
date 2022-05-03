class Recipe < ApplicationRecord
    has_and_belongs_to_many :ingredients

    scope :by_ingredient, -> (ingredients) {joins(:ingredients).where(ingredients: {name: ingredients})}
end

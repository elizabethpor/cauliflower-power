class Ingredient < ApplicationRecord
    has_and_belongs_to_many :recipes
    # has_one_attachment :photo
end

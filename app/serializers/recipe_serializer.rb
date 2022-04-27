class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :allergy_code, :ingredient_list, :instructions

  has_many :ingredients
end

class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :image

  has_many :recipes
end

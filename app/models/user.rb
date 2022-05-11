class User < ApplicationRecord
    has_secure_password
    has_many :favorites, dependent: :destroy
    has_many :recipes, through: :favorites


    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 10, maximum: 64}
end

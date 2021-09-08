class User < ApplicationRecord
    has_secure_password
    has_one :shopping_cart
    has_many :cart_items, through: :shopping_cart
    
    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    validates :password, :confirmation => true, :length => {:within => 8..15}, on: :create
end

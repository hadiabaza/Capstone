class Product < ApplicationRecord
    has_many :cart_items
    has_many :shopping_carts, through: :cart_items

    validates :title, presence: true
    validates :description, presence: true
    validates :price, presence: true
    validates :image, presence: true
end

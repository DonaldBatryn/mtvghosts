class Gig < ApplicationRecord
    validates :when, :venue, :city_state, :price, :ages, presence: true

    has_one_attached :promo_image
end

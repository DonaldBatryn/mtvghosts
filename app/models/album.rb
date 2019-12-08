class Album < ApplicationRecord
    validates :name, presence: true

    has_many :songs,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Song

    # has_one_attached :artwork
end

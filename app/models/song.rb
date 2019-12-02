class Song < ApplicationRecord
    validates :title, presence: true

    belongs_to :album,
    primary_key: :id,
    foreign_key: :album_id,
    class_name: :Album,
    optional: true
end

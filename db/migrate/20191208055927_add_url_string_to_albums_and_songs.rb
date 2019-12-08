class AddUrlStringToAlbumsAndSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :imageUrl, :string
    add_column :songs, :audioUrl, :string
    add_column :gigs, :imageUrl, :string
  end
end

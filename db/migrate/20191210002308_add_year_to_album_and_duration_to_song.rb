class AddYearToAlbumAndDurationToSong < ActiveRecord::Migration[5.2]
  def change
    add_column :albums, :year, :string
    add_column :songs, :duration, :string
  end
end

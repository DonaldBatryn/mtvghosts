@albums.each do |album|
    json.set! album.id do
        json.extract! album, :id, :name, :imageUrl
        json.songs album.songs.each do |song|
            json.title song.title
            json.album_id song.album_id
            json.audioUrl song.audioUrl
        end
    end
end

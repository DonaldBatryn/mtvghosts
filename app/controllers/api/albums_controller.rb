class Api::AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)
    if @album.save
      render json: @album
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy
    render json: @album.id
  end

  def index
    @albums = Album.all
    # render "api/albums/index"
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = Album.find(params[:id])
  end

  def album_params
    params.require(:album).permit(:name)
  end
end

class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
    if @song.save
      render json: @song
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    render json: @song.id
  end

  def update
    @song = Song.find(params[:id])
    if @song.update_attributes(song_params)
      render json: @song
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
  end

  def song_params
    params.require(:song).permit(:title, :audioUrl, :duration)
  end
end

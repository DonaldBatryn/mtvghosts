class Api::GigsController < ApplicationController

  def create
    @gig = Gig.new(gig_params)
    if @gig.save
      render json: @gig
    else
      render json: @gig.errors.full_messages, status: 422
    end
  end

  def destroy
    @gig = Gig.find(params[:id])
    @gig.destroy
    render json: @gig.id
  end

  def show
    @gig = Gig.find(params[:id])
  end

  def index
    @gigs = Gig.all
    # render "api/gigs/index"
  end

  def update
    @gig = Gig.find(params[:id])
    if @gig.update_attributes(gig_params)
      render json: @gig
    else
      render json: @gig.errors.full_messages, status: 422
    end
  end

  def gig_params
    params.require(:gig).permit(:when, :venue, :city_state, :price, :ages, :details)
  end
end

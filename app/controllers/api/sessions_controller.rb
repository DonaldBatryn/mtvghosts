class Api::SessionsController < ApplicationController
  def create
    @admin = Admin.find_by_credentials(params[:admin][:name], params[:admin][:password])
  
    if @admin
      login(@admin)
      render json: @admin
    else
      render json: ["Wrong name or password, please try again"], status: 401
    end
  end

  def destroy
    logout
    render json: ['Logged out successfully']
  end
end

class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      # mailer stuff here, display thank you/signup success
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: ['You have unsubscribed from our mailing list.']
  end

  def index
    @users = User.all
  end

  def user_params
    params.require(:user).permit(:name, :email, :location)
  end
end

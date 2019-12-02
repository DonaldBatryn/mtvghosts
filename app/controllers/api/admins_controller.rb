class Api::AdminsController < ApplicationController

    def create
        @admin = Admin.new(admin_params)

        if @admin.save
            login(@admin)
            render json: @admin
        else
            render json: @admin.errors.full_messages, status: 422
        end
    end

    def admin_params
        params.require(:admin).permit(:name, :email, :password)
    end
end

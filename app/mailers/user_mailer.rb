class UserMailer < ApplicationMailer
    default from: 'donald.batryn@gmail.com'

    def welcome_email
        @user = params[:user]
        # @url = 'http://example.com/login'
        mail(to: @user.email, subject: 'MTVG mail awaits you...')
    end
end

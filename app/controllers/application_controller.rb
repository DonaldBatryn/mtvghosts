class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def login(admin)
        @current_user = admin
        session[:session_token] = admin.reset_session_token!
    end

    def current_user
        @current_user ||= Admin.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def logout
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def require_login
        redirect to api_session_url unless logged_in?
    end
end

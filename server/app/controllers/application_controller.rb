class ApplicationController < ActionController::API
  before_action :authorize_request
  
  # rescue_from ActionController::ParameterMissing, with: :handle_parameter_missing

  # def handle_parameter_missing(exception)
  #   render json: { error: exception.message }, status: :bad_request
  # end

  private
  def authorize_request
      header = request.headers['Authorization']
      header = header.split(' ').last if header
      begin
        @decoded = JsonWebToken.decode(header)
        @current_user = User.find(@decoded[:user_id])
      rescue ActiveRecord::RecordNotFound => e
        render json: { errors: e.message }, status: :unauthorized
      rescue JWT::DecodeError => e
        render json: { errors: e.message }, status: :unauthorized
      end
  end
end

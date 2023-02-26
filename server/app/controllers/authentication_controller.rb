class AuthenticationController < ApplicationController
  skip_before_action :authorize_request

  def signup
    # required_params = [:full_name, :email, :password]
    # required_params.each do |param|
    #   if params.key?(param)
    #     render json: { errors: "Missing parameter #{param.to_s}." }, :status => :bad_request 
    #   end
    # end
    @user = User.new(signup_params)
    if @user.save
      token = JsonWebToken.encode(user_id: @user.id)
      render json: {user: {full_name: @user.full_name}, token: token}, status: :ok
    else
      render json: {error: @user.errors }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by_email(params[:email])
    if @user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: @user.id)
      render json: {user: {full_name: @user.full_name}, token: token}, status: :ok
    else
      render json: { error: 'unauthorized'}, status: :unauthorized
    end
  end

  private
    def signup_params
      params.permit(:full_name, :email, :password)
    end
end

class AuthenticationController < ApplicationController

  def signup
    @user = User.new(signup_params)

    if @user.save
      render json: @user, only: [:id, :email], status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    def signup_params
      params.permit(:full_name, :email, :password)
    end
end

class UserController < ApplicationController
  before_action :authenticate_user

  def create
    @user = User.new(user_params)
    if @user && @user.save
      redirect_to user_token_path
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def update
    @user = User.find_by(id: params[:id])
    @user.update(user_params)
    if @user.save
      render json: @user
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.delete
    render body: nil, status: :no_content
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end

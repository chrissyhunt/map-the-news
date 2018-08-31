class SearchesController < ApplicationController
  before_action :authenticate_user

  def create
    @search = Search.new(q: set_q, start_date: set_start_date, end_date: set_end_date)
    @search.user = current_user
    if @search && @search.save
      render json: @search
    end
  end

  def show
    @search = Search.find_by(id: params[:id])
    render json: @search, status: 200
  end

  def destroy
    @search = Search.find_by(id: params[:id])
    @search.delete
    render body: nil, status: :no_content
  end

  private

  def set_q
    params[:q]
  end

  def set_start_date
    params[:startDate]
  end

  def set_end_date
    params[:endDate]
  end

end

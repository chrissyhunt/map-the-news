class SearchesController < ApplicationController

  def index
    @searches = Search.where(user_id: current_user.id)
    render json: @searches
  end

  def create
    @search = Search.find_or_initialize_by(q: set_q, start_date: set_start_date, end_date: set_end_date, user_id: current_user.id)
    if @search && @search.save
      render json: @search
    end
  end

  def update
    @search = Search.find_by(id: search_params[:id])
    @search.update(search_params)
    render json: @search
  end

  def destroy
    @search = Search.find_by(id: params[:id])
    @search.delete
    render body: nil, status: :no_content
  end

  private

  def search_params
    params.permit(:id, :votes)
  end

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

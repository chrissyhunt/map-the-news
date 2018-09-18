class SearchesController < ApplicationController

  def create
    @search = Search.find_or_initialize_by(q: set_q, start_date: set_start_date, end_date: set_end_date, user_id: current_user.id)
    if @search && @search.save
      render json: @search
    end
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

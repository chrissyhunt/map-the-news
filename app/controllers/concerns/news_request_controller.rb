require 'rest-client'

class NewsRequestController < ApplicationController

  def create

  end

  private

  def news_request_params
    params.require(:news_request).permit(:query, :start_date, :end_date)
  end

end

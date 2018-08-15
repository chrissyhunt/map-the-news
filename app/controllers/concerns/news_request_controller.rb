require 'rest-client'

class NewsRequestController < ApplicationController

  def create
    @results = RestClient.get('https://newsapi.org/v2/everything?', {params: {
      apiKey: my_key,
      q: news_request_params.query,
      sources: sources,
      from: news_request_params.start_date,
      to: news_request_params.end_date,
      sortBy: relevancy
      }})
  end

  private

  def news_request_params
    params.require(:news_request).permit(:query, :start_date, :end_date)
  end

  def my_key
    ENV["NEWS_API_KEY"]
  end

  def sources
  end

end

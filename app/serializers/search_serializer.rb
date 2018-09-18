class SearchSerializer < ActiveModel::Serializer
  attributes :id, :q, :start_date, :end_date, :votes
  belongs_to :user
end

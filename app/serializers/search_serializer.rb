class SearchSerializer < ActiveModel::Serializer
  attributes :id, :q, :start_date, :set_end_date
  belongs_to :user
end

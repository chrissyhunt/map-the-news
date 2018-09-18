class AddVotesToSearches < ActiveRecord::Migration[5.1]
  def change
    add_column :searches, :votes, :integer, :default => 0
  end
end

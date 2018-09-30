class CreateSearches < ActiveRecord::Migration[5.1]
  def change
    create_table :searches do |t|
      t.string :q
      t.date :start_date
      t.date :end_date
      t.integer :user_id
    end
  end
end

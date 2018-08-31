class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :searches, :query, :q
  end
end

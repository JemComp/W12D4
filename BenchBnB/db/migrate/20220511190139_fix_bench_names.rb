class FixBenchNames < ActiveRecord::Migration[5.2]
  def change
    rename_column :benches, :desciption, :description
  end
end

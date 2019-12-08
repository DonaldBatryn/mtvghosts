class ChangeGigDateColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :gigs, :when
    add_column :gigs, :when, :string
  end
end

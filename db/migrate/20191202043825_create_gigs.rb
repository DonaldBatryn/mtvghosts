class CreateGigs < ActiveRecord::Migration[5.2]
  def change
    create_table :gigs do |t|
      t.datetime :when
      t.string :venue
      t.string :city_state
      t.string :price
      t.text :details
      t.string :ages

      t.timestamps
    end
  end
end

class AddDetailsToGreeting < ActiveRecord::Migration[7.0]
  def change
    add_column :greetings, :text, :string
  end
end

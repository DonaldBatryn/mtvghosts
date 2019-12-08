# json.array! do
    @gigs.each do |gig|
        json.extract! gig, :id, :when, :venue, :city_state, :ages, :price, :details
    end
# end
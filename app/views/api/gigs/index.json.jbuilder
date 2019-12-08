@gigs.each do |gig|
    json.set! gig.id do
        json.extract! gig, :id, :when, :venue, :city_state, :ages, :price, :details, :imageUrl
    end
end

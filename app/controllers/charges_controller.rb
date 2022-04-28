require 'stripe'

class ChargesController < ApplicationController

  def purchase
    puts Stripe.api_key
      session = Stripe::Checkout::Session.create({
        line_items: [{
          price: 'price_1KtYfsDg1tW1NT2Z5Od40r91',
          quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:4000/success' + '?success=true',
        cancel_url: 'http://localhost:4000/canceled' + '?canceled=true',
      })
      redirect_to session.url, status: 303
    end

end

